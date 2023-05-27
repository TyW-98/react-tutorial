import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Split from "react-split";
import { nanoid } from "nanoid";
import { onSnapshot, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore";
import { notesCollection, db } from "../db";

export default function App() {
  const [notes, setNotes] = useState(() => {
    const localStoredNotes = localStorage.getItem("notes");
    return localStoredNotes ? JSON.parse(localStoredNotes) : [];
  });

  const [currentNoteId, setCurrentNoteId] = useState("");
  const [tempNoteText, setTempNoteText] = useState("");

  useEffect(() => {
    if (!currentNoteId) {
      setCurrentNoteId(notes[0]?.id);
    }
  }, [notes]);

  async function createNewNote() {
    const newNote = {
      body: "# Type your markdown note's title here",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    const newNoteRef = await addDoc(notesCollection, newNote);
    setCurrentNoteId(newNoteRef.id);
  }

  // Local Update Note
  // function updateNote(text) {
  //   setNotes((prevNotes) => {
  //     const updatedNote = {
  //       ...prevNotes.find((note) => {
  //         return note.id === currentNoteId;
  //       }),
  //       body: text,
  //     };
  //     const otherNotes = prevNotes.filter((note) => {
  //       return note.id !== currentNoteId;
  //     });
  //     return [updatedNote, ...otherNotes];
  //   });
  // }

  const sortedNotes = notes.sort((noteA, noteB) => {
    return noteB.updatedAt - noteA.updatedAt;
  });

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  async function updateNote(text) {
    const updateNoteRef = doc(db, "notes", currentNoteId);
    await setDoc(
      updateNoteRef,
      { body: text, updatedAt: Date.now() },
      { merge: true }
    );
  }

  useEffect(() => {
    const currentNote = findCurrentNote();
    if (currentNote) {
      setTempNoteText(currentNote.body);
    }
  }, [notes]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (tempNoteText !== findCurrentNote().body) {
        updateNote(tempNoteText);
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [tempNoteText]);

  async function deleteNote(noteId) {
    const deleteNoteRef = doc(db, "notes", noteId);
    await deleteDoc(deleteNoteRef);
  }

  useEffect(() => {
    const unmount = onSnapshot(notesCollection, (snapshot) => {
      const notesArr = snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setNotes(notesArr);
    });
    return unmount;
  }, []);

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={sortedNotes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          <Editor
            tempNoteText={tempNoteText}
            setTempNoteText={setTempNoteText}
          />
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}

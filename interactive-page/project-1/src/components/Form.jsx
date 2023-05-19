export default function Form() {
  return (
    <div className="form-container">
      <form>
        <div className="form-main">
          <div className="form-input-container">
            <input type="text" />
            <input type="text" />
          </div>
          <button type="submit" className="submit-btn">
            Get a new Image 🖼
          </button>
        </div>
      </form>
    </div>
  );
}

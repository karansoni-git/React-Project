function Loading() {
  return (
    <div className="text-center loading">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "15rem", height: "15rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;

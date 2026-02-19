function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 12px",
        backgroundColor: "#1e76e9",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        marginTop: "8px"
      }}
    >
      {text}
    </button>
  )
}

export default Button

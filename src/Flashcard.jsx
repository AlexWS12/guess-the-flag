function Flashcard({ country, flag, showBack, onFlip, continent }) {
  return (
    <div
      className={`card ${continent.toLowerCase().replace(" ", "-")}`}
      onClick={onFlip}
    >
      {showBack ? (
    <h2 style={{ color: '#0f172a', fontSize: '2rem', padding: '1rem' }}>{country}</h2>
      ) : (
        <img src={flag} alt={`Flag of ${country}`} style={{ maxHeight: "90%", maxWidth: "90%", borderRadius: "8px" }} />
      )}
    </div>
  );
}
export default Flashcard;
function Flashcard({ country, flag, showBack, onFlip, difficulty }) {
  return (
    <div
      className={`card ${difficulty?.toLowerCase()}`}
      onClick={onFlip}
    >
      {showBack ? (
        <h2 style={{ color: '#0f172a', fontSize: '2rem', padding: '1rem' }}>
          {country}
        </h2>
      ) : (
        <img
          src={flag}
          alt={`Flag of ${country}`}
          style={{
            maxHeight: '90%',
            maxWidth: '90%',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.25)'
          }}
        />
      )}
    </div>
  );
}

export default Flashcard;

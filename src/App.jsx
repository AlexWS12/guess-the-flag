import './App.css';
import { useState } from 'react';
import Flashcard from './Flashcard';
import flashcards from './flashcards';

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const flipCard = () => setShowBack(!showBack);

  const nextCard = () => {
    const newIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentCardIndex(newIndex);
    setShowBack(false);
  };

  const current = flashcards[currentCardIndex];

  return (
    <div className="container">
      <h1>🌍 Guess the Flag!</h1>
      <p>Click the flag to reveal the country. Test your knowledge!</p>
      <p>Total Cards: {flashcards.length}</p>

      <Flashcard
        country={current.country}
        flag={current.flag}
        showBack={showBack}
        onFlip={flipCard}
        continent={current.continent}
      />

      <button onClick={nextCard}>Next</button>
    </div>
  );
}

export default App;

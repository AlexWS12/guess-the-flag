import { useState } from 'react'
import Flashcard from './Flashcard'
import './App.css'

const cards = [
  {
    country: "Norway",
    flag: "https://flagcdn.com/w320/no.png",
    difficulty: "Easy"
  },
  {
    country: "Russia",
    flag: "https://flagcdn.com/w320/ru.png",
    difficulty: "Hard"
  },
  {
    country: "Ireland",
    flag: "https://flagcdn.com/w320/ie.png",
    difficulty: "Medium"
  },
  {
    country: "Côte d'Ivoire",
    flag: "https://flagcdn.com/w320/ci.png",
    difficulty: "Hard"
  },
  {
    country: "Belgium",
    flag: "https://flagcdn.com/w320/be.png",
    difficulty: "Medium"
  },
  {
    country: "Venezuela",
    flag: "https://flagcdn.com/w320/ve.png",
    difficulty: "Medium"
  },
  {
    country: "Israel",
    flag: "https://flagcdn.com/w320/il.png",
    difficulty: "Easy"
  },
  {
    country: "Morocco",
    flag: "https://flagcdn.com/w320/ma.png",
    difficulty: "Medium"
  },
  {
    country: "Sri Lanka",
    flag: "https://flagcdn.com/w320/lk.png",
    difficulty: "Hard"
  },
  {
    country: "South Korea",
    flag: "https://flagcdn.com/w320/kr.png",
    difficulty: "Easy"
  }
]

function App() {
  const [index, setIndex] = useState(0)
  const [showBack, setShowBack] = useState(false)

  const nextCard = () => {
    const newIndex = Math.floor(Math.random() * cards.length)
    setIndex(newIndex)
    setShowBack(false)
  }

  const currentCard = cards[index]

  return (
    <div className="container">
      <h1>Guess the Flag</h1>
      <p>Click the card to reveal the country name!</p>
      <p>Total cards: {cards.length}</p>

      <Flashcard
        country={currentCard.country}
        flag={currentCard.flag}
        showBack={showBack}
        onFlip={() => setShowBack(!showBack)}
        difficulty={currentCard.difficulty}
      />

      <button onClick={nextCard}>Next</button>
    </div>
  )
}

export default App

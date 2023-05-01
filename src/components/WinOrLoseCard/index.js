// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props
  const imageUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const gameStatusText = score === 12 ? 'You Won' : 'You Lose'
  const captionText = score === 12 ? 'Best Score' : 'Score'

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <div className="win-lose-card">
      <div className="image-container">
        <img src={imageUrl} className="win-lose-image" alt="win or lose" />
      </div>
      <div className="text-container">
        <h1 className="game-status-text">{gameStatusText}</h1>
        <p className="caption-text">{captionText}</p>
        <p className="score-text">{`${score}/12`}</p>
        <button type="button" className="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard

// Write your code here.
import './index.css'

const Navbar = props => {
  const {score, topScore, isGameOver} = props
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo-image"
          />
        </div>
        <h1 className="logo-text">Emoji Game</h1>
      </div>
      {!isGameOver && (
        <div className="score-container">
          <p className="score">{`Score: ${score}`}</p>
          <p className="score">{`Top Score: ${topScore}`}</p>
        </div>
      )}
    </nav>
  )
}

export default Navbar

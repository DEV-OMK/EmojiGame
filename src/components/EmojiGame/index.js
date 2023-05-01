import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    emojiIdList: [],
    isGameOver: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  playAgain = () => {
    const {score, topScore} = this.state
    this.setState(prevState => ({
      topScore: score > topScore ? score : topScore,
      score: 0,
      isGameOver: !prevState.isGameOver,
      emojiIdList: [],
    }))
  }

  emojiClick = id => {
    const {emojiIdList, score} = this.state
    if (!emojiIdList.includes(id)) {
      if (score === 11) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          emojiIdList: [...prevState.emojiIdList, id],
          isGameOver: !prevState.isGameOver,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score + 1,
          emojiIdList: [...prevState.emojiIdList, id],
        }))
      }
    } else {
      this.setState(prevState => ({
        emojiIdList: [],
        isGameOver: !prevState.isGameOver,
      }))
    }
  }

  render() {
    const {score, topScore, isGameOver} = this.state
    const emojisList = this.shuffledEmojisList()
    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} isGameOver={isGameOver} />
        {!isGameOver && (
          <ul className="emoji-cards-container">
            {emojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojiDetails={eachEmoji}
                emojiClick={this.emojiClick}
              />
            ))}
          </ul>
        )}
        {isGameOver && (
          <div className="result-cards-container">
            <WinOrLoseCard score={score} playAgain={this.playAgain} />
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame

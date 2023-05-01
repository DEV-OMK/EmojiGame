// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, emojiClick} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    emojiClick(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" className="emoji-button" onClick={onClickEmoji}>
        <img src={emojiUrl} className="emoji-image" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard

import './Main.css'
import { assets } from '../../assets'

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini AI</p>
        <img src="https://robohash.org/stefan-one" alt="logo" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>Hello, World</p>
          <p>How can I help you today ?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road ttrip</p>
            <img src={assets.compass_icon} />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} />
          </div>
          <div className="card">
            <p>Brainstrom team bonding activities for our work retreat</p>
            <img src={assets.message_icon} />
          </div>
          <div className="card">
            <p>Improve the readabily of the following</p>
            <img src={assets.code_icon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
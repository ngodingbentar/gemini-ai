import "./Main.css";
import { assets } from "../../assets";
import { Context } from "../../context/Contect";
import { Fragment, useContext } from "react";

const Main = () => {
  const {
    input,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    onSent,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini AI</p>
        <img src="https://robohash.org/stefan-two" alt="logo" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <Fragment>
            <div className="greet">
              <p>Hello, World</p>
              <p>How can I help you today ?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Find hotels in Bali for a week, and suggest a packing list
                </p>
                <img src={assets.compass_icon} />
              </div>
              <div className="card">
                <p>
                  I’m sick and need help crafting a text message for my boss
                </p>
                <img src={assets.bulb_icon} />
              </div>
              <div className="card">
                <p>Provide questions to help me prepare for an interview</p>
                <img src={assets.message_icon} />
              </div>
              <div className="card">
                <p>Help me sound like an expert for an upcoming trip</p>
                <img src={assets.code_icon} />
              </div>
            </div>
          </Fragment>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.code_icon} />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              onKeyUp={(e) => e.key === "Enter" && onSent()}
            />
            <div>
              <img src={assets.gallery_icon} />
              <img src={assets.mic_icon} />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">GeminiAi - Ngodingbentar</p>
        </div>
      </div>
    </div>
  );
};

export default Main;

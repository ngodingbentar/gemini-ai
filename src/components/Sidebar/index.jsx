import "./Sidebar.css";
import { assets } from "../../assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Contect";

const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const { prevPrompts, setRecentPrompt, onSent, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="img"
        />
        <div className="new-chat" onClick={() => newChat()}>
          <img src={assets.plus_icon} alt="img" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => (
              <div
                key={index}
                className="recent-entry"
                onClick={() => loadPrompt(item)}
              >
                <img src={assets.message_icon} alt="img" />
                <p>
                  {item.slice(0, 20)} {item.length > 20 ? "..." : ""}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="img" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="img" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="img" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

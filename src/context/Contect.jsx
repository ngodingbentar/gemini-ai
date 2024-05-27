import { createContext, useState } from "react";
import runChat from "../config/gemini";
import PropTypes from 'prop-types';
export const Context = createContext();

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, index * 80);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setRecentPrompt(input);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompts([...prevPrompts, input]);
      setRecentPrompt(input);
      response = await runChat(input);
    }

    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      delayPara(i, newResponseArray[i] + " ");
    }
    setLoading(false);
    setInput("");
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const contextValue = {
    input,
    recentPrompt,
    prevPrompts,
    showResult,
    loading,
    resultData,
    setInput,
    setRecentPrompt,
    setPrevPrompts,
    setShowResult,
    setLoading,
    setResultData,
    onSent,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;

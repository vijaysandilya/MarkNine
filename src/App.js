import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🎅": "Christmas",
  "🪔": "Diwali",
  "🎃": "Halloween",
  "🕎": "Hanukkah",
  "🕉️": "Holi",
  "☪️": "Ramadan",
  "🇨🇳": "Dragon Boat Festival",
  "🐰": "Easter"
};

var emojiLibrary = Object.keys(emojiDictionary);

export default function App() {
  var [emojiInput, setEmojiInput] = useState("");

  function onEmojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We dont have this in our database";
    }
    if (userInput in emojiDictionary) {
      setEmojiInput(meaning);
    } else {
      meaning = "We dont have this in database";
      setEmojiInput(meaning);
    }
  }

  function onEmojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    return setEmojiInput(meaning);
  }

  return (
    <div className="App">
      <h1>Festival Emoji Interpreter</h1>
      <input onChange={onEmojiHandler}></input>
      <h2>{emojiInput}</h2>
      <h3>The Festival Emojis we have</h3>
      <h2>
        {emojiLibrary.map(function (emoji) {
          return (
            <span
              onClick={() => onEmojiClickHandler(emoji)}
              style={{
                fontSize: "3.5rem",
                padding: "0.26rem",
                cursor: "pointer",
                textAlign: "center"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </h2>
    </div>
  );
}

/** View - Interact - state in event handler
 *
 */

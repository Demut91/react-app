import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function SendingMessage({ messageList, setMessageList }) {
  const [text, setText] = useState("");
  const handleTextChange = (e) => setText(e.target.value);

  const setMess = (e) => {
    e.preventDefault();
    if (text.length !== 0) {
      setMessageList(
        (messageList = [
          ...messageList,
          { id: uuidv4(), author: "k.Cube", body: text },
        ])
      );
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={setMess}>
        <textarea
          className="mess-input"
          value={text}
          onChange={handleTextChange}
        />
        <br />
        <button className="mess-send" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default SendingMessage;

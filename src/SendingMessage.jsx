import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextareaAutosize } from "@material-ui/core";



function SendingMessage({ messageList, setMessageList }) {
  const [text, setText] = useState("");
  const handleTextChange = (e) => setText(e.target.value);

  const setMess = (e) => {
    e.preventDefault();
    if (text.length !== 0) {
      setMessageList(
        (messageList = [
          ...messageList,
          { id: uuidv4(), author: "cube", body: text },
        ])
      );
      setText("");
      document.getElementById("area").focus();
    }
  };

  return (
    <div>
      <form onSubmit={setMess}>
        <TextareaAutosize
          autoFocus={true}
          className="mess-input"
          value={text}
          id="area"
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

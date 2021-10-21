import "./App.css";
import "./index.css";
import { useState } from "react";
import logo from "./img/logo192.png";
import MessageList from "./MessageList.jsx";
import SendingMessage from "./SendingMessage";

function App(props) {
  const [messageList, setMessageList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h3>{props.name}</h3>
      </header>
      <section className="content">
        <MessageList messageList={messageList} />
        <SendingMessage
          messageList={messageList}
          setMessageList={setMessageList}
        />
      </section>
    </div>
  );
}

export default App;

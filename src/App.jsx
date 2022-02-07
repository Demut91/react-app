import "./App.css";
import "./index.css";
import { useState } from "react";
import logo from "./img/logo192.png";
import MessageList from "./MessageList.jsx";
import SendingMessage from "./SendingMessage";
import Answer from "./RoboAnswer.jsx";
import ChatList from "./ChatList";
import { v4 as uuidv4 } from "uuid";

function App(props) {
  const [messageList, setMessageList] = useState([]);
  const [chatList, setChatList] = useState([ { id: uuidv4(), name: "Alex", lastmessage: 'Предварительный просмотр последнего сообщения' }, { id: uuidv4(), name: "Robot", lastmessage: 'Предварительный просмотр последнего сообщения' }, { id: uuidv4(), name: "Philip", lastmessage: 'Предварительный просмотр последнего сообщения' }]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h3>{props.name}</h3>
      </header>
      <div className="content">
        <ChatList chatList={chatList}
            setChatList={setChatList}/>
        <section className="messages">
          <MessageList messageList={messageList} />
          <SendingMessage
            messageList={messageList}
            setMessageList={setMessageList}
          />
          <Answer messageList={messageList} setMessageList={setMessageList} />
        </section>
      </div>
    </div>
  );
}

export default App;

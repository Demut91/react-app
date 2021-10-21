function MessageList({ messageList }) {
  return (
    <>
      {messageList.map((message) => (
        <div className="message" key={message.id}>
          <p className="mess">{message.body}</p>
        </div>
      ))}
    </>
  );
}

export default MessageList;

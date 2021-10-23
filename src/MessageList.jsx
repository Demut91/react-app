function MessageList({ messageList }) {
  return (
    <>
      {messageList.map((message) => (
        <div className={"message " + message.author} key={message.id}>
          <p className="mess">{message.body}</p>
        </div>
      ))}
    </>
  );
}

export default MessageList;

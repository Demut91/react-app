function ChatList({ chatList }) {
  return (
    <div>
    {chatList.map((chat) => (
      <div className="chatlist-wrapper" key={chat.id}>
        <div className="chatlist-item">
          <h4 className="chatlist-heading">{chat.name}</h4>
          <p className="chatlist-preview">{chat.lastmessage}</p>
        </div>
      </div>
      ))}
    </div>
  );
}

export default ChatList;

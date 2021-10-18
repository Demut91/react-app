function Message(props) {
  return (
    <section className="content">
      <div className="message">     
        <p className="mess">{props.mess}</p>
      </div>
    </section>
  );
}

export default Message;

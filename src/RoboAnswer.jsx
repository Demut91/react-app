import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function Answer({ messageList, setMessageList }) {
  const list = messageList;

  const calling = () => {
    setMessageList(
      (messageList = [
        ...messageList,
        { id: uuidv4(), author: "Robot", body: "Дух из машины отвечает" },
      ])
    );
  };

  useEffect(() => {
    if (list.length > 0) {
      let lastAuthor = list[list.length - 1].author;
      if (lastAuthor === "k.Cube") {
        calling();
      }
    }
  });
  return <></>;
}

export default Answer;

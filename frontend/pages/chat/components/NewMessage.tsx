import * as React from "react";
import { useState } from "react";

const NewMessage = ({ addMessage }: { addMessage: Function }) => {
  const [message, setMessage] = useState("");

  return (
    <div id="new-message">
      <textarea
        type="text"
        placeholder="Type here..."
        onKeyPress={(event: KeyboardEvent) => {
          if (event.key === "Enter") {
            addMessage(message, "Me");
            setMessage("");
            event.preventDefault();
          }
        }}
        onChange={({ target: { value } }) => setMessage(value)}
        value={message}
      />
    </div>
  );
};

export default NewMessage;
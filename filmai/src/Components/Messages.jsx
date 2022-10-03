import { useContext } from "react";
import DataContext from "./DataContext";

function Message() {
  const { msgs, setMsgs } = useContext(DataContext);

  if (msgs.length === 0) {
    return null;
  }

  const closeMsg = (id) => {
    setMsgs((m) => m.filter((mes) => mes.id !== id));
  };

  return (
    <div
      class="toast show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <strong class="mr-auto">Message</strong>
        <button
          onClick={() => closeMsg()}
          type="button"
          class="btn btn-close"
        ></button>
      </div>
      <div class="toast-body">Hello, world! This is a toast message.</div>
    </div>
  );
}

export default Message;

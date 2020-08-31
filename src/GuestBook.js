import React, { useEffect } from "react";
import { MessageIcon, SendIcon } from "./Icons";
import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBs5WDcaaalRwhlkRhIxEshZXJfInrU8T8",
  authDomain: "karens-guest-book.firebaseapp.com",
  databaseURL: "https://karens-guest-book.firebaseio.com",
  projectId: "karens-guest-book",
  storageBucket: "karens-guest-book.appspot.com",
  messagingSenderId: "438782400657",
  appId: "1:438782400657:web:8b9d9e452038bc30708730"
};

export const GuestBook = () => {
  const [messages, setMessages] = React.useState([]);

  const [showNewMessageDialog, setShowNewMessageDialog] = React.useState(false);

  const [newFrom, setNewFrom] = React.useState("");
  const [newMessage, setNewMessage] = React.useState("");

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);

    const firestore = firebase.firestore();
    firestore
      .collection("messages")
      .orderBy("date", "desc")
      .limit(100)
      .onSnapshot((querySnapshot) => {
        setMessages(
          querySnapshot.docs.map((doc) => {
            const message = doc.data();
            return {
              ...message,
              date: message.date.toDate()
            };
          })
        );
      });
  }, []);

  return (
    <div className="guest-book-section" id="guest-book">
      <div className="guest-book-subsection-1">
        <div className="guest-book-subsection-2">
          <button
            className="guest-book-h2"
            onClick={(event) => setShowNewMessageDialog(true)}
          >
            <MessageIcon />
            Sig hej
          </button>
        </div>
        <ul className="messages-container">
          {messages.map((message, i) => (
            <li className="guestbook-message" key={i}>
              <p className="guestbook-message-message">{message.message}</p>
              <div className="guestbook-message-subsection">
                <span className="guestbook-message-date">
                  {message.date.toLocaleString()}
                </span>
                <span className="guestbook-message-name">-{message.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {showNewMessageDialog && (
        <form
          className="guest-book-form"
          onSubmit={(event) => {
            event.preventDefault();
            firebase
              .firestore()
              .collection("messages")
              .add({
                name: newFrom,
                date: new Date(),
                message: newMessage
              })
              .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
              })
              .catch(function (error) {
                console.error("Error adding document: ", error);
              });
            setShowNewMessageDialog(false);
            setNewFrom("");
            setNewMessage("");
          }}
        >
          <div className="guest-book-form-section">
            <label
              htmlFor="form-input-from"
              className="guest-book-form-from-label"
            >
              From
            </label>
            <input
              id="form-input-from"
              className="form-input-from"
              type="text"
              value={newFrom}
              autoFocus={true}
              onChange={(event) => setNewFrom(event.target.value)}
            />
            <label
              htmlFor="form-input-message"
              className="guest-book-form-message-label"
            >
              Message
            </label>
            <textarea
              id="form-input-message"
              className="form-input-message"
              type="text"
              value={newMessage}
              onChange={(event) => setNewMessage(event.target.value)}
            ></textarea>
            <div className="form-buttons">
              <button
                className="form-cancel-button"
                onClick={(event) => {
                  setShowNewMessageDialog(false);
                  setNewFrom("");
                  setNewMessage("");
                }}
              >
                Cancel
              </button>
              <button className="form-submit-button" type="submit">
                <SendIcon />
                Send
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

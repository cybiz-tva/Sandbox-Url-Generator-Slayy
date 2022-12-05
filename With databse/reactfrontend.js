import React, { useState } from "react";

const BASE_URL = "https://sandbox.slayyacademy.in/";

const App = () => {
  const [question, setQuestion] = useState("");
  const [dateTime, setDateTime] = useState(new Date().toString());
  const [id, setId] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    // generate a 6-digit ID for the question
    const generatedId = Math.random().toString(36).substr(2, 6);

    // make a request to the Node.js backend to save the question
    // and generated ID in the database
    const response = await fetch(BASE_URL + "save-question", {
      method: "POST",
      body: JSON.stringify({ question, dateTime, id: generatedId })
    });

    // if the request is successful, update the state with the generated ID
    if (response.ok) {
      setId(generatedId);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Question:
          <textarea
            value={question}
            onChange={e => setQuestion(e.target.value)}
          />
        </label>
        <br />
        <label>
          Date and Time:
          <input
            type="text"
            value={dateTime}
            onChange={e => setDateTime(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {id && (
        <p>
          Your question has been saved with ID:{" "}
          <a href={BASE_URL + id}>{BASE_URL + id}</a>
        </p>
      )}
    </div>
  );
};

export default App;

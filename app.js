import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import fetch from "node-fetch";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [question, setQuestion] = useState("");
  const [url, setUrl] = useState("");

  const onFinish = async (values) => {
    // Generate a unique ID using the uuid package
    const id = uuidv4().substring(0, 6);

    // Make a POST request to the API to save the question and date/time
    const res = await fetch("https://sandbox.slayyacademy.in/", {
      method: "POST",
      body: JSON.stringify({
        question,
        dateAndTime: new Date().toISOString(),
      }),
    });

    // Set the URL state to the generated URL with the unique ID
    setUrl(`https://sandbox.slayyacademy.in/${id}`);
  };

  return (
    <div>
      <Form onFinish={onFinish}>
        <Form.Item label="Question">
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Generate URL
          </Button>
        </Form.Item>
      </Form>
      {url && <p>Generated URL: {url}</p>}
    </div>
  );
};

export default App;

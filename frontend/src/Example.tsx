import React, { useState } from 'react';
import Api from './api';

const api = new Api();

function Example() {
    const [getResult, setGetResult] = useState<string | null>(null);
  const [postResult, setPostResult] = useState<string | null>(null);

  const handleGetRequest = () => {
    api.getTest()
      .then(response => setGetResult(JSON.stringify(response.data)))
      .catch(error => setGetResult(`Error: ${error.message}`));
  };

  const handlePostRequest = () => {
    const postData = { data: 'hello from frontend' };
    api.postTest(postData)
      .then(response => setPostResult(JSON.stringify(response.data)))
      .catch(error => setPostResult(`Error: ${error.message}`));
  };

  return (
    <div>
      <button onClick={handleGetRequest}>Send GET Request</button>
      <button onClick={handlePostRequest}>Send POST Request</button>

      <div>
        <h3>GET Request Result:</h3>
        <pre>{getResult}</pre>
      </div>

      <div>
        <h3>POST Request Result:</h3>
        <pre>{postResult}</pre>
      </div>
    </div>
  );
};

export default Example;

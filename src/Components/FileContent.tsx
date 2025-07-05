import React from "react";

export default function FileContent() {
  return (
    <div className="file-content">
      <div className="file-header">
        <h2>
          <span>📄</span> index.js
        </h2>
        <button className="open-raw">Open Raw</button>
      </div>
      <pre className="code-block">
        function helloWorld() {"{"}
        {"\n"}
        {"  "}console.log("Hello, GitHub Explorer!");{"\n"}
        {"}"}
        {"\n"}
        {"    "}
      </pre>
    </div>
  );
}

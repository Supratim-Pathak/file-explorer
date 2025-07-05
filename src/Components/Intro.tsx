import React from "react";
import FileContent from "./FileContent";
import CommitInfo from "./CommitInfo";

export default function Intro() {
  return (
    <>
      <div className="main-div">
        <div className="repo-input-bar">
          <input
            type="text"
            id="repo-url"
            placeholder="Enter GitHub Repo URL (e.g. https://github.com/user/repo)"
          />
          <button id="load-repo">Load Repo</button>
        </div>
        <div id="heading">
          <h1 className="title">📁 GIT File Explorer</h1>
          <button id="back-btn">BACK</button>
        </div>
        {/* Repo Info Section */}
        <div className="repo-info" id="repo-info">
          <h2>📦 Repository Information</h2>
          <div className="repo-meta">
            <p>
              <strong>Name:</strong> GitHub-Explorer
            </p>
            <p>
              <strong>Owner:</strong> Supratim
            </p>
            <p>
              <strong>Stars:</strong> ⭐ 124
            </p>
            <p>
              <strong>Forks:</strong> 🍴 17
            </p>
            <p>
              <strong>License:</strong> MIT
            </p>
            <p>
              <strong>Last Updated:</strong> Jul 5, 2025
            </p>
          </div>
        </div>

        {/* Loader */}
        <div id="loader" className="loader" />
        <ul className="file-list">
          <li
            className="file-items"
            id="abc123"
            style={{ cursor: "pointer" }}
            // onclick="Action('abc123')"
          >
            <div>
              <img className="item-image" src="./folder.png" alt="File" />
              <p className="file-name">src</p>
            </div>
          </li>
          <li
            className="file-items"
            id="def456"
            style={{ pointerEvents: "none" }}
            // onclick="Action('def456')"
          >
            <div>
              <img className="item-image" src="./document.png" alt="File" />
              <p className="file-name">README.md</p>
            </div>
          </li>
          <li
            className="file-items"
            id="ghi789"
            style={{ cursor: "pointer" }}
            // onclick="Action('ghi789')"
          >
            <div>
              <img className="item-image" src="./folder.png" alt="File" />
              <p className="file-name">components</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="file-viewer">
        <FileContent></FileContent>
        <CommitInfo></CommitInfo>
      </div>
    </>
  );
}

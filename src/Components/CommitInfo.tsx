import React from 'react'

export default function CommitInfo() {
  return (
   <div className="file-info">
  <h3>📝 Last Commit</h3>
  <div className="commit-box">
    <p className="commit-msg">Initial commit of index.js</p>
    <div className="author">
      <img src="https://avatars.githubusercontent.com/u/123456?v=4" alt="avatar" />
      <div>
        <strong>Supratim</strong>
        <p className="commit-date">Jul 5, 2025</p>
      </div>
    </div>
    <hr />
    <p><strong>SHA:</strong> abc123def456</p>
    <p><strong>Size:</strong> 1.2 KB</p>
  </div>
</div>

  )
}

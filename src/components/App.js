import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default class App extends Component {
  renderButton() {}

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="post">Post a Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  return() {
    return (
      <div>
        <Routes>
          <Route path="/post" element={<CommentBox />} />
          <Route path="/" exact element={<CommentList />} />
        </Routes>
      </div>
    );
  }
}

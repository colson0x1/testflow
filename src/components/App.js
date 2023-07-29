import { Routes, Route } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/post" element={<CommentBox />} />
      <Route path="/" exact element={<CommentList />} />
      </Routes>
    </div>
  );
}

export default App;

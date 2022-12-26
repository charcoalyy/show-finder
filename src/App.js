import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Discover  from './Discover';
import Forum from './Forum';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Discover />}></Route>
          <Route path="/forum" element={<Forum />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

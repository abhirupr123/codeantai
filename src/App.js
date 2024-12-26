import Signin from './components/Signin';
import Repositories from './components/Repositories';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path="/repositories" element={<Repositories/>}/>
      </Routes>
    </Router>
  );
}

export default App;

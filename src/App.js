import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
    </Router>

    </div>
  );
}

export default App;
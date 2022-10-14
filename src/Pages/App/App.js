import './App.css';
import {Route, Routes} from "react-router-dom";
import LandingPage from '../LandingPage/LandingPage';

function App() {
  return (

    <div className="background">
    <Routes>
    <Route  path="/" element={<LandingPage />} />
    </Routes>
    </div>

  );
}

export default App;

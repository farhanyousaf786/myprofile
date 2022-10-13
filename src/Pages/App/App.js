import './App.css';
import {Route, Routes} from "react-router-dom";
import MyInfo from '../MyInfo/MyInfo';

function App() {
  return (
    <Routes>

    <Route  path="/" element={<MyInfo />} />


    </Routes>
  );
}

export default App;

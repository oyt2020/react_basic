import logo from './logo.svg';
import './App.css';
import MainComponent from "./COM/Main";
import Post from "./Post";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <h1>메인 화면</h1>
        <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/day1" element = {<Post />} />
        </Routes>
    </div>
  );
}

export default App;


import logo from './logo.svg';
import './App.css';
import MyComponet from "./test_componets";
import {element,label,element2,Greeting,element3} from "./JavaScriptXML";

function App() {
  return (
    <div className="App">
        <h1>메인 화면</h1>
        <MyComponet /> {/* 새로운 컴포넌트 로딩 */}
        {element}
        {label}
        <br></br>
        {element2}
        <Greeting />
        {element3}


    </div>
  );
}

export default App;


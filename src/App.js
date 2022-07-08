import './App.css';
import {Navbar} from "./components/navbar/Navbar"
import {Aside} from "./components/aside/Aside"
import {Main} from "./components/main/Main"

function App() {
  return (
    <div className="App">
     <Navbar />
     <Aside />
     <Main />
    </div>
  );
}

export default App;

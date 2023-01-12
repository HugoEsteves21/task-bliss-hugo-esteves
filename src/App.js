import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import ListScreen from "./pages/ListScreen";

function App() {
  return (
    <div className="App">

      <NavBar />
      
      <Routes>
        <Route path='/' element={<ListScreen />} />
      </Routes>
    </div>
  );
}

export default App;

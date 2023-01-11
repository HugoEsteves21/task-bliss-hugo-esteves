import "./App.css";
import { Routes, Route } from "react-router-dom";

import ListScreen from "./pages/ListScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ListScreen />} />
      </Routes>
    </div>
  );
}

export default App;

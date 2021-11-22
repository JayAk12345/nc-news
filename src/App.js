import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SignIn from "./components/SignIn";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>NC News</h1>
        <Nav />
        <Routes>
          <Route path="/user/signin" element={<SignIn />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

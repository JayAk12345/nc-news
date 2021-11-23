import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SignIn from "./components/SignIn";
import { useState } from "react";
import userContext from "./contexts/userContext";

function App() {
  const [user, setUser] = useState("Jay123");
  return (
    <BrowserRouter>
      <userContext.Provider value={{ user, setUser }}>
        <div className="App">
          <h1>NC News</h1>
          <Nav />
          <Routes>
            <Route path="/user/signin" element={<SignIn />}></Route>
          </Routes>
        </div>
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;

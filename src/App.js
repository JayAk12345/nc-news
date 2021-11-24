import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SignIn from "./components/SignIn";
import Title from "./components/Title";
import Home from "./components/Home";
import { useState } from "react";
import userContext from "./contexts/userContext";
import articleContext from "./contexts/articleContext";

function App() {
  const [user, setUser] = useState("Jay123");
  return (
    <BrowserRouter>
      <userContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Title />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/user/signin" element={<SignIn />}></Route>
          </Routes>
        </div>
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;

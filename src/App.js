import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SignIn from "./components/SignIn";
import Title from "./components/Title";
import ShowTopics from "./components/ShowTopics";
import ShowArticles from "./components/ShowArticles";
import Article from "./components/Article";
import { useState } from "react";
import userContext from "./contexts/userContext";
import { useContext } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <Nav />
        <ShowTopics />
        <Routes>
          <Route path="/" element={<ShowArticles />}></Route>
          <Route
            path="/topics/:slug/articles"
            element={<ShowArticles />}
          ></Route>
          <Route
            path="/article/:id"
            element={<Article user={user} setUser={setUser} />}
          ></Route>
          <Route
            path="/user/signin"
            element={<SignIn user={user} setUser={setUser} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

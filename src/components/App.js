import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";


import user from "../data/user";
console.log(user);

// pass this data down as props to the child component(s) that need it!
//pass down data from the user object as props to the Home component so that it renders correctly

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;

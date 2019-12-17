import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage"; //hook up welcome page
import { Route } from "react-router-dom"; //link is the router



export default function App() {
  
  

    
    

  return (
    <main>
      <Header />
        <Route exact path="/" component={WelcomePage} />  
        <Route path="/characters" component={CharacterList} />
      
    </main>
  );
  }

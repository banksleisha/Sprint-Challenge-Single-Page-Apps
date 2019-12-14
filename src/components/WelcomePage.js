import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Welcome = styled.section`
display: flex;
justify-content: center;
`

const Button = styled.button`
background: white;`

const Image = styled.img`
display: flex;
justify-content: center;`

export default function WelcomePage() {
  return (
    <Welcome>
      <header>
        <h1>Wanna Go On An Adventure?</h1>
        <Image
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        
          <Button>
        <Link className="nav" to={'/characters'}>I'm in!</Link>
        </Button>
        
      </header>
    </Welcome>
  );
}

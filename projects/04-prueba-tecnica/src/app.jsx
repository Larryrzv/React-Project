import React, { useState } from "react";
import "./App.css"
import { getRandomFacts } from "./services/facts";



const CAT_PREFRIX_IMAGE_URL = "https://cataas.com/cat/says/";

export function App() {
  const [fact, setFact] = useState();
  // eslint-disable-next-line no-unused-vars
  const [imgUrl, setImgUrl] = useState();


const handleClick = async () => {
  const newfact = await getRandomFacts()
  setFact(newfact)
  setImgUrl(`${newfact.split(' ', 3).join(' ')}`)
 
}
  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>{fact ? "Get a new fact" : "Get a fact"}</button>
      <section>
      {fact && <p>{fact}</p>}
      {imgUrl && 
        <img
          src={`${CAT_PREFRIX_IMAGE_URL}${imgUrl}?fontSize=50&fontColor=red`}
          alt={`Image extracted using the first thre words for ${fact}`}
         />
      }
      </section>
    </main>
  );
}

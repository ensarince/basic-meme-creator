import React from "react";
import {Meme} from "../Meme/Meme"
import { MemeGenerated } from "../MemeGenerated/MemeGenerated";
import {Routes, Route}  from "react-router-dom";
import styles from './styles.module.css'

export const App = () => {
  return (
  <>
  <div>  
    <h1>Meme Creator</h1>
    <Routes>
      <Route exact path='/' element={Meme()}>
      </Route> 
      <Route exact path='/generated' element={MemeGenerated()}>
      </Route> 
    </Routes>
  </div>

    
  </>
    
  );
}

export default App;

import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import MyWorks from "./components/my-works/MyWorks";

function App() {


    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
        </div>
    );
}

export default App;

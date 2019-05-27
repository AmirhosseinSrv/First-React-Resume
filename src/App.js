import React from 'react';

import TitlesAndIconsSection from "./sections/TitlesAndIconsSection"
import AboutMeSection from "./sections/AboutMeSection"
import SkillsSection from "./sections/SkillsSection"
import Navbar from "./components/Navbar"
import ChangeThemeButton from "./components/ChangeThemeButton"

import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <ChangeThemeButton/>
            <TitlesAndIconsSection/>
            <AboutMeSection/>
            <SkillsSection/>
        </div>
    );
}

export default App;
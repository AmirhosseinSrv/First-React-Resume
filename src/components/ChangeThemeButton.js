import React, { Component } from "react";
import "./ChangeThemeButton.css"

class ChangeThemeButton extends Component {
    ChangeTheme;
    componentDidMount() {
        let counter = 0;
        this.ChangeTheme = () => {
            const FirstPage = document.getElementsByClassName("First")[0];
            const SecondPage = document.getElementsByClassName("Second")[0];
            const ThirdPage = document.getElementsByClassName("Third")[0];
            if(counter === 0) {
                FirstPage.style.backgroundColor = "#15212f";
                FirstPage.style.color = "white";
                SecondPage.style.backgroundColor = "#00387b";
                SecondPage.style.color = "#b9ceac";
                ThirdPage.style.backgroundColor = "#00414b";
                counter = 1;
            }
            else if(counter === 1) {
                FirstPage.style.backgroundColor = "#8B0000";
                FirstPage.style.color = "black";
                SecondPage.style.backgroundColor = "#27292b";
                SecondPage.style.color = "#b9ceac";
                ThirdPage.style.backgroundColor = "#0e0e10";
                counter = 2;
            }
            else if(counter === 2) {
                FirstPage.style.backgroundColor = "#001399";
                FirstPage.style.color = "white";
                SecondPage.style.backgroundColor = "#ffff59";
                SecondPage.style.color = "white";
                ThirdPage.style.backgroundColor = "rgba(10, 10, 10, 0.77)";
                counter = 0;
            }
        }
    }

    render() {
        return (
            <div className="Button" onClick={() => {
                this.ChangeTheme()
            }}>
                <span>Change Theme</span>
            </div>

        );
    }
}

export default ChangeThemeButton;
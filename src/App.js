import React from "react";
import style from "./app.module.css"
import {Route, Routes, NavLink, BrowserRouter} from "react-router-dom";


import LoginPage from "./components/LoginPage"
import GamePage from "./components/GamePage"
import ResultPage from "./components/ResultPage"
import LeaderPage from "./components/LeaderPage";
import {Provider} from "react-redux";
import {store} from "./redux/reducers/store";

function App() {
    function refreshPage() {
        window.location.href = "/";
    }

    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className={style.App}>
                    <div className={style.header}><NavLink className={style.linkButtonL}
                                                           to={"/leaderboard"}>Leaders</NavLink> WarCraft tile-game <a
                        className={style.linkButtonR} onClick={refreshPage}> Start Game</a></div>
                    <Routes>
                        <Route path="/" element={<LoginPage/>}/>
                        <Route path="/game" element={<GamePage/>}/>
                        <Route path="/results" element={<ResultPage/>}/>
                        <Route path="/leaderboard" element={<LeaderPage/>}/>
                    </Routes>
                    <div className={style.footer}><img className={style.image}
                                                       src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/WoW_icon.svg/1200px-WoW_icon.svg.png"
                                                       alt=""/></div>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
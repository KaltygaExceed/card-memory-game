import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";


import LoginPage from "./components/LoginPage"
import GamePage from "./components/GamePage"
import ResultPage from "./components/ResultPage"
import LeaderPage from "./components/LeaderPage";
import {Provider} from "react-redux";
import {store} from "./redux/reducers/store";
import {AppContainer, Header, Footer, Image, LeftButton, RightButton} from "./app.styles"

function App() {
    function refreshPage() {
        window.location.href = "/";
    }

    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer>
                    <Header><LeftButton
                        to={"/leaderboard"}>Leaders</LeftButton> WarCraft tile-game <RightButton
                        onClick={refreshPage}> Start Game</RightButton></Header>
                    <Routes>
                        <Route path="/" element={<LoginPage/>}/>
                        <Route path="/game" element={<GamePage/>}/>
                        <Route path="/results" element={<ResultPage/>}/>
                        <Route path="/leaderboard" element={<LeaderPage/>}/>
                    </Routes>
                    <Footer><Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/WoW_icon.svg/1200px-WoW_icon.svg.png"
                        alt=""/></Footer>
                </AppContainer>
            </Provider>
        </BrowserRouter>
    )
}

export default App
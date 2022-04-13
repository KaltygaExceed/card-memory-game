import {useSelector, useDispatch} from "react-redux"
import style from "./resultPage.module.css"
import {setHighscore} from "../../redux/actions/actions"
import {useEffect} from "react"

const ResultPage = () => {
    function refreshPage() {
        window.location.href = "/"
    }

    const {name, count, highscore} = useSelector((state) => state)
    let dispatch = useDispatch()


    useEffect(() => {
        let leaders = JSON.parse(localStorage.getItem("leaders") || "[]")

        localStorage.setItem("leaders", JSON.stringify([...leaders, {
            name: name,
            count: count
        }]))
    })

    if (highscore < count) {
        dispatch(setHighscore())
        localStorage.setItem('highscore', count)
    }

    return (
        <div className={style.container}>
            Congratulations {name}! You are your result: {count}
            <button className={style.button} onClick={refreshPage}>start new game</button>
            <p>Highscore = {highscore}</p>
        </div>
    );
};

export default ResultPage


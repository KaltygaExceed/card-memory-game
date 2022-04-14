import {useSelector, useDispatch} from "react-redux"
import {setHighscore} from "../../redux/actions/actions"
import {useEffect} from "react"
import {Container, Button} from "./resultPage.styles"

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
        <Container>
            Congratulations {name}! You are your result: {count}
            <Button onClick={refreshPage}>start new game</Button>
            <p>Highscore = {highscore}</p>
        </Container>
    );
};

export default ResultPage


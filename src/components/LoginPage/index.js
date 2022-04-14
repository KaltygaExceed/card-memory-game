import {useState} from "react"
import {useDispatch} from "react-redux";
import {assignName} from "../../redux/actions/actions";
import {Button, Container, ContainerInput} from "./loginPage.styles"

const LoginPage = () => {

    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()

    return (
        <Container>
            <ContainerInput
                placeholder={"Enter your name here"}
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
            <Button onClick={() => dispatch(assignName(inputValue))} to="/game">
                {" "}
                START GAME
            </Button>
        </Container>
    )
}
export default LoginPage
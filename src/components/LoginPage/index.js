import {useState} from "react"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {assignName} from "../../redux/actions/actions";
import style from "./loginPage.module.css"

const LoginPage = () => {

    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    return (
        <div className={style.container}>
            <input
                className={style.container_input}
                placeholder={"Enter your name here"}
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
            <NavLink className={style.button} onClick={() => dispatch(assignName(inputValue))} to="/game">
                {" "}
                START GAME
            </NavLink>
        </div>
    );
};
export default LoginPage
import { useState } from "react";
import classes from './SearchBar.module.css';

const SearchBar = (props) => {
    const [enteredName, setEnteredName] = useState("");

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const formSubmissiomHandler = (event) => {
        //prevents page from being reloaded by default
        event.preventDefault();

        //this takes search and makes it able to go to the api call with ease
        const urlSearch = enteredName.replace(/ /g, "+");
        props.onSaveSearchQuery(urlSearch);
        setEnteredName("");
    };

    return (
        <form className={classes.form} onSubmit={formSubmissiomHandler}>
            <div>
                <input
                    type="text"
                    id="name"
                    value={enteredName}
                    onChange={nameInputChangeHandler}
                />
                <button className={classes.button}>SEARCH</button>
            </div>
        </form>
    );
};

export default SearchBar;

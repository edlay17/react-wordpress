// libs
import {useState} from "react";
import {useHistory} from "react-router-dom";

// ui
import SearchInputWithIcon from "../../../ui/molecules/search-input-with-icon/search-input-with-icon";

export const SearchForm = (props) => {
    let [value, setValue]=useState("");
    let history = useHistory();

    let onChangeSearchText = (e) => {
        setValue(e.target.value);
    }
    let onKeyPress = (e) => {
        if(e.keyCode === 13){
            e.preventDefault();
            if(e.target.value !== ""){
                setValue("");
                history.push(`/search/${value}`);
            }
        }
    }

    return (
        <>
            <SearchInputWithIcon onKeyPress={onKeyPress} onChangeSearchText={onChangeSearchText} inputValue={value}/>
        </>
    )}

export default SearchForm;
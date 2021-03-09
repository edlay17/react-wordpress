import SearchInputWithIcon from "../../../../ui/molecules/search-input-with-icon/search-input-with-icon";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setSearchText} from "../model/search-reducer"

export const SearchForm = (props) => {
    let [value, setValue]=useState("");
    let history = useHistory();
    const dispatch = useDispatch();

    let onChangeSearchText = (e) => {
        setValue(e.target.value);
    }
    let onKeyPress = (e) => {
        if(e.keyCode === 13){
            e.preventDefault();
            if(e.target.value !== ""){
                dispatch(setSearchText(value));
                setValue("");
                history.push("/search");
            }
        }
    }

    return (
        <>
            <SearchInputWithIcon onKeyPress={onKeyPress} onChangeSearchText={onChangeSearchText} inputValue={value}/>
        </>
    )}

export default SearchForm;
import React from "react";
import "./search.styles.css";


const Search =({onChange, placeholder}) => {
    return(
        <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={onChange}
        />
    )
}
export default Search
import React from "react";

const SearchBox = (props) => {
    return (
        <div className="col">
            <input className="form-control" placeholder="Zoeken..." value={props.value} 
            onChange={(event)=> props.setSearchInput(event.target.value)}>
            </input>
        </div>
    )
};

export default SearchBox;
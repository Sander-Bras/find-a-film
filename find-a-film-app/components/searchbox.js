import React from "react";
import styles from '../styles/searchbox.module.scss';

const SearchBox = (props) => {
    return (
        <div className="col-8 my-5">
            <input className={styles.input+ ' ' + 'form-control'} placeholder="Start typing to find a film..." value={props.value} 
            onChange={(event)=> props.setSearchInput(event.target.value)}>
            </input>
        </div>
    )
};

export default SearchBox;
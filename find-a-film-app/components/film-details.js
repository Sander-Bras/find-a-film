import React from "react";
import styles from '../styles/film-details.module.scss'

const FilmDetails = (props) => {
    return (
        <div class="row align-items-center">
            <div className={styles.imgContainer+ ' ' + 'col-6'}>
                <img src={props.film.Poster} alt={props.film.Title} className={styles.poster}/>
            </div>
            <div className='col-6'>
                <h1>{props.film.Title}</h1>
                <p>{props.film.Plot}</p>
            </div>
        </div>
    )
}

export default FilmDetails;
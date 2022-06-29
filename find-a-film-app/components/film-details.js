import React from "react";
import styles from '../styles/film-details.module.scss'

const FilmDetails = (props) => {
    return (
        <div className="row justify-content-center py-5 no-gutters">
            <div className="col-10 d-flex justify-content-center">
                <h2 className={styles.title}>{props.film.Title}</h2>
            </div>
            <div className={styles.posterContainer+ ' ' + 'col-10 col-md-4 mb-0 mt-5 my-md-5'}>
                <img src={props.film.Poster} alt={props.film.Title} className={styles.poster}/>
            </div>
            <div className={styles.detailContainer+ ' ' + 'col-10 col-md-6 mb-5 mt-0 my-md-5 p-4'}>
                
                <h3>{props.film.Title} {props.film.Year}</h3>
                <span>{props.film.Genre}</span>
                <span className={styles.director}>{props.film.Director}</span>
                <p>{props.film.Plot}</p>
            </div>
        </div>
    )
}

export default FilmDetails;
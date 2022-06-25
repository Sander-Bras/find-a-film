import React from "react";
import styles from '../styles/film-list.module.scss';
import Link from 'next/link'

const FilmList = (props) => {
    return (
        <>
            {props.films.map((film, index) => (
                <div className={styles.filmContainer+ ' ' + 'col-10 col-md-4 col-lg-3 mb-3'} key={index}>
                    
                    <Link href={`/detail?imdbID=${film.imdbID}`}>
                        <a className={styles.link} title={`More info about ${film.Title}`}>
                            <div className={styles.posterContainer}>
                                <img src={film.Poster} alt={film.Title} className={styles.poster}/>
                            </div>
                            <div className={styles.titleContainer}>
                                <span className={styles.title}>{film.Title}</span>
                                <span className={styles.year}>{film.Year}</span>
                            </div>
                        </a>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default FilmList;
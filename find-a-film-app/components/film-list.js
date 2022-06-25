import React from "react";
import styles from '../styles/film-list.module.scss';
import Link from 'next/link'


const FilmList = (props) => {
    return (
        <>
            {props.films.map((film, index) => (
                <div className={styles.imgContainer+ ' ' + 'col-2'} key={index}>
                    <img src={film.Poster} alt={film.Title} className={styles.poster}/>
                    <span>{film.Title}</span>
                    <Link href={`/detail?imdbID=${film.imdbID}`}>
                        <a>{film.imdbID}</a>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default FilmList;
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/header';
import FilmDetails from '../components/film-details';

export default function Home() {

    //get film info
    const [film, setFilms] = useState([]);

    //get imdbID from url
    const router = useRouter()
    const id = router.query
    const filmID = id.imdbID;

    //get film details from json with imdbID
    const getFilmRequest = async (filmID) => {
        const url = `https://www.omdbapi.com/?i=${filmID}&apikey=725e2dca`

        const response = await fetch(url);
        const responseJson = await response.json();
        setFilms(responseJson);
    };

    //update film details
    useEffect(() => {
        getFilmRequest(filmID);
    }, [filmID]);

    return (
        <>
        <Header title="Found-a-Film"/>
        <main className="main">
            <section className="page">
                <div className="container">
                    <FilmDetails film={film} />
                </div>
            </section>
        </main>
        </>
    )
}
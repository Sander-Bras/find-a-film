import React, { useState, useEffect } from 'react';
import FilmDetails from '../components/film-details';
import { useRouter } from 'next/router'
import HelloWorld from '../components/hello-world';
import Header from '../components/header';

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

        console.log(responseJson);
        setFilms(responseJson);
    };

    //update film details
    useEffect(() => {
        getFilmRequest(filmID);
    }, [filmID]);

    return (
        <>
        <Header/>
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
import HelloWorld from '../components/hello-world'
import React, { useState, useEffect } from 'react';
import FilmList from '../components/film-list';
import SearchBox from '../components/searchbox';
import Header from '../components/header';

export default function Home() {

  //get film info
  const [films, setFilms] = useState([]);

  //get search input 
  const [searchInput, setSearchInput] = useState('');

  //get film details from json with search input value
  const getFilmRequest = async (searchInput) => {
    const url = `https://www.omdbapi.com/?s=${searchInput}&apikey=725e2dca`

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    if (responseJson.Search) {
      setFilms(responseJson.Search);
    }
  };

  //update search input
  useEffect(() => {
    getFilmRequest(searchInput);
  }, [searchInput]);

  return (
    <>
    <Header/>
    <main className="main">
      <section className="page">
        <div className="container">
          <div className="row">
            <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} />
          </div>
          <div className="row d-flex">
            <FilmList films={films} />
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import SearchBox from '../components/searchbox';
import FilmList from '../components/film-list';


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
    <Header title="Find-a-Film"/>
    <main className="main">
      <section className="page">
        <div className="container">
          <div className="row justify-content-center">
            <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} />
          </div>
          <div className="row justify-content-center">
            <FilmList films={films} />
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
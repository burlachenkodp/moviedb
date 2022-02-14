import React, { useState, useEffect } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { MoviesHeader } from "./components/MainHeader/MoviesHeader";
import { Blog } from "./components/Blog/Blog";
import { Modal } from "./components/Modal/Modal";
import { UserForm } from "./components/UserForm/UserForm";
import { MovieCard } from "./components/MoviePage/MoviePage";
import { MovieList } from "./components/MovieList/MovieList";
import { MoviesFooter } from "./components/MainFooter/MoviesFooter";
import {
  ROUTE_BLOG,
  ROUTE_ERROR,
  ROUTE_MAIN,
  CLOSE_MODAL,
  OPEN_FORM,
  OPEN_LOADER,
  POPULAR,
  SEARCH_API,
} from "./utils/constanst";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isShowModal, setShowModal] = useState(CLOSE_MODAL);
  const [page, setPage] = useState(1);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
  };
  useEffect(() => {
    getMovies(POPULAR + page);
  }, [page]);

  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      getMovies(SEARCH_API + searchText + `&page=${page}`);
    }
    setSearchText("");
  };

  const closeModal = () => setShowModal(0);

  return (
    <div className="App">
      <MoviesHeader setShowModal={setShowModal} />
      <Routes>
        <Route
          path={ROUTE_MAIN}
          element={
            <MovieList
              movies={movies}
              handleOnSubmit={handleOnSubmit}
              handleOnChange={handleOnChange}
              searchText={searchText}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route path={ROUTE_BLOG} element={<Blog />} />
        <Route path={ROUTE_ERROR} element={<h2>404 ERROR!!!</h2>} />
        <Route path={"/user/:id"} element={<MovieCard />} />
      </Routes>

      <Modal show={isShowModal} close={closeModal}>
        movies={movies}
        {isShowModal === OPEN_FORM && <UserForm />}
        {isShowModal === OPEN_LOADER && <h1>LOADING</h1>}
      </Modal>
      <MoviesFooter />
    </div>
  );
}

export default App;

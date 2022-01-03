import axios from 'axios';
import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  NavBtnLink,
  Bars,
  NavMenu,
  NavBtn,
  User,
  SearchInput,
  Search,
  SearchBox,
  MovieListContainer,
  Container
}from './StyleNavbar';
import MovieComponent from '../MovieComponent/MovieComponent';

const Navbar = () => {
    
    //Guardo la consulta
    const [searchQuery, updateSearchQuery] = useState();
    //Manejo el tiempo de llamada a la api  
    const [timeoutId, updateTimeoutId] = useState();
    //Guardo las peliculas en el array
    const [movieList, updateMovieList] = useState([]);

    //Uso de Axios para manejar la Asincronía
    const fetchData = async (searchString) =>{
      //Hago la solicitud GET para obtener el JSON
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchString}&apikey=${process.env.REACT_APP_API_KEY}`
      );
      //Actualizo mi búsqueda
      updateMovieList(response.data.Search);
    }

    const onTextChange = (event) => {
      clearTimeout(timeoutId);
      updateSearchQuery(event.target.value);
      const timeout = setTimeout(() =>fetchData(event.target.value), 500);
      updateTimeoutId(timeout);
    }

    return (
        <>
          <Nav>
            <NavLink to="/">
                <img src={require('../../Images/logoblanco.png')} alt='logo' width="50px" height="50px"/>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/Peliculas" >
                  Películas
                </NavLink>
                <NavLink to="/Series" >
                  Series
                </NavLink>
                <SearchBox>
                  <Search/>
                  <SearchInput
                    placeholder="Películas, Series..."
                    //Creo un valor predeterminado para la entrada
                    value={searchQuery || ''}
                    onChange={onTextChange}
                  />
                </SearchBox>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to= "/Iniciarsesion">Iniciar Sesión</NavBtnLink>
                <User/>
            </NavBtn>
          </Nav>
          <Container>
            <MovieListContainer>
              {movieList?.length ? (movieList.map(
                  (movie, index) => (
                  <MovieComponent
                    key={index}
                    movie={movie}
                  />)
                  )
                ):(<div src="#"/>)
              }
            </MovieListContainer>
          </Container>  
        </>
    )
}

export default Navbar

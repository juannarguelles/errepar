import React from "react";
import {
  MovieContainer,
  CoverImage,
  MovieName,
  InfoColumn,
  MovieInfo
}from './StyleMovieComponent'


const MovieComponent = (props) => {
  const { 
    Title, 
    Year, 
    Type, 
    Poster 
  } = props.movie;

  return (
    <MovieContainer>
      <CoverImage src={Poster} alt={Title} />
      <MovieName>{Title}</MovieName>
      <InfoColumn>
        <MovieInfo>Año : {Year}</MovieInfo>
        <MovieInfo>Tipo : {Type}</MovieInfo>
      </InfoColumn>
    </MovieContainer>
  );
};

export default MovieComponent;

import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import hist from '../../hist';
import { fetchMovieById, updateMovie } from '../actions/MovieAction';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function UpdateMovie() {
    const dispatch = useDispatch();
    const classes = useStyles();
    let id = useParams();
    const [movieName, setMovieName] = useState('');
    const [movieGenre, setMovieGenre] = useState('');
    const [movieHours, setMovieHours] = useState('');
    const [movieLanguage, setMovieLanguage] = useState('');
    const [movieDescription, setMovieDescription] = useState('');
    const getMovie = useSelector((state) => state.movie.movie);
    useEffect(() => {
        dispatch(fetchMovieById(id.id));
      }, [dispatch, id.id]);

      useEffect(() => {
        console.log(getMovie);
      }, [getMovie]);

      const detailRedirect = () => {
        if (getMovie.movieId !== undefined) {
          hist.push('/movie');
        }
      };
  
   
    const handleSubmit = (e) => {
      e.preventDefault();
      


      

      
      const movie = {
        movieId: Number(id.id),
        movieName: movieName,
        movieGenre: movieGenre,
        movieHours: movieHours,
        movieLanguage: movieLanguage,
        movieDescription: movieDescription,
      };
  
      dispatch(updateMovie(movie));
      detailRedirect();
    };






   

   
  
    return (
      <div>
        <h3>Fill Details:[Movie ID:{getMovie.movieId}]</h3>
        <form
          className={classes.root}
          noValidate
          autoComplete='off'
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Typography variant='h6'>Update Details:</Typography>
          <TextField
            label='Movie Name'
            variant='standard'
            required
            autoFocus={true}
            type='medium'
            style={{ width: 155 }}
            focused={true}
            onChange={(e) => {
              setMovieName(e.target.value);
            }}
            onMouseOver={(e) => {
              if (!e.target.value) {
                e.target.value = getMovie.movieName;
                setMovieName(e.target.value);
              }
            }}
          />
          <TextField
            label='Movie Genre'
            variant='outlined'
            required
            type='small'
            style={{ width: 155 }}
            focused={true}
            onMouseOver={(e) => {
              if (!e.target.value) {
                e.target.value = getMovie.movieGenre;
                setMovieGenre(e.target.value);
              }
            }}
            onChange={(e) => {
                setMovieGenre(e.target.value);
            }}
          />
          <TextField
            label='Movie Hours'
            variant='outlined'
            required
            type='small'
            style={{ width: 155 }}
            onMouseOver={(e) => {
              if (!e.target.value) {
                e.target.value = getMovie.movieHours;
                setMovieHours(e.target.value);
              }
            }}
            focused={true}
            onChange={(e) => {
                setMovieHours(e.target.value);
            }}
          />
          <TextField
            label='Language'
            variant='outlined'
            required
            type='small'
            focused={true}
            style={{ width: 155 }}
            onMouseOver={(e) => {
              if (!e.target.value) {
                e.target.value = getMovie.language;
                setMovieLanguage(e.target.value);
              }
            }}
            onChange={(e) => {
                setMovieLanguage(e.target.value);
            }}

          />

           <TextField
            label='Description'
            variant='outlined'
            required
            type='small'
            focused={true}
            style={{ width: 155 }}
            onMouseOver={(e) => {
              if (!e.target.value) {
                e.target.value = getMovie.description;
                setMovieDescription(e.target.value);
              }
            }}
            onChange={(e) => {
                setMovieDescription(e.target.value);
            }}

          />



  
          <Button type='Submit' variant='contained' color='primary'>
            Submit
          </Button>
        </form>
      </div>
    );
  }
  
  export default UpdateMovie;

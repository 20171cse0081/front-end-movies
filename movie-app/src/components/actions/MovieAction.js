import Axios from 'axios';


export const fetchMovie = () => async (dispatch, getState) => {
  dispatch({ type: 'LOADING_MOVIE' });
  try {
    const response = await Axios.get('http://localhost:8082/movie/');
    dispatch({
      type: 'FETCH_MOVIES',
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: 'ERROR_MOVIE', error: error });
  }
};


export const fetchMovieById = (id) => async (dispatch, getState) => {
    dispatch({ type: 'LOADING_MOVIE' });
    try {
      const response = await Axios.get('http://localhost:8082/movie/'+id);
      dispatch({
        type: 'FETCH_MOVIE',
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: 'ERROR_MOVIE', error: error });
    }
  };

//Add Movie
export const addMovie = (m) => async (dispatch, getState) => {
    try {
      const response = await Axios({
        method: 'post',
        url: 'http://localhost:8082/movie/',
        headers: {},
        data: {
            
            movieName: m.movieName,
            movieGenre: m.movieGenre,
            movieHours: m.movieHours,
            language: m.movieLanguage,
            description: m.movieDescription,
        },
      }).catch(function (error) {
        throw new Error(error.response.data.message);
      });
  
      dispatch({
        type: 'ADD_MOVIE',
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: 'ERROR_MOVIES', error: error });
    }
  };


  export const deleteMovieByID = (id) => async (dispatch, getState) => {
      console.log(id);
    dispatch({ type: 'LOADING_MOVIE' });
    try {
      const response = await Axios.delete(
'http://localhost:8082/movie/' + id
      ).catch(function (error) {
        throw new Error(error.response.data.message);
      });
      dispatch({
        type: 'DELETE_MOVIE',
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: 'ERROR_MOVIES', error: error });
    }
  };


  export const updateMovie = (m) => async (dispatch, getState) => {
    try {
      const response = await Axios({
        method: 'put',
        url: 'http://localhost:8082/movie/',
        headers: {},
        data: {
          movieId: m.movieId,
          movieName: m.movieName,
          movieGenre: m.movieGenre,
          movieHours: m.movieHours,
          language: m.movieLanguage,
          description: m.movieDescription,
        },
      }).catch(function (error) {
        throw new Error(error.response.data.message);
      });
      dispatch({
        type: 'UPDATE_MOVIE',
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: 'ERROR_MOVIES', error: error });
    }
  };
const initStat = {
    movies: [],
    loading: false,
    error: null,
    movie: {},
  };
  const MovieReducer = (state = initStat, action) => {
    switch (action.type) {
      case 'LOADING_MOVIE':
        return {
          ...state,
          loading: true,
          error: '',
        };
      case 'FETCH_MOVIES':
        return {
          ...state,
          movies: action.payload,
          loading: false,
          error: null,
        };

        case 'FETCH_MOVIE':
        return {
          ...state,
          movie: action.payload,
          loading: false,
          error: null,
        };
      case 'DETAIL_MOVIE':
        return {
          ...state,
          movie: action.payload,
          loading: false,
          error: null,
        };


        case 'ADD_MOVIE':
      return {
        ...state,
        movie: action.payload,
        loading: false,
        error: null,
      };

      case 'UPDATE_MOVIE':
      return {
        ...state,
        movie: action.payload,
        loading: false,
        error: null,
      };
  
      case 'DELETE_MOVIE':
        return {
          ...state,
          movie: action.payload,
          loading: false,
          error: null,
        };
  
      case 'ERROR_MOVIES':
        return {
          ...state,
          loading: false,
          error: action.error.message,
        };
  
      default:
        return state;
    }
  };
  export default MovieReducer;
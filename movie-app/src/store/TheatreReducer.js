const initStat = {
    theatres: [],
    loading: false,
    error: null,
    theatre: {},
  };
  const TheatreReducer = (state = initStat, action) => {
    switch (action.type) {
      case 'LOADING_THEATRE':
        return {
          ...state,
          loading: true,
          error: '',
        };
      case 'FETCH_THEATRES':
        return {
          ...state,
          theatres: action.payload,
          loading: false,
          error: null,
        };
      case 'DETAIL_THEATRE':
        return {
          ...state,
          theatre: action.payload,
          loading: false,
          error: null,
        };
  
      case 'DELETE_THEATRE':
        return {
          ...state,
          theatre: action.payload,
          loading: false,
          error: null,
        };
  
      case 'ADD_THEATRE':
        return {
          ...state,
          theatre: action.payload,
          loading: false,
          error: null,
        };
      case 'UPDATE_THEATRE':
        return {
          ...state,
          theatre: action.payload,
          loading: false,
          error: null,
        };
      case 'ERROR_THEATRES':
        return {
          ...state,
          loading: false,
          error: action.error.message,
        };
  
      default:
        return state;
    }
  };
  export default TheatreReducer;
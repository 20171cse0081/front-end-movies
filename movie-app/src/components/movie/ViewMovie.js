import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import {fetchMovie} from '../actions/MovieAction';
import { CustomLocaleTextGrid } from './PrintMovies';

function ViewMovie(){
    const movies = useSelector((state) => state.movie.movies);
    const dispatch = useDispatch();
  
    useEffect(() => {
    dispatch(fetchMovie());
    }, [dispatch]);


    // useEffect(() => {
    //  console.log(movies);
    //   }, [movies]);
  
    return (
      <Container>
        <Row style={{ textAlign: 'center' }}>
          <Col>
            <h1>MOVIE</h1>
          </Col>
        </Row>
  
        <Row>
          <Col>
         <div>{movies && CustomLocaleTextGrid()}</div>
          </Col>
        </Row>
      </Container>
    );
}

export default ViewMovie;

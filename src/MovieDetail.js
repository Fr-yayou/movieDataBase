import React, { Component } from 'react';
import styled from 'styled-components'
import { Poster } from './Movie'
import Overdrive from 'react-overdrive'


const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
const BACKDROP_PATH ='http://image.tmdb.org/t/p/w1280'

class MovieDetail extends Component {

  state = {
    movie:{},
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=5644d46e245d1ea59841c828ecfffc12&language=en-US`)
        const movie = await res.json()
        console.log(movie)
      this.setState({
          movie: movie
      })
    } catch (e) {
      console.log(e)
    }
  }
  
    render() {
      const {movie} = this.state
      return (
          <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
              <MovieInfo>
                  <div>
                      <Overdrive id={movie.id}>
                      <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
                      </Overdrive>
                  </div>
                  <div>
                    <h1>{movie.title}</h1>
                    <h3>{movie.release_date}</h3>
                    <p>{movie.overview}</p>
                  </div>
              </MovieInfo>
          </MovieWrapper>
    
  );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
position:relative;
padding-top:50vh;
background:url(${props => props.backdrop}) no-repeat;
background-size:cover;
`
const MovieInfo = styled.div`
background:white;
text-align:left;
padding:2rem 10%;
display:flex;
> div{
    margin-left:20px;
    background-color:white

}
img{
    position:relative;
    top:-6rem;
}

`


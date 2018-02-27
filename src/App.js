import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Movie from './components/Movie';

const API_KEY = "84e8f1fe";

class App extends Component {
  state = {
    title: undefined,
    poster: undefined,
    imdbRating: undefined,
    year: undefined,
    error: undefined,
  };

  getMovie = async (e) => {
    e.preventDefault();
    const movieTitle = e.target.elements.title.value;

    if (!movieTitle) {
      this.setState({
        title: undefined,
        poster: undefined,
        imdbRating: undefined,
        year: undefined,
        error: "Please enter a title"
      });
      return;
    }

    const api_call = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${movieTitle}`);
    const data = await api_call.json();

    this.setState({
      title: data.Title,
      poster: data.Poster,
      imdbRating: data.imdbRating,
      year: data.Year,
      error: ""
    });

  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getMovie={this.getMovie} />
                  <Movie 
                    title={this.state.title}
                    poster={this.state.poster}
                    imdbRating={this.state.imdbRating}
                    year={this.state.year}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default App;

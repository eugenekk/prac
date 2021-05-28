import React from 'react';
import axios from 'axios';
import Movie from "./Movie";
import "./App.css"
//컴포넌트 추가 가능

// class App is extended from React의 Component
// class는 return 없음
// render 메소드 안에서 return 해결 
// react는 자동으로 모든 class안의 rander 메소드를 실행함
// state를 갖고 있음 : Object / 변화
// 값 변경시 render를 매번 새로 호출 해야함 -> setState() : 변경 + refresh
// constructor - render - componentDidMount - (값변경) - render - componentDidUpdate - (페이지이동) - componentWillUnmount

class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  };

  getMovies = async ()=>{
    const {
      data: {
        data:{ movies }
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
    console.log('movies', movies);
    // movie 데이터 가져오면 state에 넣고, isLoading 값 false로 변경
    this.setState({ movies, isLoading : false });
  }

  // render 끝나고 바로 시행(2번)
  componentDidMount(){
    this.getMovies();
  }
  
  render(){
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
            <Movie 
              key={movie.id} 
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
          </div>
          )}
      </section>
    );
  }
}
export default App;
 
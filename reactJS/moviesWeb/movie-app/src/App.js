import React from 'react';
import PropTypes from 'prop-types';
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

  // render 끝나고 바로 시행(2번)
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading : false});
    }, 3000)
  }
  
  render(){
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? "Loading...": "We are ready!"}
      </div>
    )
  }
}
export default App;
 
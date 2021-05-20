import React from 'react';
import PropTypes from 'prop-types';
//컴포넌트 추가 가능

function Food({ name, picture, rating }){
  return <div>
    <h2>I like {name}</h2>
    <h3>{rating}/5.0</h3>
    <img src = {picture}></img>

  </div>
}

const foodILike = [{
  id : 1,
  name : "Apple",
  image : "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png",
  rating : 3.5
},
{
  id : 2,
  name : "Banana",
  image : "https://t3.ftcdn.net/jpg/00/40/27/88/360_F_40278826_B7OPAKulie4Ox7bi4ks3tBJETkbrsrpt.jpg",
  rating : 1.7
},
{
  id : 3,
  name : "Orange",
  image : "https://i.pinimg.com/736x/05/79/5a/05795a16b647118ffb6629390e995adb.jpg",
  rating : 4.8
}
]

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number
}

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
 
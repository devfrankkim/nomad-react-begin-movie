import React from 'react';
import PropTypes from 'prop-types';
import { prototype } from 'stack-utils';


const foodILike = [

  {
    id: 1,
    name: 'burger',
    image: 
      "https://search.naver.com/search.naver?where=image&sm=tab_jum&query=pizza#imgId=blog13325671%7C5%7C221193413327_330801524&vType=rollout",
  },
  {
    id: 2,
    name: 'fries',
    image:
    "https://timesofindia.indiatimes.com/life-style/health-fitness/diet/junk-food-is-deadlier-than-what-it-was-30-years-ago-finds-study/photostory/68283873.cms",
    rating: 3.5

  },
  {
    id: 3,
    name:'donut and burgers',
    image: 
    "https://phys.org/news/2016-10-junk-food-environment.html",
    rating: 1.5

  },
  {
    id: 4,
    name: 'Seoul',
    image:
    "https://www.gooverseas.com/blog/how-to-get-a-job-teaching-english-in-south-korea",
    rating: 4.3

  },
  
]

function Food({name, picture, rating}){
  return (
   <div> 
     <h2>I like {name} and </h2> 
     <h4>{rating}/5.0</h4>
     <img src={picture} alt={name}/> 

   </div>
    )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}
  
function App() {
  return (   
      
    <div> 
      {foodILike.map(food => (
        <Food key={food.id} name={food.name} picture={food.image} rating={food.rating}/>
      ))}
    </div>
  ); 
}

export default App;

        //   App() return => <Food /> props를 내보내고 다시 return 한다. 
        //     process  (<Food props={props}/>)
        //     1) props를 function(props)로 보내줌  =>  2) function(props)에서 return해서 다시 받는다. => App() <Food/> EXPORT 후 => index.js에서 render를 한다.


        //    *******  (food)는 object다. *******
        /*
              {foodILike.map(food => (
                <Food key={food.id} name={food.name} picture={food.image} rating={food.rating}/>
              ))}
        */

        //     npm i prop-types  내가 원하는 props인지 확인해준다.
        /*
                Food.PropTypes = {
                    // 얻고 싶은 props에 대한 설명 적는다.
                    name: PropTypes.string.isRequired,
                    picture: PropTypes.string.isRequired,
                    rating: PropTypes.number.isRequired
                }
        */


        // props, state, jsx 중요.

        // state 다이나믹함. dynamic data 컨트롤함.
import React from 'react';
import PropTypes from 'prop-types';

class Ex01 extends React.Component{
    constructor(props){
        super(props);

    }
    state = {
        count: 0
    };
    add= () =>{
        this.setState((current) => ({ count : current.count + 1}))
    };
    minus = () => {
        this.setState((current) => ({ count : current.count - 1}))
    };
 
    componentDidMount(){
        console.log("Component rendered");
    }

    componentDidUpdate(){
        console.log('I just updated')
    }

    componentWillMount(){
        console.log('Good bye, cruel World.');
    }
    render(){
        console.log('I am rendering'); 
        return (
              <div>
                <h1>The number is : {this.state.count}</h1>
                <button onClick={this.add}>ADD</button>
                <button onClick={this.minus}>MINUS</button>
             </div> 
             )
    }
}

export default Ex01;

// state 쓰기 위해 React.Component를 불러온다.
// class 는 return을 하지 않는다. 대신 => render()

// ******** To show up on the screen, you should use render() ********
// REACT automatically is going to execute *****the render()***** function of your class Component

 

/*
    클래스 컴포넌트는 state를 가지고 있기 때문에 중요하다.
    state 는 object다. => state에 data를 넣는다. => then(data changes)

    바꾸고 싶은 data를 state에 넣는다.
*/

// this.add() => () 즉시 호출 한다. 
// this.add는 onClick할 때만 실행한다.

/*
    바꿀 때는 render()를 해야 한다. setState()를 사용해야 한다.
*/

/*
    매 순간 setState 를 호출할 때  마다 react는 새로운 state와 함께 render() function을 호출한다. 

*/

/*
    react class component는 단순히 render말고 더 많은 걸 가지고 있다.
    life cycle method를 가진다. 기본적으로 react가 component를 생성하고 없애는 방법이다.

    *component가 생성될 때, render전에 호출되는 몇가지 function이 있다.

    *component가 render된 후, 호출되는 다른 function들이 존재한다.

    Mounting is like being born.

    Updating is updating.

    Unmounting is being removed. Dead.
    => how does the component die? => ex) when changing pages.
    but state를 사용해서 component를 교체하기도 하고, component가 죽는데는 다양한 방법이 있다.

    ===================================
    componentDidMount()

    constructor()가 먼저 호출된다. 
    constructor는 시작 전에 호출 된다. 그런 후 render가 실행된다. 

    constructor() => render() => componentDidMount() 
    기본적으로 이것은 "hey, this component는 처음으로 render 됐어."

    ===================================
    updating

    shouldComponentUpdate()는 setState를 호출할 때 마다 발생한다.
    render()
    componentDidUpdate()

    따라서 setState를 호출하면, Component를 호출하고, 
    먼저 render를 호출한 다음 => 업데이트가 완료되었다고 말하면
    componentDidUpdate가 실행된다. 

    setState => component => render() => updated done => componentDidUpdate()

    ====================================

    componentWillUnmount는 component가 떠날 때 호출 됨.
    ex) 페이지 넘어갈 때.
    
*/
import React, { useState } from 'react';

const App = ({ initialCount }) => {

  // let [count, setCount] = useState(initialCount);

  let [state, setState] = useState ({
    count: initialCount,
    name: 'Amin'
  })

  // const plusOne = () => { setCount(count + 1) }
  // const minusOne = () => { setCount(count - 1) }

  // const resetOne = () => {
  //   setCount( prevCount => {
  //     console.log(prevCount)
  //     return prevCount - 1
  //   })
  // }

  const resetOne = () => {
    setState( prevState => {
      return {...prevState, count: state.count - 1}
    })
  }

  return(
    <>
      <h1>{ state.name }</h1>
      <h3>Count: { state.count }</h3>
      {/* <button onClick={ plusOne }>+</button> */}
      {/* <button onClick={ minusOne }>-</button> */}
      {/* <button onClick={ () => setCount(count + 1) }> + </button>
      <button onClick={ resetOne }> - </button>
      <button onClick={ () => setCount(0) }> Reset </button> */}

      <button onClick={ () => setState({...state, count: state.count + 1})}>plus</button>
      <button onClick={ resetOne }>Minus</button>

    </>
  )
}

export default App;

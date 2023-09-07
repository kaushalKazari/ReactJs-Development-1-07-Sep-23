import React, { Component } from 'react'

/*
    class Child extends Parent{
        // 1. Properties/Variable

        //2. Constractor (Spe. function)

        //3. Methods/Functions
    }
*/

export default class MyComponent3 extends Component {
  render() {    
    let name = 'Kaushal kishor' // local variable
    return (
      // Every function return HTML Structure JSX
      <div>MyComponent3 {name}</div>
    )
  }
}

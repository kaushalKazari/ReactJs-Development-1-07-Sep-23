import { Component } from "react";

export class ClassComponent1 extends Component{

    //1. properties/Variables
    fullname='Kaushal Kishor';

    //2. constractor

    //3. methods
    
    // Every class componets must have render method
    render(){
        // let n='OkLabs';
        return(
            <>
                <h1>Class Component {this.fullname}</h1>
            </>
        )
    }
}

// export default ClassComponent1;
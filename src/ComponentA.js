import ComponentB from "./ComponentB";

// function area
function ComponentA(){
    return(
       <>
         <h1>ComponentA</h1>
        <ComponentB/>
       </>
    )
}

// export area
export default ComponentA;
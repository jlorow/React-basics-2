import React from 'react'

function Button() {
   
// let count = 0;
//    const handleClick = (name) => {
//     if(count < 3) {
//         count++
//         console.log(`${name} you clicked me ${count} time/s`)
//     }
//     else {
//        console.log(`${name} stop clicking me!`)
//     }

//    };

const handleClick = (e) => e.target.textContent = "OUCH! 😀" ;

//    const handleClick2 = (name) => console.log (`${name} stop clicking me` );

  return (
    // <button onClick={() => handleClick2("olgaze")}>Click Me😂</button>
    // <button onClick={() => handleClick("bro")}>Click Me😂</button>
    <button onClick={(e) => handleClick(e)}>Click Me😂</button>


  )
}

export default Button
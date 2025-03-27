import React, {useState} from 'react'

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName( "Spongebob");
    }
    const incrementAge = () => {
        setAge(age + 19);
    }
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }
  return (
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>is Employed: {isEmployed ? "yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>is Employed</button>
    </div>
  )
}

export default MyComponent
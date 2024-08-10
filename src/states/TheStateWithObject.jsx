import { useState } from "react"

export function  StateWithObject(){

    const [person, updatePerson] = useState({
        name:"Naresh",
        age:27
    });

    const updatePersonDetails = () => {
        updatePerson(
           {
            ...person,
            UserName :"Jupalle Naresh"
           }
        )
    }

    // for nested object consider.

    const [anotherPerson, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
      });

      const updateAnotherPerson = () => {
        const artwork = {...anotherPerson.artwork,city:"Nandyal"};
        setPerson(
            {
                ...anotherPerson,
                artwork
            }
        );
        
    }
    return (
        <>

            <h1>State with Object</h1>
            <p>Person Details : {JSON.stringify(person)}</p>

            <button type="button" onClick={updatePersonDetails}>Update Person</button>
            <br />
            <br />
            <br />

            <p>Another Person Details : {JSON.stringify(anotherPerson)}</p>
            <br />
            <br />
            <br />
            <button type="button" onClick={updateAnotherPerson}>Update AnotherPerson</button>
        </>
    )
}

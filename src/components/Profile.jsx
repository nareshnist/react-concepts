import { Avatar } from "./Avatar"

export function Profile(){

    const person = {
        name:"Naresh",
        desination:"Software Engineer"
    }
    const anotherPerson = {
        name:"Chandu",
        desination:"Army "
    }
    return (
        <>
        <Avatar info={person} age={20}></Avatar>
        <Avatar info={anotherPerson} ></Avatar>
        </>
    )
}


function User(userData){
    console.log(userData);
    userData.print("Nani")
    return <>
        <h1>user name : {userData.userName}</h1>
        <p>user bio : <b>Age : </b> {userData.userAge} </p>
    </>
}


export default User;




// class component approach
import React from "react";


// export default class User extends React.Component {

//     constructor(props) {
//         super(props);
//         console.log(props);
//     }

//     render() {
//         // in class componnet we can use using this keyword

//         return ( <h1>naresh</h1>
//             // <>        
//             // <h1>user name : {this.userData.userName}</h1>
//             // <p>user bio : <b>Age : </b> {this.userData.userAge} </p>
//             // </>
//         )
//     }
// }
import './conditional-rendering.css'
export function ConditinalRendering() {

    return (
        <>
            <header>
                <Header></Header>
            </header>
            
            
            
            {/* when condition is true no else block  */}
            {
                isAdmin && <Admin></Admin>
            }
        </>
    )
}

let loggedin = false;
let isAdmin = true;

function Header() {
    return(
        <>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contanct Us</li>
                <li>{ loggedin ? 'Logout' :  'Login' }</li>
            </ul>
        </>
    )
}


function Admin() {
    return (
        <h1>This is Admin DashBoard</h1>
    )
}


// 1 component can return conditional some jsx code
// 2 using ternary operator in side jsx 
// 3 using the &&(Operator) in side jsx  (display something when is true )


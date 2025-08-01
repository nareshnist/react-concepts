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



// Short cirtuiting loggical operators

// && Operator 

// if first operand is false immediatly return false  --->  short circut it 
// if first value will true then automatically return the second value

// || operator

// if first value will true immediatly return it ---->   short circut it  
// // if first value will false then check for other 
// both all falsy valuse then last one would return

// goes worng

// exmaple object.count || 'no data'
// since zero is falsy value it will return the 'no data' but it might go wrong to avoid it we can use below operator

// nullish coalescing operator.


// only work when the first value is null & undifined then assign the value



// optional chaining operator

// avoid the error and terminate it (like break)

// if you are looking for a property that does not existed which return the undefined 

// for example reviews.librarything.reviewsCount

// if reviews.librarything return undefined your seaching undefined.reviewsCount which end return the error 
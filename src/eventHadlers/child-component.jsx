

// child component


// child componnet reading the props data.
// export function Button({message,children}){
//     const handleClick = function(e){
//         alert("button clicked "+message)
//     }
//     return (
//         <button onClick={handleClick}>{children}</button>
//     )
// }

// Passing event handlers as props 
// export function Button(props){
//     const {onClick,children} = props;
//     console.log(props);
//     return (
//         <button onClick={onClick}>{children}</button>
//     )
// }

// export function PlayButton({movieName}){
//     const handlePlayClick = (e) =>{
//         alert(`Playing ${movieName}`);
//     }
//     return (
//         <Button onClick ={handlePlayClick} >{movieName}</Button>
//     )
// }

//  export function UploadButton(){
//     const handleUploadClick = (e) =>{
//         alert(`Upload image `);
//     }
    
//     return (
//         <Button onClick ={handleUploadClick} >uploadimage</Button>
//     )
// }

// Naming event handler props 

export function Button(props){
    const {onSmash,children} = props;
    console.log(props);
    return (
        <button onClick={onSmash}>{children}</button>
    )
}

export function ButtonContainer(){

    const handleClick = (e) =>{
        alert("xyz")
    }
    return (
        <Button onSmash={handleClick}>Base Button</Button>
    )
}
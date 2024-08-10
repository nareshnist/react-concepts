export function Avatar({info,age = 15}){
    console.log(info);
    console.log(age) ;
    return (
        <>
        <h1> Name:{info.name}</h1>
        <p>Designation {info.desination}</p>
        <p>Age is : {age}</p>
        </>
    )
}
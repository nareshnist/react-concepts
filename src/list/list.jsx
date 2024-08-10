


export function List(){

    const lang = 'Java script';
    const languages = ['HTML','CSS','JAVA'];

    return(
        <>
            <h1>This is list component.</h1>
            <h2>{languages}</h2>
            <ul>
                {languages.map((lang, i) => <li key={lang}> {lang}</li>)}
            </ul>
        </>
    )
}
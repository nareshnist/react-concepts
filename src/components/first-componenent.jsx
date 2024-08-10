import { Header } from "./header";


export function Article(){
    const  link = 'https://react.dev/learn/javascript-in-jsx-with-curly-braces';

    return (
        <article>
            <Header></Header>
            {4 * 6}
            <h1>Heading</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Exercitationem vitae saepe vel, tenetur delectus beatae expedita! Exercitationem aut ut dolor esse nam? Minus praesentium culpa consequatur, 
                 id necessitatibus vero delectus!
            </p>
            <a href={link}>Read More</a>
        </article>
    )
}

// step 1 define function
// step 2 add markup
// step 3 export & import where it required or where should we render.


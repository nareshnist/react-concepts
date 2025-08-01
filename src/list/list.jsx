
export function List(){

    const lang = 'Java script';
    const languages = ['HTML','CSS','JAVA'];


    // adding the book
    const newBook = {
        title:'Harry Potter',
        id:1
    }

    const books = [
        {
            title:"React",
            id:3
        },
        {
            title:"Vue",
            id:2
        }
    ]

    const bookAfterAdding  = [
        ...books,newBook
    ]

    // How to delete the book 
    const booksAfterDelete = bookAfterAdding.filter(book => book.id !== 3);


    // how to update the book in the array
    
    const booksAfterUpdate= booksAfterDelete.map(book => book.id === 1 ? {
        ...book,
        title:'Angular'
    } : book);


    return (
        <>
            <h1>This is list component.</h1>
            <h2>{languages}</h2>
            <ul>
                {languages.map((lang, i) => <li key={lang}> {lang}</li>)}
            </ul>
        </>
    )
}


// Map does not change the original array instead it return the new Array
// Filter as well
// Reduce 
// Sort (Mutable) can change original array. (A-B ascending order) (B-A descending order)


// includes true 
// slice  copy



// Working with immutable Arrays (can't be changed)

// how to add
// how to delete
// how to update


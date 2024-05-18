function genrePicked(){

    if (selectedGenre == "Fantasy"){
        //display a book with a fantasy genre tag
    }

    else if (selectedGenre == "Romance"){
        //display a book with a Romance genre tag
    }
}

function repPicked(){
    
        if (selectedRep == "Gay"){
            //display a book with a gay representation tag
        }
    
        else if (selectedRep == "Lesbian"){
            //display a book with a Lesbian Representation tag
        }
    }
let selectedGenre = ""
let selectedRepresentation = ""
    function bookFinder(book){
        //return book.genre.includes(genre[selectedGenre]) && book.representation.includes(representation[selectedRepresentation])

        const bookIncludesGenre = book.genre.includes(genre[selectedGenre])
        const bookIncludesRep = book.representation.includes(representation[selectedRepresentation])

        return bookIncludesGenre && bookIncludesRep
     }

    document.getElementById('Submit').onclick = function() { 
        
        // if there is already result already exsisting clear result or no do nothing
    

        let x = document.getElementById("Genre")
        selectedGenre = x.value
        let y = document.getElementById("Representation")
        selectedRepresentation = y.value
        const results = books.filter(bookFinder)//forEach(console.log)
        const p = document.getElementsById("result")
        if (p) {
            p.removeChild()
            (removeChild)
        
        }

        const paragraph = document.createElement('p');

       
    

        //const paragraph = document.createElement('p');

paragraph.textContent = results[0].title;
document.body.getElementById("result").appendChild(paragraph)

document.body.appendChild(paragraph);
        
    }

    const genre={fantasy:"Fantasy", romance:"Romance"} //TODO add all genres
    const representation={gay:"Gay M/M", lesbian:"Lesbian F/F"} // TODO add all representations

const books = [
    {
        title: "cherry on top",
        genre: [genre.fantasy],
        representation: [representation.gay]

    }
    ,
    {
        title: "no book found",
        genre: [genre.fantasy, genre.romance],
        representation: [representation.gay, representation.lesbian]
    }

    //TODO update books to create database
]

const genre = {
    fantasy:"Fantasy", 
    romance:"Romance",
    new_adult: "New Adult",
    suspense: "Suspense",
    horror: "Horror",
    fanstasy: "Fantasy",
    dark_fantasy: "Dark Fantasy",
    ya: "Young Adult",
    paranormal: "Paranormal",
    urban_fantasy: "Urban Fantasy",
    mental_health: "Mental Health",
    sci_fi: "SciFi"
} 
const representation = {
    gay:"Gay M/M", 
    lesbian:"Lesbian F/F",
    bi: "Bisexual",
    non_binary: "Non-binary",
    trans: "Trans",
}


const books = [
    {
        title: "Cherry On Top",
        author: "Lucas Delrose",
        genre: [genre.fantasy, genre.new_adult, genre.romance],
        representation: [representation.gay]
    },
    {
        title: "The binding of Bloom Mountain",
        author: "Siggy Chambers",
        genre: [genre.horror, genre.fantasy],
        representation: [representation.lesbian], 
    }, 
    {
        title: "The Modern Mythos Anomaly",
        author: "Juniper Lake Fitzgerald",
        genre: [genre.dark_fantasy],
        representation: [representation.bi],
    },
    {
        title: "Umbra: Tales of a Shadow",
        author: "Freddie Clark",
        genre: [genre.sci_fi],
        representation: [representation.gay, representation.bi, representation.non_binary, representation.lesbian],
    },
    {
        title: "Starseer",
        author: "Katya Hernandez",
        genre: [genre.ya, genre.fantasy],
        representation: [representation.gay, representation.bi],
    },
    {
        title: "White Trach Warlock",
        author: "David Slayton",
        genre: [genre.fantasy, genre.paranormal, genre.urban_fantasy],
        representation: [representation.gay, representation.bi],
    },
    {
        title: "A Mark on my soul",
        author: "Jordon Greene",
        genre: [genre.ya, genre.romance, genre.mental_health ],
        representation: [representation.gay],
    },
    {
        title: "Cemetery Boys",
        author: "Aiden Thomas",
        genre: [genre.fantasy, genre.ya, genre.paranormal, genre.urban_fantasy],
        representation: [representation.trans],
    },
    {
        title: "no book found",
        genre: Object.values(genre), 
        representation: Object.values(representation),
    }
]

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
        console.log(selectedGenre, selectedRepresentation)
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
    const p = document.getElementById("result")
    if (p) {
        console.log("removing old")
        p.remove()
    }

    const paragraph = document.createElement('p');
    paragraph.id = "result";
    
    console.log(paragraph, p, results )
     paragraph.textContent = results[0].title;

    document.body.appendChild(paragraph);

}



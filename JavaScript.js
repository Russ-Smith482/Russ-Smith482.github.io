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
        cover: "https://m.media-amazon.com/images/I/71jEP6to8VL._SL1500_.jpg",
        genre: [genre.fantasy, genre.new_adult, genre.romance],
        representation: [representation.gay]
    },
    {
        title: "The Binding of Bloom Mountain",
        author: "Siggy Chambers",
        cover: "https://m.media-amazon.com/images/I/81O309XnosL._SL1500_.jpg",
        link: "https://www.amazon.com/Binding-Bloom-Mountain-Valley-Book-ebook/dp/B0BPDPBNVB/ref=sr_1_1",
        genre: [genre.horror, genre.fantasy],
        representation: [representation.lesbian], 
    }, 
    {
        title: "The Modern Mythos Anomaly",
        author: "Juniper Lake Fitzgerald",
        genre: [genre.fantasy, genre.romance, genre.paranormal],
        representation: [representation.bi, representation.gay],
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
    }
]




let selectedGenre = ""
let selectedRepresentation = ""
    function bookFinder(book){
        
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
    const results = books.filter(bookFinder)
    const bookContainer = document.getElementById("result")
    if (bookContainer) {
        console.log("removing old")
        bookContainer.remove()
    }
    const randomResult = getRandomResult(results)
    console.log(randomResult);
    function getRandomResult(resultsList)
    {
        const x = Math.random() * (resultsList.length-1);
        const y = Math.floor(x);
        return resultsList[y];
    }
    const paragraph = document.createElement('p');
    const div = document.createElement('div');
    const img = document.createElement('img');
    const link = document.createElement('a');
    div.id = "result";
    
    console.log(paragraph, bookContainer, results )
    const hasResults = results.length > 0

    if (hasResults) { 
             paragraph.textContent = randomResult.title + " by " + randomResult.author; 
             
             img.src = randomResult.cover;

             link.href = randomResult.link;
             
             link.textContent = "Click Me";

             
    }
    else
    {
        paragraph.textContent = "No Book Found"
    }
    img.classList.add("Cover");
    div.appendChild(paragraph);
    div.appendChild(img);
    div.appendChild(link);
    document.body.appendChild(div);


}



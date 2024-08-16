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
    sci_fi: "SciFi",
    mystery: "Mystery"
} 
const representation = {
    gay:"Gay M/M", 
    lesbian:"Lesbian F/F",
    bi: "Bisexual",
    non_binary: "Non-binary",
    trans: "Trans",
    demi: "Demisexual",
    ace: "Ace"
}


const books = [
    {
        title: "Cherry On Top",
        author: "Lucas Delrose",
        cover: "https://m.media-amazon.com/images/I/71jEP6to8VL._SL1500_.jpg",
        link: "https://www.amazon.com/Cherry-Top-Lucas-Delrose/dp/1088049516/ref=sr_1_1",
        genre: [genre.mystery, genre.new_adult, genre.romance],
        representation: [representation.gay]
    },
    {
        title: "The Binding of Bloom Mountain",
        author: "Siggy Chambers",
        cover: "https://m.media-amazon.com/images/I/81O309XnosL._SL1500_.jpg",
        link: "https://www.amazon.com/Binding-Bloom-Mountain-Valley-Book-ebook/dp/B0BPDPBNVB/ref=sr_1_1",
        genre: [genre.horror, genre.fantasy],
        representation: [representation.lesbian, representation.bi], 
    }, 
    {
        title: "The Modern Mythos Anomaly",
        author: "Juniper Lake Fitzgerald",
        cover: "https://m.media-amazon.com/images/I/81L3go8fiXL._SL1500_.jpg",
        link: "https://www.amazon.com/Modern-Mythos-Anomaly-Juniper-Fitzgerald/dp/B0C1DPT3T8/ref=sr_1_1",
        genre: [genre.fantasy, genre.romance, genre.paranormal],
        representation: [representation.bi, representation.gay],
    },
    {
        title: "Umbra: Tales of a Shadow",
        author: "Freddie Clark",
        cover: "https://m.media-amazon.com/images/I/912kpjY+mvL._SL1500_.jpg",
        link:"https://www.amazon.com/Umbra-Tales-Shadow-Freddie-Clark-ebook/dp/B0CCZ27D57/ref=sr_1_1",
        genre: [genre.sci_fi],
        representation: [representation.gay, representation.bi, representation.non_binary, representation.lesbian],
    },
    {
        title: "Starseer",
        author: "Katya Hernandez",
        cover: "https://m.media-amazon.com/images/I/81PcfsEVFuL._SL1500_.jpg",
        link: "https://www.amazon.com/Starseer-Trilogy-Book-1-ebook/dp/B0BYH656CY/ref=sr_1_2",
        genre: [genre.ya, genre.fantasy],
        representation: [representation.gay, representation.bi],
    },
    {
        title: "White Trach Warlock",
        author: "David Slayton",
        cover: "https://m.media-amazon.com/images/I/91LZdFG56LL._SL1500_.jpg",
        link: "https://davidrslayton.com/",
        genre: [genre.fantasy, genre.paranormal, genre.urban_fantasy],
        representation: [representation.gay, representation.bi],
    },
    {
        title: "A Mark on my soul",
        author: "Jordon Greene",
        cover: "https://m.media-amazon.com/images/I/814evKVNUpL._SL1360_.jpg",
        link: "https://www.amazon.com/Mark-My-Soul-Jordon-Greene-ebook/dp/B07MYQQ5JD/ref=sr_1_1",
        genre: [genre.ya, genre.romance, genre.mental_health],
        representation: [representation.gay],
    },
    {
        title: "Cemetery Boys",
        author: "Aiden Thomas",
        cover: "https://m.media-amazon.com/images/I/81zjwKmYg-L._SL1500_.jpg",
        link: "https://www.amazon.com/Cemetery-Boys-Aiden-Thomas/dp/1250250463/ref=sr_1_1",
        genre: [genre.fantasy, genre.ya, genre.paranormal, genre.urban_fantasy],
        representation: [representation.trans],
    },
    {
        title: "Head for Murder",
        author: "Chase Connor",
        cover: "https://m.media-amazon.com/images/I/81alO4KDe4L._SL1500_.jpg",
        link: "https://www.amazon.com/Head-Murder-Rock-Harbor-Mystery-ebook/dp/B0CD44RHYS/ref=sr_1_1",
        genre: [genre.mystery],
        representation: [representation.gay],
    },
    {
        title: "Jack of Hearts",
        author: "L. C. Rosen",
        cover: "https://m.media-amazon.com/images/I/51y-cLQOiCL.jpg",
        link: "https://www.amazon.com/Jack-Hearts-other-parts-Rosen/dp/0316480533",
        genre: [genre.ya,genre.mystery, genre.romance],
        representation: [representation.gay,],
    },
    {
        title: "Trick",
        author: "Cara Nox",
        cover: "https://m.media-amazon.com/images/I/91a9mOq5uwL._SL1500_.jpg",
        link: "https://www.amazon.com/dp/B0C3Y51B49",
        genre: [genre.fanstasy, genre.new_adult, genre.urban_fantasy],
        representation: [representation.ace, representation.gay, representation.demi, representation.lesbian],
    },
    {
        title: "Requiem for Immortals",
        author: "Lee Winter",
        cover: "https://m.media-amazon.com/images/I/81-ZrC-qHVL._SL1500_.jpg",
        link: "https://www.amazon.com/Requiem-Immortals-Law-Game-Book-ebook/dp/B01JK1NN2Q/ref=sr_1_1",
        genre: [genre.thriller, genre.mystery, genre.romance],
        representation: [representation.lesbian]
    }

]

const background = [
    "red",
    "blue",
    "green",
    "yellow"
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
        const x = Math.random() * (resultsList.length);
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
             
             link.textContent = "Available Here";

             
    }
    else
    {
        paragraph.textContent = "No Book Found"
    }
    img.classList.add("Cover");
    div.appendChild(paragraph);
    div.appendChild(img);
    div.appendChild(link);
    document.getElementById("Results Container").appendChild(div);
    
    const backgroundColor = getRandomResult(background)
    document.body.classList.remove(...background);
    document.body.classList.add(backgroundColor);
    
    
    
}



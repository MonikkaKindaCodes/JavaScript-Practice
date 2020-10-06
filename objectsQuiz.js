var movies = [{
        title: "Napoleon Dynamite",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Hey Arnold! Movie",
        hasWatched: true,
        rating: 4.5
    },
    {
        title: "Matilda",
        hadWatched: true,
        rating: 5
    }
]
movies.forEach(function (movie) {
    var result = "You have "
    if (movie.hasWatched === true) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result);
})
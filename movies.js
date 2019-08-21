const movies = [
    {
        title: "The Shawshank Redemption",
        rank: "1",
        genre: ['Drama'],
        id: "tt0111161",
        poster:"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        ratings:"9.3"
    },
    {
        title: "The Godfather",
        rank: "2",
        genre: ['Crime', 'Drama'],
        id: "tt0068646",
        poster:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
        ratings:"9.2"
    },
    {
        title: "The Godfather: Part II",
        rank: "3",
        genre: ['Crime', 'Drama'],
        id: "tt0071562",
        poster:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
        ratings:"9.0"
    },
    {
        title: "Pulp Fiction",
        rank: "4",
        genre: ['Crime', 'Drama'],
        id: "tt0110912",
        poster:"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg",
        ratings:"8.9"
    },
    {
        title: "The Good, the Bad and the Ugly",
        rank: "5",
        genre: ['Western'],
        id: "tt0060196",
        poster:"https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SY1000_CR0,0,656,1000_AL_.jpg",
        ratings:"8.8"
    },
    {
        title: "The Dark Knight",
        rank: "6",
        genre: ['Action', 'Drama', 'Crime'],
        id: "tt0468569",
        poster:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        ratings:"9.0"
    },
    {
        title: "12 Angry Men",
        rank: "7",
        genre: ['Drama'],
        id: "tt0050083",
        poster:"https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY1000_CR0,0,649,1000_AL_.jpg",
        ratings:"8.9"
    },
    {
        title: "Schindler's List",
        rank: "8",
        genre: ['Biography', 'Drama', 'History'],
        id: "tt0108052",
        poster:"https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        ratings:"8.9"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: "9",
        genre: ['Adventure', 'Drama', 'Fantasy'],
        id: "tt0167260",
        poster:"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        ratings:"8.9"
    },
    {
        title: "Fight Club",
        rank: "10",
        genre: ['Drama'],
        id: "tt0137523",
        poster:"https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        ratings:"8.8"
    },
    {
        title: "Star Wars: Episode V - The Empire Strikes Back",
        rank: "11",
        genre: ['Adventure', 'Action', 'Fantasy'],
        id: "tt0080684",
        poster:"https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,641,1000_AL_.jpg",
        ratings:"8.7"
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        rank: "12",
        genre: ['Adventure', 'Drama', 'Fantasy'],
        id: "tt0120737",
        poster:"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY999_CR0,0,673,999_AL_.jpg",
        ratings:"8.8"
    },
    {
        title: "One Flew Over the Cuckoo's Nest",
        rank: "13",
        genre: ['Drama'],
        id: "tt0073486",
        poster:"https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,672,1000_AL_.jpg",
        ratings:"8.7"
    },
    {
        title: "Inception",
        rank: "14",
        genre: ['Adventure', 'Action', 'Sci-Fi'],
        id: "tt1375666",
        poster:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        ratings:"8.8"
    },
    {
        title: "Goodfellas",
        rank: "15",
        genre: ['Crime', 'Drama', 'Biography'],
        id: "tt0099685",
        poster:"https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX667_CR0,0,667,999_AL_.jpg",
        ratings:"8.7"
    },
    {
        title: "Star Wars",
        rank: "16",
        genre: ['Adventure', 'Action', 'Fantasy'],
        id: "tt0076759",
        poster:"https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,643,1000_AL_.jpg",
        ratings:"8.6"
    },
    {
        title: "Seven Samurai",
        rank: "17",
        genre: ['Adventure', 'Drama'],
        id: "tt0047478",
        poster:"https://m.media-amazon.com/images/M/MV5BNDE1NTUyOGQtMjNkNS00NjhlLWFjNGEtMWYzMTExZDc1M2M2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        ratings:"8.6"
    },
    {
        title: "Forrest Gump",
        rank: "18",
        genre: ['Romance', 'Drama'],
        id: "tt0109830",
        poster:"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        ratings:"8.8"
    },
    {
        title: "The Matrix",
        rank: "19",
        genre: ['Action', 'Sci-Fi'],
        id: "tt0133093",
        poster:"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg",
        ratings:"8.7"
    },
    {
        title: "The Lord of the Rings: The Two Towers",
        rank: "20",
        genre: ['Adventure', 'Drama', 'Fantasy'],
        id: "tt0167261",
        poster:"https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,684,1000_AL_.jpg",
        ratings:"8.7"
    },
    {
        title: "City of God",
        rank: "21",
        genre: ['Crime', 'Drama'],
        id: "tt0317248",
        poster:"https://m.media-amazon.com/images/M/MV5BMGU5OWEwZDItNmNkMC00NzZmLTk1YTctNzVhZTJjM2NlZTVmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
        ratings:"8.6"
    },
    {
        title: "Se7en",
        rank: "22",
        genre: ['Crime', 'Drama', 'Mystery'],
        id: "tt0114369",
        poster:"https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,639,1000_AL_.jpg",
        ratings:"8.6"
    },
    {
        title: "The Silence of the Lambs",
        rank: "23",
        genre: ['Crime', 'Drama', 'Thriller'],
        id: "tt0102926",
        poster:"https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
        ratings:"8.6"
    },
    {
        title: "Once Upon a Time in the West",
        rank: "24",
        genre: ['Western'],
        id: "tt0064116",
        poster:"https://m.media-amazon.com/images/M/MV5BZGI5MjBmYzYtMzJhZi00NGI1LTk3MzItYjBjMzcxM2U3MDdiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,658,1000_AL_.jpg",
        ratings:"8.5"
    },
    {
        title: "Casablanca",
        rank: "25",
        genre: ['Romance', 'Drama', 'War'],
        id: "tt0034583",
        poster:"https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
        ratings:"8.5"
    },
    {
        title: "The Usual Suspects",
        rank: "26",
        genre: ["Crime","Mystery","Thriller"],
        id: "tt0114814",
        poster:"https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,670,1000_AL_.jpg",
        ratings:"8.5"
    },
    {
        title: "Raiders of the Lost Ark",
        rank: "27",
        genre: ["Action","Adventure"],
        id: "tt0082971",
        poster:"https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SY1000_CR0,0,664,1000_AL_.jpg",
        ratings:"8.5"
    },
    {
        title: "Rear Window",
        rank: "28",
        genre: ["Mystery","Thriller"],
        id: "tt0047396",
        poster:"https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,683,1000_AL_.jpg",
        ratings:"8.5"
    },
    {
        title: "It's a Wonderful Life",
        rank: "29",
        genre: ["Drama","Family","Fantasy"],
        id : "tt0038650",
        poster:"https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SY1000_CR0,0,687,1000_AL_.jpg",
        ratings:"8.6"
    },
    {
        title: "Psycho",
        rank: "30",
        genre: ["Horror","Mystery","Thriller"],
        id: "tt0054215",
        poster:"https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,672,1000_AL_.jpg",
        ratings:"8.5"
    },
    {
        title: "Léon: The Professional",
        rank: "31",
        genre: ["Drama","Action","Crime"],
        id: "tt0110413",
        poster:"https://m.media-amazon.com/images/M/MV5BZDAwYTlhMDEtNTg0OS00NDY2LWJjOWItNWY3YTZkM2UxYzUzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,710,1000_AL_.jpg",
        ratings:"8.6"
    },
    {
        title: "Sunset Blvd.",
        rank: "32",
        genre: ["Drama","Film-Noir"],
        id: "tt0043014",
        poster:"https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_SY1000_CR0,0,663,1000_AL_.jpg",
        ratings:"8.4"
    },
    {
        title: "American History X",
        rank: "33",
        genre: ["Drama"],
        id: "tt0120586",
        poster:"https://m.media-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
        ratings:"8.5"
    },
    {
        title: "Apocalypse Now",
        rank: "34",
        genre: ["Drama","War"],
        id: "tt0078788",
        poster:"https://m.media-amazon.com/images/M/MV5BZTNkZmU0ZWQtZjQzMy00YTNmLWFmN2MtZGNkMmU1OThmMGYwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,652,1000_AL_.jpg",
        ratings:"8.4"
    },
    {
        title: "Terminator 2: Judgment Day",
        rank: "35",
        genre: ["Action ","Sci-Fi"],
        id: "tt0103064",
        poster:"https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY999_CR0,0,672,999_AL_.jpg",
        ratings:"8.5"
    },
    {
        title: "Saving Private Ryan",
        rank: "36",
        genre: ["Drama ","War"],
        id: "tt0120815",
        poster:"https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,679,1000_AL_.jpg",
        ratings:"8.6"
    },
    {
        title: "Memento",
        rank: "37",
        genre: ["Mystery ","Thriller"],
        id: "tt0209144",
        poster:"https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,681,1000_AL_.jpg",
        ratings:"8.4"
    },
    {
        title: "City Lights",
        rank: "38",
        genre: ["Comedy ","Romance", "Drama"],
        id: "tt0021749",
        poster:"https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        ratings:"8.5"
    },
    {
        title: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        rank: "39",
        genre: ["Comedy"],
        id: "tt0057012",
        poster:"https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,643,1000_AL_.jpg",
        ratings:"8.4"
    },
    {
        title: 'Alien',
        rank: '40',
        genre: ["Horror", "Sci-Fi"],
        id: 'tt0078748',
        poster: 'https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,678,1000_AL_.jpg',
        ratings: '8.4'
    },
    {
        title: 'Modern Times',
        rank: '41',
        genre: ["Comedy", "Drama", "Family"],
        id: 'tt0027977',
        poster: 'https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        ratings: '8.5'
    },
    {
        title: 'North by Northwest',
        rank: '43',
        genre: ["Adventure", "Mystery", "Thriller"],
        id: 'tt0053125',
        poster: 'https://m.media-amazon.com/images/M/MV5BZDA3NDExMTUtMDlhOC00MmQ5LWExZGUtYmI1NGVlZWI4OWNiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY1000_CR0,0,664,1000_AL_.jpg',
        ratings: '8.3'
    },
    {
        title: 'Back to the Future',
        rank: '44',
        genre: ["Comedy", "Adventure", "Sci-Fi"],
        id: 'tt0088763',
        poster: 'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,643,1000_AL_.jpg',
        ratings: '8.5'
    },
    {
        title: 'Life Is Beautiful',
        rank: '45',
        genre: ["Comedy", "Drama", "Romance"],
        id: 'tt0118799',
        poster: 'https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_SX670_AL_.jpg',
        ratings: '8.6'
    },
    {
        title: 'The Shining',
        rank: '46',
        genre: ["Drama", "Horror"],
        id: 'tt008150',
        poster: 'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        ratings: '8.4'
    },
    {
        title: 'The Pianist',
        rank: '47',
        genre: ['Biography', 'Drama', 'Music'],
        id: 'tt0253474',
        poster: 'https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,724,1000_AL_.jpg',
        ratings: '8.5'
    },
    {
        title: 'Citizen Kane',
        rank: '48',
        genre: ["Drama", "Mystery"],
        id: 'tt0033467',
        poster: 'https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX667_CR0,0,667,999_AL_.jpg',
        ratings: '8.3'
    },
    {
        title: 'The Departed',
        rank: '49',
        genre: ["Crime", "Drama", "Thriller"],
        id: 'tt0407887',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg',
        ratings: '8.5'
    },
    {
        title: 'M',
        rank: '50',
        genre: ["Crime", "Mystery", "Thriller"],
        id: 'tt0022100',
        poster: 'https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_.jpg',
        ratings: '8.3'
    },
    {
        title: 'Paths of Glory',
        rank: '51',
        genre: ["Drama", "War"],
        id: 'tt0050825',
        poster: 'https://m.media-amazon.com/images/M/MV5BNjViMmRkOTEtM2ViOS00ODg0LWJhYWEtNTBlOGQxNDczOGY3XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SY999_CR0,0,722,999_AL_.jpg',
        ratings: '8.4'
    },
    {
        title: 'Vertigo',
        rank: '52',
        genre: ["Mystery", "Romance", "Thriller"],
        id: 'tt0052357',
        poster: 'https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY1000_CR0,0,645,1000_AL_.jpg',
        ratings: '8.3'
    },
    {
        title: 'Django Unchained',
        rank: '53',
        genre: ["Drama", "Western"],
        id: 'tt1853728',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
        ratings: '8.4'
    },
    {
        title: 'Double Indemnity',
        rank: '54',
        genre: ["Crime", "Drama", "Film-Noir"],
        id: 'tt0036775',
        poster: 'https://m.media-amazon.com/images/M/MV5BOTdlNjgyZGUtOTczYi00MDdhLTljZmMtYTEwZmRiOWFkYjRhXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_.jpg',
        ratings: '8.3'
    },
    {
        title: 'The Dark Knight Rises',
        rank: '55',
        genre: ["Action","Thriller"],
        id: 'tt1345836',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_.jpg',
        ratings: '8.4'
    },
    {
        title: 'Aliens',
        rank: '56',
        genre: ['Adventure', 'Action', 'Sci-Fi'],
        id: 'tt0090605',
        poster: 'https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,643,1000_AL_.jpg',
        ratings: '8.4'
    },
    {
        title: "Iron Man",
        rank: "101",
        genre: ['Adventure', 'Action', 'Sci-Fi'],
        id: "tt0371746",
        poster: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        ratings:  "7.9"
    },
    {
        title: "Iron Man 2",
        rank: "102",
        genre: ['Adventure', 'Action', 'Sci-Fi'],
        id: "tt1228705",
        poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg",
        ratings: "7.0"
    },
    {
        title: "Iron Man 3",
        rank: "103",
        genre: ['Adventure', 'Action', 'Sci-Fi'],
        id: "tt0097576",
        poster: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SY1000_SX700_AL_.jpg",
        ratings: "7.2"
    },
    {
        title: "Captian America: The First Avenger",
        rank: "104",
        genre: ['Adventure', 'Action', 'Sci-Fi'],
        id: "tt0458339",
        poster: "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SY1000_CR0,0,640,1000_AL_.jpg",
        ratings: "6.9"
    },
    {
        title: "Captian America: The Winter Soldier",
        rank: "105",
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        id: "tt1843866",
        poster: "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_SY1000_CR0,0,685,1000_AL_.jpg",
        ratings: "7.8"
    },
    {
        title: "Captian America Civil War",
        rank: "106",
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        id: "tt3498820",
        poster: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        ratings: "7.8"
    },
    {
        title: "Thor",
        rank: "107",
        genre: ['Adventure', 'Action', 'Fantasy'],
        id: "tt0800369",
        poster: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        ratings: "7.0"
    },
    {
        title: "Thor: The Dark World",
        rank: "108",
        genre: ['Action', 'Adventure', 'Fantasy'],
        id: "tt1981115",
        poster: "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SY1000_SX700_AL_.jpg",
        ratings: "6.9"
    },
    {
        title: "The Avengers",
        rank: "109",
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        id: "tt0848228",
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        ratings: "8.0"
    },
    {
        title: "The Avengers: Age of Ultron",
        rank: "110",
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        id: "tt2395427",
        poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_SX675_AL_.jpg",
        ratings: "7.3"
    },
    {
        title: "The Avengers: Infinity War",
        rank: "111",
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        id: "tt0848228",
        poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        ratings: "8.5"
    },
    {
        title: "The Avengers: Endgame",
        rank: "112",
        genre: [ 'Action', 'Adventure', 'Sci-Fi'],
        id: "tt4154756",
        poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        ratings: "8.6"
    },
    {
        title: "Thor: Ragnarok",
        rank: "113",
        genre: ['Adventure', 'Action', 'Comedy'],
        id: "tt3501632",
        poster: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        ratings: "7.9"
    },
    {
        title: "Doctor Strange",
        rank: "114",
        genre: ['Action', 'Adventure', 'Fantasy'],
        id: "tt1211837",
        poster: "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        ratings: "7.5"
    },
    {
        title: "Guardians of the Galaxy",
        rank: "115",
        genre: ['Adventure', 'Action', 'Comedy'],
        id: "tt2015381",
        poster: "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        ratings: "8.1"
    },
    {
        title: "Ant-Man",
        rank: "116",
        genre: ['Adventure', 'Action', 'Comedy'],
        id: "tt0478970",
        poster: "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_.jpg",
        ratings: "7.3"
    },
    {
        title: "Guardians of the Galaxy Vol. 2",
        rank: "117",
        genre: ['Action', 'Adventure', 'Comedy'],
        id: "tt3896198",
        poster: "https://m.media-amazon.com/images/M/MV5BN2MwNjJlODAtMTc1MS00NjkwLTg2NDMtYzFjZmU2MGM1YWUwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
        ratings: "7.6"
    },
    {
        title: "Spider-Man: Homecoming",
        rank: "118",
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        id: "tt2250912",
        poster: "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SY1000_CR0,0,658,1000_AL_.jpg",
        ratings: "7.5"
    },
    {
        title: "Black Panther",
        rank: "119",
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        id: "tt1825683",
        poster: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        ratings: "7.3"
    },
    {
        title: "Ant-Man and the Wasp",
        rank: "120",
        genre: ['Action', 'Adventure', 'Comedy'],
        id: "tt5095030",
        poster: "https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        ratings: "7.1"
    },
    {
        title: "Captain Marvel",
        rank: "121",
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        id: "tt4154664",
        poster: "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        ratings: "7.0"
    },
    {
        title: "Spider-Man: Far from Home",
        rank: "122",
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        id: "tt6320628",
        poster: "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        ratings: "7.6"
    },
    {
        title: "The Incredible Hulk",
        rank: "124",
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        id: "tt0800080",
        poster: "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        ratings: "6.7"
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        rank: "125",
        genre: ['Family', 'Adventure', 'Fantasy'],
        id: "tt0241527",
        poster: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
        ratings: "7.6"
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        rank: "126",
        genre: ['Family', 'Adventure', 'Fantasy'],
        id: "tt0295297",
        poster: "https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_.jpg",
        ratings: "7.4"
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        rank: "127",
        genre: ['Family', 'Adventure', 'Fantasy'],
        id: "tt0304141",
        poster: "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SY1000_CR0,0,676,1000_AL_.jpg",
        ratings: "7.9"
    },
    {
        title: "Harry Potter and the Goblet of Fire",
        rank: "128",
        genre: ['Family', 'Adventure', 'Fantasy'],
        id: "tt0330373",
        poster: "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_.jpg",
        ratings: "7.7"
    },
    {
        title: "Harry Potter and the Order of the Phoenix",
        rank: "129",
        genre: ['Family', 'Adventure', 'Fantasy'],
        id: "tt0373889",
        poster: "https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_.jpg",
        ratings: "7.5"
    },
    {
        title: "Harry Potter and the Half-Blood Prince",
        rank: "130",
        genre: ['Family', 'Action', 'Fantasy'],
        id: "tt0417741",
        poster: "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SY1000_CR0,0,648,1000_AL_.jpg",
        ratings: "7.6"
    },
    {
        title: "Harry Potter and the Deathly Hallows: Part 1",
        rank: "131",
        genre: ['Adventure', 'Fantasy', 'Mystery'],
        id: "tt0926084",
        poster: "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        ratings: "7.7"
    },
    {
        title: "Harry Potter and the Deathly Hallows: Part 2",
        rank: "132",
        genre: ['Drama', 'Adventure', 'Fantasy'],
        id: "tt1201607",
        poster: "https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX667_CR0,0,667,999_AL_.jpg",
        ratings: "8.1"
    }
]

export default movies;
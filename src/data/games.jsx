const games = [
  {
    id: 1,
    title: "PAC-MAN",
    genre: "Action",
    year: 1980,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/394160/header.jpg"
  },
  {
    id: 2,
    title: "Dragon's Lair",
    genre: "Adventure",
    year: 1983,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/227380/header.jpg"
  },
  {
    id: 3,
    title: "The Bard's Tale",
    genre: "RPG",
    year: 1985,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/843260/header.jpg"
  },
  {
    id: 4,
    title: "California Games",
    genre: "Sports",
    year: 1987,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1399480/header.jpg"
  },
  {
    id: 5,
    title: "Alex Kidd in the Enchanted Castle",
    genre: "Platform",
    year: 1989,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/34283/header.jpg"
  },
  {
    id: 6,
    title: "Populous",
    genre: "Strategy",
    year: 1989,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2203860/header.jpg"
  },
  {
    id: 7,
    title: "Double Dragon",
    genre: "Action",
    year: 1987,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/314150/header.jpg"
  },
  {
    id: 8,
    title: "Wasteland",
    genre: "RPG",
    year: 1988,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/259130/header.jpg"
  },

  {
    id: 9,
    title: "DOOM",
    genre: "Action",
    year: 1993,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2280/header.jpg"
  },
  {
    id: 10,
    title: "Tomb Raider",
    genre: "Adventure",
    year: 1996,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2478970/header.jpg"
  },
  {
    id: 11,
    title: "Fallout",
    genre: "RPG",
    year: 1997,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/38400/header.jpg"
  },
  {
    id: 12,
    title: "SEGA Bass Fishing",
    genre: "Sports",
    year: 1997,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/71240/header.jpg"
  },
  {
    id: 13,
    title: "Sonic CD",
    genre: "Platform",
    year: 1993,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/200940/header.jpg"
  },
  {
    id: 14,
    title: "Age of Empires II",
    genre: "Strategy",
    year: 1999,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/813780/header.jpg"
  },
  {
    id: 15,
    title: "Half-Life",
    genre: "Action",
    year: 1998,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/70/header.jpg"
  },
  {
    id: 16,
    title: "Grim Fandango",
    genre: "Adventure",
    year: 1998,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/316790/header.jpg"
  },
  {
    id: 17,
    title: "Baldur's Gate",
    genre: "RPG",
    year: 1998,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/228280/header.jpg"
  },
  {
    id: 18,
    title: "Oddworld: Abe's Oddysee",
    genre: "Platform",
    year: 1997,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/15700/header.jpg"
  },

  {
    id: 19,
    title: "Deus Ex",
    genre: "RPG",
    year: 2000,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/6910/header.jpg"
  },
  {
    id: 20,
    title: "Max Payne",
    genre: "Action",
    year: 2001,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/12140/header.jpg"
  },
  {
    id: 21,
    title: "The Elder Scrolls III: Morrowind",
    genre: "RPG",
    year: 2002,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/22320/header.jpg"
  },
  {
    id: 22,
    title: "Half-Life 2",
    genre: "Action",
    year: 2004,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/220/header.jpg"
  },
  {
    id: 23,
    title: "Civilization IV",
    genre: "Strategy",
    year: 2005,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/3900/header.jpg"
  },
  {
    id: 24,
    title: "Psychonauts",
    genre: "Platform",
    year: 2005,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/3830/header.jpg"
  },
  {
    id: 25,
    title: "Portal",
    genre: "Adventure",
    year: 2007,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/400/header.jpg"
  },
  {
    id: 26,
    title: "Mass Effect",
    genre: "RPG",
    year: 2007,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/17460/header.jpg"
  },
  {
    id: 27,
    title: "TrackMania Nations Forever",
    genre: "Sports",
    year: 2008,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/11020/header.jpg"
  },
  {
    id: 28,
    title: "Left 4 Dead 2",
    genre: "Action",
    year: 2009,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/550/header.jpg"
  },
  {
    id: 29,
    title: "Dragon Age: Origins",
    genre: "RPG",
    year: 2009,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/47810/header.jpg"
  },

  {
    id: 30,
    title: "Civilization V",
    genre: "Strategy",
    year: 2010,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/8930/header.jpg"
  },
  {
    id: 31,
    title: "Portal 2",
    genre: "Adventure",
    year: 2011,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/620/header.jpg"
  },
  {
    id: 32,
    title: "The Elder Scrolls V: Skyrim",
    genre: "RPG",
    year: 2011,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/72850/header.jpg"
  },
  {
    id: 33,
    title: "XCOM: Enemy Unknown",
    genre: "Strategy",
    year: 2012,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/200510/header.jpg"
  },
  {
    id: 34,
    title: "Tomb Raider",
    genre: "Adventure",
    year: 2013,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/203160/header.jpg"
  },
  {
    id: 35,
    title: "Shovel Knight",
    genre: "Platform",
    year: 2014,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/250760/header.jpg"
  },
  {
    id: 36,
    title: "The Witcher 3",
    genre: "RPG",
    year: 2015,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg"
  },
  {
    id: 37,
    title: "Rocket League",
    genre: "Sports",
    year: 2015,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/252950/header.jpg"
  },
  {
    id: 38,
    title: "Civilization VI",
    genre: "Strategy",
    year: 2016,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/289070/header.jpg"
  },
  {
    id: 39,
    title: "Hollow Knight",
    genre: "Platform",
    year: 2017,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg"
  },
  {
    id: 40,
    title: "Celeste",
    genre: "Platform",
    year: 2018,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/504230/header.jpg"
  },
  {
    id: 41,
    title: "Sekiro: Shadows Die Twice",
    genre: "Action",
    year: 2019,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/814380/header.jpg"
  },

  {
    id: 42,
    title: "Hades",
    genre: "Action",
    year: 2020,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg"
  },
  {
    id: 43,
    title: "It Takes Two",
    genre: "Adventure",
    year: 2021,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1426210/header.jpg"
  },
  {
    id: 44,
    title: "Age of Empires IV",
    genre: "Strategy",
    year: 2021,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1466860/header.jpg"
  },
  {
    id: 45,
    title: "Elden Ring",
    genre: "RPG",
    year: 2022,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg"
  },
  {
    id: 46,
    title: "Sonic Frontiers",
    genre: "Platform",
    year: 2022,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1237320/header.jpg"
  },
  {
    id: 47,
    title: "Football Manager 2024",
    genre: "Sports",
    year: 2023,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2252570/header.jpg"
  },
  {
    id: 48,
    title: "Baldur's Gate 3",
    genre: "RPG",
    year: 2023,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg"
  },
  {
    id: 49,
    title: "ANIMAL WELL",
    genre: "Platform",
    year: 2024,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/813230/header.jpg"
  },
  {
    id: 50,
    title: "Manor Lords",
    genre: "Strategy",
    year: 2024,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1363080/header.jpg"
  }
];

export default games;
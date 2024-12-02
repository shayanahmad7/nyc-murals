export interface Mural {
  id: number;
  title: string;
  artist: string;
  images: string[];
  description: string;
  location: string;
  year: string;
  comments: Array<{ author: string; text: string }>;
  link: string;
}

export const murals: Mural[] = [
  {
    id: 1,
    title: "Bowery Mural",
    artist: "Various Artists",
    images: [
      "/mural-images/1/1-1.jpg",
      "/mural-images/1/1-2.jpg",
      "/mural-images/1/1-3.jpg",
      "/mural-images/1/1-4.jpg",
      "mural-images/1/1-5.jpg"
    ],
    description: "The Bowery Mural is a rotating outdoor exhibition space, featuring works by renowned street artists.",
    location: "Houston Street and Bowery, Manhattan",
    year: "Ongoing",
    comments: [
      { author: "Sarah M.", text: "Always exciting to see what new artwork appears here!" }
    ],
    link: "https://www.goldmansachs.com/our-firm/history/moments/2008-bowery-mural.html"
  },
  {
    id: 2,
    title: "Audubon Mural Project",
    artist: "Various Artists",
    images: [
      "/mural-images/2/2-1.jpg",
      "/mural-images/2/2-2.jpg",
      "/mural-images/2/2-3.jpg"
    ],
    description: "A series of murals depicting climate-threatened birds in John James Audubon's neighborhood.",
    location: "Hamilton Heights and Washington Heights, Manhattan",
    year: "Ongoing since 2014",
    comments: [
      { author: "Alex B.", text: "Love how this project combines art with environmental awareness." }
    ],
    link: "https://www.audubon.org/amp"
  },
  {
    id: 3,
    title: "Keith Haring Mural",
    artist: "Keith Haring",
    images: [
      "/mural-images/3/3-1.jpg",
      "/mural-images/3/3-2.jpg"
    ],
    description: "One of Keith Haring's last public artworks, featuring his iconic style and characters.",
    location: "128 2nd Avenue, East Village, Manhattan",
    year: "1986",
    comments: [
      { author: "Emma L.", text: "A true NYC classic. Haring's work never gets old." }
    ],
    link: "https://www.nycgo.com/attractions/keith-haring-mural"
  },
  {
    id: 4,
    title: "Graffiti Hall of Fame",
    artist: "Various Artists",
    images: [
      "/mural-images/4/4-1.jpg",
      "/mural-images/4/4-2.jpg",
      "/mural-images/4/4-3.jpg"
    ],
    description: "A schoolyard turned into a legendary spot for graffiti artists to showcase their work.",
    location: "106th Street and Park Avenue, East Harlem",
    year: "Established 1980, ongoing",
    comments: [
      { author: "Carlos R.", text: "The history of NYC street art is alive here. Amazing to see it evolve over the years." }
    ],
    link: "https://www.atlasobscura.com/places/graffiti-hall-of-fame"
  },
  {
    id: 5,
    title: "Banksy's Hammer Boy",
    artist: "Banksy",
    images: [
      "/mural-images/5/5-1.jpg",
      "/mural-images/5/5-2.jpg"
    ],
    description: "A stencil work by the elusive artist Banksy, depicting a boy about to hammer a fire hydrant.",
    location: "79th Street and Broadway, Upper West Side",
    year: "2013",
    comments: [
      { author: "Jess T.", text: "Can't believe this Banksy piece is still here! Love stumbling upon it." }
    ],
    link: "https://streetartutopia.com/2024/02/29/banksy-hammer-boy-mural-in-new-york-usa/"
  },
  {
    id: 6,
    title: "We Own the Future",
    artist: "Shepard Fairey",
    images: [
      "/mural-images/6/6-1.jpg",
      "/mural-images/6/6-2.jpg"
    ],
    description: "A large-scale mural declaring 'We own the future', featuring Fairey's signature style combining graphic design elements with social commentary.",
    location: "161 Bowery, Lower East Side, Manhattan",
    year: "2014",
    comments: [
      { author: "Street Art Enthusiast", text: "Fairey's work always makes a bold statement. This mural is no exception!" }
    ],
    link: "https://obeygiant.com/we-own-the-future-mural-up-in-lower-east-side-nyc/"
  },
  {
    id: 7,
    title: "The Bushwick Collective",
    artist: "Various Artists",
    images: [
      "/mural-images/7/7-1.jpg",
      "/mural-images/7/7-2.jpg",
      "/mural-images/7/7-3.jpg",
      "/mural-images/7/7-4.jpg",
      "/mural-images/7/7-5.jpg",
      "/mural-images/7/7-6.jpg",
      "/mural-images/7/7-7.jpg",
    ],
    description: "An outdoor gallery of street art murals by artists from around the world.",
    location: "Troutman Street and St. Nicholas Avenue, Bushwick, Brooklyn",
    year: "Established 2011, ongoing",
    comments: [
      { author: "Lena K.", text: "This place is like a free, open-air museum. New surprises around every corner!" }
    ],
    link: "https://www.thebushwickcollective.com/"
  },
  {
    id: 8,
    title: "Eduardo Kobra's Mount Rushmore",
    artist: "Eduardo Kobra",
    images: [
      "/mural-images/8/8-1.jpg",
      "/mural-images/8/8-2.jpg",
      "/mural-images/8/8-3.jpg",
      "/mural-images/8/8-4.jpg",
      "/mural-images/8/8-5.jpg",
    ],
    description: "A vibrant, colorful reinterpretation of Mount Rushmore featuring indigenous faces.",
    location: "188 Lafayette Street, SoHo",
    year: "2018",
    comments: [
      { author: "Tanya R.", text: "The colors in this mural are incredible. Such a powerful message too." }
    ],
    link: "https://www.timeout.com/newyork/news/check-out-eduardo-kobras-new-mount-rushmore-mural-in-soho-082418"
  },
  {
    id: 9,
    title: "Big City of Dreams",
    artist: "Tristan Eaton",
    images: [
      "/mural-images/9/9-1.jpg",
      "/mural-images/9/9-2.jpg",
      "/mural-images/9/9-3.jpg",
      "/mural-images/9/9-4.jpg",
      "/mural-images/9/9-5.jpg",
      "/mural-images/9/9-6.jpg",
      "/mural-images/9/9-7.jpg",
      "/mural-images/9/9-8.jpg",
      "/mural-images/9/9-9.jpg",
    ],
    description: "A colorful mural painted by street artist Tristan Eaton, featuring his signature patchwork style with intricate details representing the vibrant energy of New York City.",
    location: "Broome Street near Centre Market Place, SoHo, Manhattan",
    year: "2015",
    comments: [
      { author: "Maya R.", text: "Eaton's work never fails to impress. This mural captures the essence of the city beautifully!" }
    ],
    link: "https://viewing.nyc/check-out-tristan-eatons-colorful-big-city-of-dreams-mural-in-soho/"
  },
  {
    id: 10,
    title: "Crack is Wack",
    artist: "Keith Haring",
    images: [
      "/mural-images/10/10-1.jpg",
      "/mural-images/10/10-2.jpg"
    ],
    description: "A powerful anti-drug mural featuring Haring's signature style and bold message.",
    location: "128th Street and 2nd Avenue, East Harlem",
    year: "1986",
    comments: [
      { author: "Art Lover", text: "A classic piece of NYC street art history with an important message." }
    ],
    link: "https://www.nycgovparks.org/parks/crack-is-wack-playground/highlights/12442"
  },
  {
    id: 11,
    title: "Somos La Luz",
    artist: "Jorge Rodríguez-Gerada",
    images: [
      "/mural-images/11/11-1.jpg",
      "/mural-images/11/11-2.jpg"
    ],
    description: "A 20,000-square-foot mural honoring healthcare workers, depicting Dr. Ydelfonso Decoo, a pediatrician who died fighting COVID-19. The piece aims to highlight the disproportionate impact of the pandemic on Latinx and Black communities.",
    location: "Queens Museum parking lot, Queens, New York",
    year: "2020",
    comments: [
      { author: "Healthcare Hero", text: "A powerful tribute to those who sacrificed everything during the pandemic. Truly moving." }
    ],
    link: "https://www.thisiscolossal.com/2020/06/jorge-rodriguez-gerada-somos-la-luz/"
  },
  {
    id: 12,
    title: "The Gilded Lady",
    artist: "Tristan Eaton",
    images: [
      "/mural-images/12/12-1.jpg",
      "/mural-images/12/12-2.jpg"
    ],
    description: "A massive, intricately detailed portrait of a woman, blending realism with graphic elements.",
    location: "Mulberry Street, Little Italy",
    year: "2019",
    comments: [
      { author: "Art Fan", text: "The level of detail in this mural is mind-blowing. Tristan Eaton is a master!" }
    ],
    link: "https://flatironnomad.nyc/history/the-gilded-lady/"
  },
  {
    id: 13,
    title: "The Statue of Liberty",
    artist: "Eduardo Kobra",
    images: [
      "/mural-images/13/13-1.jpg",
      "/mural-images/13/13-2.jpg"
    ],
    description: "A colorful, geometric interpretation of the Statue of Liberty.",
    location: "East Village, Manhattan",
    year: "2018",
    comments: [
      { author: "Freedom Fan", text: "Kobra's take on Lady Liberty is both modern and respectful. Love it!" }
    ],
    link: "https://streetartcities.com/cities/newyork/markers/15379"
  },
  {
    id: 14,
    title: "Fight for Street Art",
    artist: "Eduardo Kobra",
    images: [
    "/mural-images/14/14-1.jpg",
    "/mural-images/14/14-2.jpg"
    ],
    description: "A vibrant mural featuring Andy Warhol and Basquiat, two pop icons, sharing the hashtag Fight for Street Art.",
    location: "147 Bedford Avenue, Brooklyn",
    year: "2018",
    comments: [
    { author: "Pop Art Fan", text: "Seeing Warhol and Basquiat together is incredible. Kobra's style really brings them to life!" }
    ],
    link: "https://artsandculture.google.com/story/9-amazing-street-art-murals-in-new-york/HAUxIVumcQkQtw?hl=en"
    },
    {
    id: 15,
    title: "Frida Kahlo and Diego Rivera",
    artist: "Eduardo Kobra",
    images: [
    "/mural-images/15/15-1.jpg",
    "/mural-images/15/15-2.jpg"
    ],
    description: "A colorful mural celebrating the Mexican artists Frida Kahlo and Diego Rivera.",
    location: "366 Prospect Pl, Brooklyn",
    year: "2018",
    comments: [
    { author: "Art Historian", text: "Kobra's unique style brings these iconic artists to life in such a vibrant way!" }
    ],
    link: "https://artsandculture.google.com/story/9-amazing-street-art-murals-in-new-york/HAUxIVumcQkQtw?hl=en"
    },
    {
    id: 16,
    title: "Big Pun Memorial Mural",
    artist: "Tats Cru",
    images: [
    "/mural-images/16/16-1.jpg",
    "/mural-images/16/16-2.jpg"
    ],
    description: "A tribute mural to Big Pun, celebrating the hip hop's first Latin platinum artist.",
    location: "910 Rogers Place, Bronx",
    year: "Ongoing (updated annually)",
    comments: [
    { author: "Hip Hop Fan", text: "A must-see for any fan of Big Pun and hip hop culture." }
    ],
    link: "https://artsandculture.google.com/story/9-amazing-street-art-murals-in-new-york/HAUxIVumcQkQtw?hl=en"
    },
    {
    id: 17,
    title: "Welling Court Mural Project",
    artist: "Various Artists",
    images: [
    "/mural-images/17/17-1.jpg",
    "/mural-images/17/17-2.jpg"
    ],
    description: "An outdoor gallery of street art murals by artists from around the world, featuring over 150 murals.",
    location: "11-98 Welling Court, Astoria, Queens",
    year: "Established 2009, ongoing",
    comments: [
    { author: "Street Art Enthusiast", text: "One of the best spots to see a diverse range of street art styles in NYC!" }
    ],
    link: "https://secretnyc.co/nyc-street-art/"
    },
    {
    id: 18,
    title: "Houston Bowery Wall Mural",
    artist: "Various Artists (rotating)",
    images: [
    "/mural-images/18/18-1.jpg",
    "/mural-images/18/18-2.jpg"
    ],
    description: "A famous wall that features rotating murals by various street artists, originally started with a Keith Haring piece.",
    location: "76 E. Houston St., Manhattan",
    year: "Ongoing",
    comments: [
    { author: "Art Lover", text: "It's always exciting to see what new artwork appears on this iconic wall!" }
    ],
    link: "https://artsandculture.google.com/story/9-amazing-street-art-murals-in-new-york/HAUxIVumcQkQtw?hl=en"
    },
    {
    id: 19,
    title: "Coney Art Walls",
    artist: "Various Artists",
    images: [
    "/mural-images/19/19-1.jpg",
    "/mural-images/19/19-2.jpg"
    ],
    description: "An outdoor museum of street art featuring murals by leading street and graffiti artists.",
    location: "3050 Stillwell Ave., Coney Island, Brooklyn",
    year: "2015-2018",
    comments: [
    { author: "Beach Goer", text: "These murals add such vibrant energy to the Coney Island experience!" }
    ],
    link: "https://secretnyc.co/nyc-street-art/"
    },
    {
    id: 20,
    title: "Ecosystem Restoration Mural",
    artist: "Carlos Alberto",
    images: [
    "/mural-images/20/20-1.jpg",
    "/mural-images/20/20-2.jpg"
    ],
    description: "A 12,800 square foot mural focusing on ecosystem restoration and tree equity, featuring a woman embracing a tree surrounded by jungle elements.",
    location: "Javits Center, 11th Avenue between 39th and 40th Street, Manhattan",
    year: "2024",
    comments: [
    { author: "Environmental Activist", text: "This mural beautifully captures the importance of ecosystem restoration in our urban environments." }
    ],
    link: "https://www.decadeonrestoration.org/massive-ecosystem-restoration-mural-appears-new-york-city-calls-leaders-act-nature"
    },
    {
      id: 21,
      title: "Rice Terraces",
      artist: "Dasic Fernández",
      images: [
        "/mural-images/21/21-1.jpg",
        "/mural-images/21/21-2.jpg"
      ],
      description: "A vibrant mural inspired by the rice paddy fields of China, transforming Doyers Street into a vivid corridor that attracts street art enthusiasts.",
      location: "Doyers Street, Chinatown, Manhattan",
      year: "2021",
      comments: [
        { author: "Art Aficionado", text: "The colors and design bring such life to this historic street!" }
      ],
      link: "https://gothamtogo.com/rice-terraces-by-dasic-fernandez-the-2021-doyers-street-nyc-dot-asphalt-art-activations-street-mural/"
    },
    {
      id: 22,
      title: "We <3 New York",
      artist: "Eduardo Kobra",
      images: [
        "/mural-images/22/22-1.jpg",
        "/mural-images/22/22-2.jpg"
      ],
      description: "A colorful mural by Brazilian artist Eduardo Kobra, celebrating the spirit and resilience of New York City.",
      location: "Chelsea, Manhattan",
      year: "2018",
      comments: [
        { author: "NYC Lover", text: "Kobra's tribute to the city is both vibrant and heartwarming." }
      ],
      link: "https://www.nychummingbird.com/kobra-murals-in-nyc/"
    },
    {
      id: 23,
      title: "Ziggy Stardust",
      artist: "Eduardo Kobra",
      images: [
        "/mural-images/23/23-1.jpg",
        "/mural-images/23/23-2.jpg"
      ],
      description: "A tribute to David Bowie's iconic alter ego, Ziggy Stardust, showcasing Kobra's signature geometric style.",
      location: "837 Jersey Avenue, Jersey City, NJ",
      year: "2016",
      comments: [
        { author: "Music Fan", text: "A stunning homage to a music legend." }
      ],
      link: "https://www.eduardokobra.com/projeto/31/ziggy-stardust"
    },
    {
      id: 24,
      title: "Audrey Hepburn",
      artist: "Tristan Eaton",
      images: [
        "/mural-images/24/24-1.jpg",
        "/mural-images/24/24-2.jpg"
      ],
      description: "A captivating mural of Audrey Hepburn, blending realism with abstract elements in Eaton's distinctive style.",
      location: "Little Italy, Manhattan",
      year: "2013",
      comments: [
        { author: "Film Buff", text: "Eaton beautifully captures Hepburn's elegance." }
      ],
      link: "https://blog.vandalog.com/2013/09/08/tristan-eaton-paints-audrey-hepburn-in-little-italy/"
    },
    {
      id: 25,
      title: "Blondie",
      artist: "Shepard Fairey",
      images: [
        "/mural-images/25/25-1.jpg",
        "/mural-images/25/25-2.jpg"
      ],
      description: "A mural honoring the iconic band Blondie, featuring bold colors and Fairey's signature style.",
      location: "Bleecker Street and Bowery, Manhattan",
      year: "2017",
      comments: [
        { author: "Punk Rock Enthusiast", text: "A fantastic tribute to a legendary band." }
      ],
      link: "https://madhattersnyc.com/blog/best-street-art-nyc"
    },
    {
      id: 26,
      title: "Bad Brains",
      artist: "Shepard Fairey",
      images: [
        "/mural-images/26/26-1.jpg",
        "/mural-images/26/26-2.jpg"
      ],
      description: "A vibrant mural celebrating the punk band Bad Brains, showcasing Fairey's dynamic artistry.",
      location: "Bleecker Street and Bowery, Manhattan",
      year: "2022",
      comments: [
        { author: "Music Lover", text: "An energetic piece that captures the band's spirit." }
      ],
      link: "https://madhattersnyc.com/blog/best-street-art-nyc"
    },
    {
      id: 27,
      title: "Following in the Footsteps of Alexander Hamilton",
      artist: "Hugo Bastidas",
      images: [
        "/mural-images/27/27-1.jpg",
        "/mural-images/27/27-2.jpg"
      ],
      description: "A mural celebrating the legacy of Alexander Hamilton, created in collaboration with local schools and the community.",
      location: "Alexander Hamilton Playground, Harlem, Manhattan",
      year: "2019",
      comments: [
        { author: "History Buff", text: "A beautiful homage to one of America's founding fathers." }
      ],
      link: "https://www.cityarts.org/following-the-footsteps-of-alexander-hamilton"
    },
    {
      id: 28,
      title: "Alice on the Wall",
      artist: "CITYarts",
      images: [
        "/mural-images/28/28-1.jpg",
        "/mural-images/28/28-2.jpg"
      ],
      description: "A mural inspired by 'Alice in Wonderland,' encouraging students to return to school post-9/11.",
      location: "Washington Market Park, Tribeca, Manhattan",
      year: "2002",
      comments: [
        { author: "Local Resident", text: "A whimsical piece that brings joy to the neighborhood." }
      ],
      link: "https://www.cityarts.org/alice-on-the-wall"
    },
    {
      id: 29,
      title: "Celebrating the Heroes of Our City",
      artist: "Janusz Gilewicz",
      images: [
        "/mural-images/29/29-1.jpg",
        "/mural-images/29/29-2.jpg"
      ],
      description: "A mural honoring the heroes of New York City, located in the Henry M. Jackson Playground.",
      location: "Henry M. Jackson Playground, Lower East Side, Manhattan",
      year: "2001",
      comments: [
        { author: "Community Member", text: "A touching tribute to our city's heroes." }
      ],
      link: "https://www.cityarts.org/heroes-of-our-city-restoration-2"
    },
    {
      id: 30,
      title: "Past Forward",
      artist: "Kristin Holmes-Linder",
      images: [
        "/mural-images/30/30-1.jpg",
        "/mural-images/30/30-2.jpg"
      ],
      description: "A mural fostering intergenerational relationships between senior citizens and local youth.",
      location: "JASA Club 76, Upper West Side, Manhattan",
      year: "2019",
      comments: [
        { author: "Senior Participant", text: "A wonderful project that bridges generations." }
      ],
      link: "https://www.city"
    }
];

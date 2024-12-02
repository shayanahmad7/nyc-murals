export interface Mural {
  id: number
  title: string
  artist: string
  images: string[]
  description: string
  location: string
  year: string
  comments: Array<{ author: string; text: string }>
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    id: 6,
    title: "Shepard Fairey's OBEY GIANT",
    artist: "Shepard Fairey",
    images: [
      "/mural-images/6/6-1.jpg",
      "/mural-images/6/6-2.jpg"
    ],
    description: "A large-scale mural featuring Fairey's iconic OBEY imagery and intricate patterns.",
    location: "161 Bowery, Lower East Side",
    year: "2019",
    comments: [
      { author: "Mike D.", text: "Fairey's work is always so detailed. Love seeing it on such a large scale." }
    ]
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
    ]
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
    ]
  },
  {
    id: 9,
    title: "Tunnel of Dreams",
    artist: "Dasic Fernández",
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
    description: "A vibrant mural depicting a fantastical underwater scene with sea creatures and human figures.",
    location: "Harlem, Manhattan",
    year: "2021",
    comments: [
      { author: "Maya R.", text: "The colors in this mural are absolutely mesmerizing!" }
    ]
  },
  {
    id: 10,
    title: "Frida Kahlo Portrait",
    artist: "Danielle Mastrion",
    images: [
      "/mural-images/10/10-1.jpg",
      "/mural-images/10/10-2.jpg"
    ],
    description: "A striking portrait of the iconic Mexican artist Frida Kahlo, adorned with vibrant flowers.",
    location: "Bushwick, Brooklyn",
    year: "2018",
    comments: [
      { author: "Carlos F.", text: "Danielle captured Frida's essence perfectly. What a tribute!" }
    ]
  },
  {
    id: 11,
    title: "Geometric Owl",
    artist: "HOXXOH",
    images: [
      "/mural-images/11/11-1.jpg",
      "/mural-images/11/11-2.jpg"
    ],
    description: "An intricate, geometric representation of an owl, blending sharp lines with organic shapes.",
    location: "East Village, Manhattan",
    year: "2019",
    comments: [
      { author: "Olivia S.", text: "The detail in this piece is mind-blowing. I see something new every time I look at it." }
    ]
  },
  {
    id: 12,
    title: "Colorful Faces",
    artist: "Yuke Yuke",
    images: [
      "/mural-images/12/12-1.jpg",
      "/mural-images/12/12-2.jpg"
    ],
    description: "A playful mural featuring a series of colorful, abstract faces with various expressions.",
    location: "Bushwick, Brooklyn",
    year: "2021",
    comments: [
      { author: "Ethan L.", text: "This mural always puts a smile on my face. So fun and expressive!" }
    ]
  },
  {
    id: 13,
    title: "Butterfly Wings",
    artist: "Kelsey Montague",
    images: [
      "/mural-images/13/13-1.jpg",
      "/mural-images/13/13-2.jpg"
    ],
    description: "An interactive mural of butterfly wings, designed for people to pose with and become part of the art.",
    location: "Williamsburg, Brooklyn",
    year: "2019",
    comments: [
      { author: "Sophie T.", text: "I love how this mural encourages interaction. It's like a free photo booth!" }
    ]
  },
  {
    id: 14,
    title: "Graffiti Monsters",
    artist: "Sheryo & The Yok",
    images: [
      "/mural-images/14/14-1.jpg",
      "/mural-images/14/14-2.jpg"
    ],
    description: "A whimsical mural featuring cartoon-like monster characters in a graffiti style.",
    location: "Lower East Side, Manhattan",
    year: "2020",
    comments: [
      { author: "Alex M.", text: "These characters are so quirky and fun. They really liven up the neighborhood!" }
    ]
  },
  {
    id: 15,
    title: "Cosmic Sloth",
    artist: "Sonni",
    images: [
      "/mural-images/15/15-1.jpg",
      "/mural-images/15/15-2.jpg"
    ],
    description: "A surreal mural depicting a sloth floating in a cosmic space, surrounded by colorful geometric shapes.",
    location: "East Village, Manhattan",
    year: "2021",
    comments: [
      { author: "Zoe K.", text: "This mural is so dreamy and relaxing. I love the mix of nature and space themes." }
    ]
  },
  {
    id: 16,
    title: "Harlem Renaissance",
    artist: "Louis Delsarte",
    images: [
      "/mural-images/16/16-1.jpg",
      "/mural-images/16/16-2.jpg"
    ],
    description: "A vibrant mural celebrating the cultural, social, and artistic explosion of the Harlem Renaissance.",
    location: "2nd Avenue and 125th Street, Harlem",
    year: "2005",
    comments: [
      { author: "Jazz L.", text: "This mural really captures the spirit of the Harlem Renaissance. A must-see!" }
    ]
  },
  {
    id: 17,
    title: "Pixel Panther",
    artist: "Space Invader",
    images: [
      "/mural-images/17/17-1.jpg",
      "/mural-images/17/17-2.jpg"
    ],
    description: "A pixelated panther mosaic, characteristic of Space Invader's iconic style.",
    location: "Lower East Side, Manhattan",
    year: "2015",
    comments: [
      { author: "Gamer X.", text: "Love how Space Invader brings old-school gaming vibes to the streets!" }
    ]
  },
  {
    id: 18,
    title: "The Gilded Lady",
    artist: "Tristan Eaton",
    images: [
      "/mural-images/18/18-1.jpg",
      "/mural-images/18/18-2.jpg"
    ],
    description: "A massive, intricately detailed portrait of a woman, blending realism with graphic elements.",
    location: "Mulberry Street, Little Italy",
    year: "2019",
    comments: [
      { author: "Art Fan", text: "The level of detail in this mural is mind-blowing. Tristan Eaton is a master!" }
    ]
  },
  {
    id: 19,
    title: "Waterfall of Colors",
    artist: "HOTTEA",
    images: [
      "/mural-images/19/19-1.jpg",
      "/mural-images/19/19-2.jpg"
    ],
    description: "A stunning installation of colorful threads cascading down, creating a waterfall effect.",
    location: "Times Square",
    year: "2018",
    comments: [
      { author: "Color Lover", text: "This installation brings so much joy and vibrancy to Times Square!" }
    ]
  },
  {
    id: 20,
    title: "The Statue of Liberty",
    artist: "Eduardo Kobra",
    images: [
      "/mural-images/20/20-1.jpg",
      "/mural-images/20/20-2.jpg"
    ],
    description: "A colorful, geometric interpretation of the Statue of Liberty.",
    location: "East Village, Manhattan",
    year: "2018",
    comments: [
      { author: "Freedom Fan", text: "Kobra's take on Lady Liberty is both modern and respectful. Love it!" }
    ]
  },
  {
    id: 21,
    title: "Brownstone Brooklyn",
    artist: "Stephen Powers",
    images: [
      "/mural-images/21/21-1.jpg",
      "/mural-images/21/21-2.jpg"
    ],
    description: "A playful, text-based mural celebrating the spirit of Brooklyn.",
    location: "Downtown Brooklyn",
    year: "2019",
    comments: [
      { author: "Brooklyn B.", text: "This mural captures the essence of Brooklyn perfectly!" }
    ]
  },
  {
    id: 22,
    title: "Leap of Faith",
    artist: "JR",
    images: [
      "/mural-images/22/22-1.jpg",
      "/mural-images/22/22-2.jpg"
    ],
    description: "A large-scale black and white photograph of a person mid-leap, pasted on the side of a building.",
    location: "Tribeca, Manhattan",
    year: "2021",
    comments: [
      { author: "Photo Enthusiast", text: "JR's work always makes me stop and think. This one's particularly powerful." }
    ]
  },
  {
    id: 23,
    title: "Faces of Diversity",
    artist: "Tatyana Fazlalizadeh",
    images: [
      "/mural-images/23/23-1.jpg",
      "/mural-images/23/23-2.jpg"
    ],
    description: "A series of portraits celebrating the diversity of New York City.",
    location: "Bushwick, Brooklyn",
    year: "2020",
    comments: [
      { author: "Diversity Advocate", text: "This mural beautifully represents the melting pot that is NYC." }
    ]
  },
  {
    id: 24,
    title: "Graffiti Alley",
    artist: "Various Artists",
    images: [
      "/mural-images/24/24-1.jpg",
      "/mural-images/24/24-2.jpg",
      "/mural-images/24/24-3.jpg"
    ],
    description: "A narrow alley completely covered in vibrant graffiti from various artists.",
    location: "Bushwick, Brooklyn",
    year: "Ongoing",
    comments: [
      { author: "Graffiti Guru", text: "This alley is like a time capsule of NYC graffiti styles. Amazing!" }
    ]
  },
  {
    id: 25,
    title: "The Watcher",
    artist: "ROA",
    images: [
      "/mural-images/25/25-1.jpg",
      "/mural-images/25/25-2.jpg"
    ],
    description: "A large-scale black and white mural of a perched bird, characteristic of ROA's animal-focused style.",
    location: "Lower East Side, Manhattan",
    year: "2016",
    comments: [
      { author: "Nature Lover", text: "ROA's animals always seem so alive. This bird feels like it's watching over the neighborhood." }
    ]
  },
  {
    id: 26,
    title: "Technicolor Dream",
    artist: "Maya Hayuk",
    images: [
      "/mural-images/26/26-1.jpg",
      "/mural-images/26/26-2.jpg"
    ],
    description: "An abstract mural featuring bright, intersecting lines creating a psychedelic pattern.",
    location: "Williamsburg, Brooklyn",
    year: "2019",
    comments: [
      { author: "Color Enthusiast", text: "Maya's work always brightens up the neighborhood. It's like a rainbow explosion!" }
    ]
  },
  {
    id: 27,
    title: "The Lovers",
    artist: "Conor Harrington",
    images: [
      "/mural-images/27/27-1.jpg",
      "/mural-images/27/27-2.jpg"
    ],
    description: "A large-scale mural depicting two figures in an embrace, blending realistic and abstract styles.",
    location: "East Village, Manhattan",
    year: "2018",
    comments: [
      { author: "Romantic Soul", text: "The mix of styles in this piece is so captivating. It's both classic and contemporary." }
    ]
  },
  {
    id: 28,
    title: "Subway Creatures",
    artist: "Yok & Sheryo",
    images: [
      "/mural-images/28/28-1.jpg",
      "/mural-images/28/28-2.jpg"
    ],
    description: "A playful mural featuring whimsical creatures inspired by New York's subway system.",
    location: "Chinatown, Manhattan",
    year: "2020",
    comments: [
      { author: "Commuter C.", text: "These creatures make me smile every time I pass by. They capture the spirit of NYC subway rides perfectly!" }
    ]
  },
  {
    id: 29,
    title: "The Peacemaker",
    artist: "Faith47",
    images: [
      "/mural-images/29/29-1.jpg",
      "/mural-images/29/29-2.jpg"
    ],
    description: "A serene mural depicting a figure releasing doves, symbolizing peace and hope.",
    location: "East Harlem, Manhattan",
    year: "2019",
    comments: [
      { author: "Peace Seeker", text: "This mural brings a sense of calm to the busy city. It's truly inspiring." }
    ]
  },
  {
    id: 30,
    title: "Urban Jungle",
    artist: "Pixel Pancho",
    images: [
      "/mural-images/30/30-1.jpg",
      "/mural-images/30/30-2.jpg"
    ],
    description: "A detailed mural featuring mechanical animals and plants, creating a steampunk-inspired urban jungle.",
    location: "Bushwick, Brooklyn",
    year: "2017",
    comments: [
      { author: "Steampunk Fan", text: "The level of detail in this mural is incredible. I discover something new every time I look at it." }
    ]
  }
]


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
    ],
    link: "https://www.dasic.com/tunnel-of-dreams"
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
  }
];

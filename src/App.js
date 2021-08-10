import React, { Component } from 'react';
import Header from './component/Header';
import Cards from "./component/Cards";
import "../src/app.css"

 class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <h1> <a href="https://github.com/hakankaraahmet" target="_blank">Popular Tour Places</a> </h1>
                <div className="container ">
                <Cards 
                county = "New york"
                info =  "Home to the Statue of Liberty, Empire State Building, Central Park, Times Square, New York is the most populous city in the USA. We have a lot to tell about the city where city lights illuminate the sky."
                img = "https://cdn.pixabay.com/photo/2017/06/07/15/47/new-york-city-2380683_960_720.jpg"
                />
                <Cards 
               county = "Philippines"
               info =   "The island country, the Philippines, is one of the most beautiful countries where blue and green are together. Forget the potion of youth, traveling to the Philippines will rejuvenate you for at least 5 years."
               img = "https://bigseventravel.com/wp-content/uploads/2019/11/john-hernandez-IL-fBBnF-GU-unsplash-1920x1440.jpg"
                />
                <Cards
                county ="Bali"
                info = "Bali, Indonesia's most famous island, has taken its place as the 'last paradise' in mind. Providing 80% of its livelihood with tourism, Bali hosts thousands of tourists every year."
                img="https://ak.picdn.net/shutterstock/videos/26368511/thumb/1.jpg"
                />
                <Cards
                county ="Egypt"
                info = "Being one of the biggest countries of the Middle East, Egypt has been the transition point of many civilizations with its thousands of years of history. The pyramids and miracles that come to mind when talking about Egypt have been the subject of many films. It still remains a mystery."
                img="https://images.memphistours.com/large/34d5b5a3fbaa4b3b5d9487bf924b0145.jpg"
                />
                <Cards  
                    county = "Cappadocia"
                    info =   "Cappadocia… 'Kappa Tuchia', which means 'Land of Beautiful Horses' in the words of Persians. A location in Turkey and in the center of Anatolia's most popular and unique tourist centers of someone who Cappadocia, magnificent nature, valleys of unique beauty, fairy chimneys, rock-hewn settlements, millions every year with open-air museums and underground cities, local and hosts foreign tourists."
                    img = "https://i.hurimg.com/i/hdn/75/0x0/5aa10544d3806c25541af273.jpg"
                    />
                    <Cards  
                    county = "Paris"
                    info =   "Paris has been recognized as one of the most romantic cities in the world. Many famous buildings here have been added to the Unesco World Heritage List. It awaits you with its museums, fashion and historical buildings."
                    img =  "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180221130827/iStock-155381519.jpg"
                    />
                    <Cards  
                    county = "Venice"
                    info =    "Venice, one of Italy's indispensable stops, is known as the 'City of Channels', 'City of Waters' or 'City of Masks' thanks to its world-famous masks. If you visit in February, you can catch the Venice Carnival, where everyone wears a mask and has fun."
                    img =   "https://www.qantas.com/content/travelinsider/en/explore/europe/italy/venice/things-you-need-to-know-before-you-go-to-venice/_jcr_content/parsysTop/hero.img.full.medium.jpg/1535006246068.jpg"
                    />
                    <Cards  
                    county = "India"
                    info =    "If you are not a vacationer but a traveler, we can say that India is the place for you. India, one of the most colorful places in the world, has a crazy variety. The Taj Mahal, the story of which you have heard more or less, is one of its famous buildings."
                    img =  "https://lp-cms-production.imgix.net/2020-11/GettyRF_494057771.jpg"
                    />
                    <Cards  
                    county = "Northern Lights"  
                    info =    "Northern lights, the 'Aurora Borealis', named after the Dawn Goddess Aurora, are the natural glows that emerge in the sky with the interaction of the earth's magnetic field and charged particles from the Sun. This image, which makes most of us feel like in a fairy tale land, deserves to be visited at least once in a lifetime."
                    img =  "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    />
                    <Cards  
                    county = "Fuji Mountain"
                    info =    "The symbol and highest mountain of Japan, Mount Fuji is considered sacred by the Japanese and is called Fuji-San. This mountain, which has an active startovolcano, is depicted in art and photography and is a natural wonder visited by athletes and tourists."
                    img =   "https://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/038/943/original/pixta_43064884_S.jpg?2019&d=750x400"
                    />
                    <Cards  
                    county = "Arashiyama Bamboo Grove"
                    info =    "Bamboo Forest, or Arashiyama Bamboo Grove or Sagano Bamboo Forest, is a natural forest of bamboo in Arashiyama, Kyoto, Japan. The forest consists mostly of Moso Bamboo (Phyllostachys edulis) and consists of several pathways for tourists and visitors. The Ministry of the Environment considers it a part of the soundscape of Japan."
                    img =   "https://wallpaperaccess.com/full/534182.jpg"
                    />
                    <Cards  
                    county = "Antelope Canyon"
                    info =    "Antelope Canyon is a slot canyon in the American Southwest, on Navajo land east of Page, Arizona. It includes two separate, scenic slot canyon sections, referred to as Upper Antelope Canyon (or The Crack), and Lower Antelope Canyon (or The Corkscrew)."
                    img =   "https://images.unsplash.com/photo-1444076784383-69ff7bae1b0a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvd2VyJTIwYW50ZWxvcGUlMjBjYW55b258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                
                
            </div>
            </div>
        )
    }
}

export default App;

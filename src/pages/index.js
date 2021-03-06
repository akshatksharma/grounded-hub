import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import GalleryItem from "../components/GalleryItem"
import { Link } from "gatsby"
import "../styles/global.css"
import "../styles/index.css"
import WashUImage from "../../static/images/WashU.png"
import HomeOffice from "../../static/images/office_home.jpg"
import Scrabble from "../../static/images/scrabble.jpg"
import Plant from "../../static/images/plant_vase.jpg"
import HarryPotter from "../../static/images/harry_potter_book.png"
import Candles from "../../static/images/candles.jpg"
import Pebble from "../../static/images/pebble.png"
import PunchingBag from "../../static/images/punching_bag.png"
import SubwayPass from "../../static/images/transit_card.png"
import Scrapbook from "../../static/images/scrapbook.jpg"

export default function Home() {
  return (
    <>
      <Nav />
      <section className="landing">
        <div className="landing-container">
          <div className="landing-header">
            <h1 className=" title-L landing-h">Grounded</h1>
          </div>
          <div className="landing-text">
            <p className="landing-p">
              The stories of global events are often found in the objects left
              behind: artifacts in museums, keepsakes passed through families,
              etc. Recent events have forced many of us to find new meaning in
              the spaces we inhabit and the objects that surround us.
            </p>
          </div>
          <div className="landing-buttons">
            <button>See gallery</button>
            <button>Learn More</button>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about-container">
          <div className="about-left">
            <img src={WashUImage} class="responsive"></img>
          </div>
          <div className="about-right">
            <div className="about-header">
              <h2 className="title-M">The Pandemic Archive</h2>
            </div>
            <div className="about-paragraph">
              <p>
                “Grounded: The Pandemic Archive” is our effort to assemble a
                living archive of the objects that tell stories of home and
                hardship amid the ongoing battles for health, community, and
                justice. We invite you to explore the archive and discover how
                different objects hold a piece of their story and voice to
                history.
              </p>
            </div>
            {/* <div className="about-button">
              <button>Learn More</button>
            </div> */}
          </div>
        </div>
      </section>
      <section className="explore">
        <div className="explore-header">
          <div>
            <h2 className="title-L">Gallery</h2>
            <p className="gallery-text">
              The Gallery offers an artistic representation of several
              submissions to explore the possibilities of a digital exhibit. See
              The Archive to view all stories in their original form.
            </p>
          </div>
          <Link className="button" to="/gallery">
            View the Archive
          </Link>
        </div>
        <div className="explore-body">
          <p className="gallery-text">
            The Gallery offers an artistic representation of several submissions
            to explore the possibilities of a digital exhibit. See The Archive
            to view all stories in their original form.
          </p>
          <div className="image-names">
            <p>Home office</p>
            <p>Scrabble Set</p>
            <p>Potted Plant</p>
            <p>Harry Potter 7</p>
            <p>Candle Set</p>
            <p>River Pebble</p>
            <p>Punching Bag</p>
            <p>Subway Pass</p>
            <p>Journal Collage</p>
          </div>

          <div className="scroll-container">
            <GalleryItem name={HomeOffice}></GalleryItem>
            <GalleryItem name={Scrabble}></GalleryItem>
            <GalleryItem name={Plant}></GalleryItem>
            <GalleryItem name={HarryPotter}></GalleryItem>
            <GalleryItem name={Candles}></GalleryItem>
            <GalleryItem name={Pebble}></GalleryItem>
            <GalleryItem name={PunchingBag}></GalleryItem>
            <GalleryItem name={SubwayPass}></GalleryItem>
            <GalleryItem name={Scrapbook}></GalleryItem>
            
            {/* <img src={HomeOffice} alt="Home office" height="400"></img>
            <img src={Scrabble} alt="Scrabble Set" height="400"></img>
            <img src={Plant} alt="Potted Plant" height="400"></img>
            <img src={HarryPotter} alt="Harry Potter 7" height="400"></img>
            <img src={Candles} alt="Candle Set" height="400"></img>
            <img src={Pebble} alt="River Pebble" height="400"></img>
            <img src={PunchingBag} alt="Punching Bag" height="400"></img>
            <img src={SubwayPass} alt="Subway Pass" height="400"></img>
          <img src={Scrapbook} alt="Journal Collage" height="400"></img> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

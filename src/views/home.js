import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import FeatureCard from '../components/feature-card'
import AppComponent from '../components/component'
import BlogPostCard2 from '../components/blog-post-card2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Sol Symbiotes</title>
        <meta
          name="description"
          content="10million &amp; 69 years ago out of a solid sludge of carbon, magma &amp; pure awesomeness was born a species on the merger of 2 neutron stars "
        />
        <meta property="og:title" content="Sol Symbiotes" />
        <meta
          property="og:description"
          content="10million &amp; 69 years ago out of a solid sludge of carbon, magma &amp; pure awesomeness was born a species on the merger of 2 neutron stars "
        />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text headingOne">Sol Symbiotes</h1>
            <h1 className="home-text01 headingOne">ERC 721A enabled</h1>
            <span className="home-text02 lead">
              <span>
                10million &amp; 69 years ago out of a solid sludge of carbon,
                magma &amp; pure awesomeness was born a species on the merger of
                2 neutron stars
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                When gas went low, SolSymbiotes switched to their home planet
                Ethereum
              </span>
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <a
                  href="https://youtu.be/dQw4w9WgXcQ"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  <PrimaryPinkButton
                    button="contact us"
                    rootClassName="primary-pink-button-root-class-name"
                    className="home-component01"
                  ></PrimaryPinkButton>
                </a>
              </div>
            </div>
            <div className="home-container04">
              <a
                href="https://twitter.com/SolSymbiote"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <img
                  alt="image"
                  src="/playground_assets/twitter-logo-200h.png"
                  className="home-image"
                />
              </a>
              <a
                href="https://opensea.io/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <img
                  alt="image"
                  src="/playground_assets/opensea-logo-7de9d85d62-seeklogo.com-1500h.png"
                  className="home-image01"
                />
              </a>
              <a
                href="https://discord.com/invite/q454HYuFwj"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link3"
              >
                <img
                  alt="image"
                  src="/playground_assets/discord-logo-600w.png"
                  className="home-image02"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/symbo-1500h.gif"
        className="home-image03"
      />
      <section className="home-features">
        <FeatureCard
          text="Full rights to the NFT holder"
          title="Commercial rights"
          image_src="/playground_assets/cube1.svg"
        ></FeatureCard>
        <FeatureCard image_src="/playground_assets/person1.svg"></FeatureCard>
        <FeatureCard
          text="Early Access 0.049 ETH mints"
          title="0.069ETH"
          image_src="/playground_assets/rocket1.svg"
        ></FeatureCard>
        <FeatureCard
          text="Symbiotes"
          title="4200"
          image_src="/playground_assets/credit%20card1.svg"
        ></FeatureCard>
      </section>
      <section className="home-container05">
        <div className="home-container06">
          <h1 className="home-text06 headingOne">
            <span>A new meaning to NFT mints</span>
          </h1>
          <span className="home-text08">
            <span>First ever NFT candymachine - read on</span>
          </span>
        </div>
        <div className="home-container07">
          <div className="home-container08">
            <img
              alt="image"
              src="/playground_assets/nom%20nom%20laptab%20%5B2%5D-1100w.png"
              className="home-image04"
            />
            <span className="home-text10 small">
              <span className="home-text11">
                Our journey began when I was watching guinness world record of
                biggest blown bubble (over 20&quot;) &amp; an idea popped -
                Arcane
              </span>
            </span>
            <div className="home-container09">
              <img
                alt="image"
                src="/playground_assets/candy-bar-aluminum-packaging-mockup_170704-199%20%5B3%5D-1000w.png"
                className="home-image05"
              />
              <img
                alt="image"
                src="/playground_assets/candy-bar-aluminum-packaging-mockup_170704-199%20%5B2%5D-1000w.png"
                className="home-image06"
              />
              <img
                alt="image"
                src="/playground_assets/free_men_underwear_mockup_1%20%5B3%5D-1000w.png"
                className="home-image07"
              />
              <img
                alt="image"
                src="/playground_assets/hoodie_mockup%20%5B3%5D-1000w.png"
                className="home-image08"
              />
              <img
                alt="image"
                src="/playground_assets/candy-bar-aluminum-packaging-mockup_170704-199%20%5B1%5D-1000w.png"
                className="home-image09"
              />
              <img
                alt="image"
                src="/playground_assets/superbowl%2069-1000w.png"
                className="home-image10"
              />
            </div>
          </div>
          <div className="home-container10">
            <img
              alt="image"
              src="/playground_assets/flightmap-1100w.png"
              className="home-image11"
            />
            <div className="home-container11">
              <h3 className="headingTwo">
                <span className="home-text13">FlightMap</span>
              </h3>
              <p>
                <span className="home-text15"></span>
                <span className="home-text16">🍫Chocolate Brand</span>
                <br></br>
                <span>
                  Lets start with the biggest &amp; brightest part of the
                  roadmap shall we?
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  We maybe magma made but we still love us some farmfresh
                  factory made chocolate.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>We maybe loco, but we love the choco</span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  Who&apos;s with us? I mean with taglines like these, it&apos;s
                  a surefire hit
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span></span>
                <br></br>
                <span className="home-text30">
                  🍬Well expand the folio shall we?
                </span>
                <br></br>
                <span>
                  It&apos;s full blown sugar rush with this nom nom eater.
                  Travelling the multitude of galaxies takes time , a can do
                  spirit &amp; a candy machine with more than 1 flavor of sugary
                  delights.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span></span>
                <br></br>
                <span>🔴</span>
                <span className="home-text38">
                  Double the fun with bubblegum
                </span>
                <br></br>
                <span>
                  I mean is it really an NFT project if we&apos;re not making a
                  bubblegum out of it?
                </span>
                <br></br>
                <span></span>
                <br></br>
                <br></br>
                <span></span>
                <span className="home-text45">🎽</span>
                <span className="home-text46">Merch</span>
                <br></br>
                <span>Dopest collection of hoodies</span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  Just one of the many to come
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span></span>
                <br></br>
                <span></span>
                <br></br>
                <span></span>
                <br></br>
                <span className="home-text56">🩲🩱Intimate Wear</span>
                <br></br>
                <span>Do you want the tongue at front &amp; center?</span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  We&apos;ve also something in the work for the ladies
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>​</span>
                <br></br>
                <span>🏈</span>
                <span>Sponsoring SuperBowl 69</span>
                <br></br>
                <span>​</span>
                <span></span>
                <span>
                  Metaverse is cool &amp; all but the real flex is to be the
                  sponsor of the biggest sporting spectactle
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  We got bigger ambitions then just having fun in VR world
                </span>
                <br></br>
                <span></span>
                <span></span>
                <br></br>
                <span></span>
                <span></span>
                <span></span>
                <br></br>
                <span></span>
                <span>🚀</span>
                <span>Flightmap 2.0</span>
                <br></br>
                <span>
                  Beyond &amp; before this Flightmap 2.0 will include a variety
                  of other innovations &amp; fun stuff we&apos;ll try &amp; test
                  out including but not limited to 3D avatars, decentraland
                  acquisition &amp; more
                </span>
                <span></span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonials">
        <AppComponent
          image_src="/playground_assets/fpof3kqvkb0clu7-200h.png"
          image_src1="/playground_assets/ffoumcvxoa4gm-j-200h.jpg"
          image_src2="/playground_assets/unnamed%20-%202022-03-25t141527.964-200h.png"
          image_src3="/playground_assets/download%20%5B16%5D-200h.png"
          image_src5="/playground_assets/download%20%5B36%5D-200h.png"
          image_src6="/playground_assets/ffyxwmewuaqorej-200h.jpg"
          image_src7="/playground_assets/fl0zo9sxwaawzag-200h.jpg"
        ></AppComponent>
        <div className="home-blog">
          <div className="home-banner">
            <h1 className="home-text83">New Project, Who Dis?</h1>
          </div>
          <div className="home-container12">
            <a
              href="https://discord.com/invite/q454HYuFwj"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link4"
            >
              <BlogPostCard2
                profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName3"
                className="home-component07"
              ></BlogPostCard2>
            </a>
          </div>
          <div className="home-container13">
            <a
              href="https://discord.com/invite/q454HYuFwj"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link5"
            >
              <BlogPostCard2
                title="QuackMaster69"
                image_src="/playground_assets/8e838332-5c0c-49f1-9763-8e90474189f2-1500w.jpg"
                description="The marketing maestro. or at least that's how he refers to himself."
                profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName"
                className="home-component08"
              ></BlogPostCard2>
            </a>
          </div>
          <a
            href="https://discord.com/invite/q454HYuFwj"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link6"
          >
            <BlogPostCard2
              title="SirSwimsALot"
              image_src="/playground_assets/shkary%20sharks%208437-1500w.png"
              description="The coder &amp; blockchain brains of the site, backend &amp; frontend. 🇮🇳"
              profile_src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName2"
              className="home-component09"
            ></BlogPostCard2>
          </a>
        </div>
        <div className="home-container14">
          <div className="home-container15">
            <div className="home-blog-post-card">
              <div className="home-container16">
                <img
                  alt="image"
                  src="/playground_assets/unnamed%20-%202022-04-18t170819.106-1500w.png"
                  image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                  className="home-image12"
                />
                <div className="home-container17">
                  <h1 className="home-text84">You</h1>
                  <span className="home-text85">
                    Yes YOU, what&apos;s a project without the people who
                    entrust in it their time, efforts &amp; ETH. Every single
                    statement on discord, every single recommendation on twitter
                    or DMs, every single joke you make is what makes this
                    project worth a damn in the space time continuum
                    -----------------------------------------------------------------------------------------------------------------------------------------------------------
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image"
        />
      </section>
    </div>
  )
}

export default Home

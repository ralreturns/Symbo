import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <div className="component-container01">
        <div className="component-container02">
          <h2 className="component-text headingOne">{props.heading}</h2>
          <p className="component-text1 lead">
            <span className="component-text2">
              The NFT will serve as a gateaway for all collabs, giveaways &amp;
              the usual raffles &amp; stuff
            </span>
          </p>
          <p className="component-text3 body">
            <span className="component-text4">
              But more than that, those who ape into the project will receieve
              the $UGA (sugary ultimate glucose appetite) coin for staking after
              we complete the setup in a quarter. It will serve as a platform
              where you can use the $uga coin to mint Jars that&apos;ll be
              delivered to your doorstep - eatonomics will be soon plotted.
              Flavors will be a function favoring early symbiotes &amp;
              rarities.
            </span>
          </p>
          <p className="component-text5">{props.text}</p>
          <p className="component-text6 small">{props.text1}</p>
        </div>
      </div>
      <div className="component-logos">
        <div className="component-container03">
          <div className="component-container04">
            <div className="component-container05">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="component-image"
              />
            </div>
            <div className="component-container06">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                className="component-image1"
              />
            </div>
            <div className="component-container07">
              <img
                alt={props.image_alt2}
                src={props.image_src2}
                className="component-image2"
              />
            </div>
          </div>
          <div className="component-container08">
            <div className="component-container09">
              <img
                alt={props.image_alt3}
                src={props.image_src3}
                className="component-image3"
              />
            </div>
            <div className="component-container10">
              <img
                alt={props.image_alt4}
                src={props.image_src4}
                className="component-image4"
              />
            </div>
            <div className="component-container11">
              <img
                alt={props.image_alt5}
                src={props.image_src5}
                className="component-image5"
              />
            </div>
          </div>
          <div className="component-container12">
            <div className="component-container13">
              <img
                alt={props.image_alt6}
                src={props.image_src6}
                className="component-image6"
              />
            </div>
            <div className="component-container14">
              <img
                alt={props.image_alt7}
                src={props.image_src7}
                className="component-image7"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  image_src: '/playground_assets/logo-asana.svg',
  image_alt6: 'image',
  text: 'Also',
  image_src3: '/playground_assets/logo-shopify.svg',
  image_alt5: 'image',
  image_src6: '/playground_assets/logo-attlasian.svg',
  image_src7: '/playground_assets/logo-weave.svg',
  image_alt3: 'image',
  image_src5: '/playground_assets/logo-invision.svg',
  image_alt: 'image',
  image_alt1: 'image',
  image_src1: '/playground_assets/logo-slack.svg',
  image_alt4: 'image',
  heading: 'One more thing',
  image_src4:
    '/playground_assets/candy-bar-aluminum-packaging-mockup_170704-199%20%5B1%5D-200h.png',
  image_src2: '/playground_assets/logo-google-drive.svg',
  image_alt7: 'image',
  image_alt2: 'image',
  text1:
    "We're opening an investment alpha channel with 20% of the funds - daily research on upcoming projects & big ticket item raffles events will be part of this channel",
}

AppComponent.propTypes = {
  image_src: PropTypes.string,
  image_alt6: PropTypes.string,
  text: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt5: PropTypes.string,
  image_src6: PropTypes.string,
  image_src7: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src5: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt4: PropTypes.string,
  heading: PropTypes.string,
  image_src4: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt7: PropTypes.string,
  image_alt2: PropTypes.string,
  text1: PropTypes.string,
}

export default AppComponent

import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card21.css'

const BlogPostCard21 = (props) => {
  return (
    <div className={`blog-post-card21-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        image_src="/playground_assets/unnamed - 2022-04-18t170819.106.png"
        className="blog-post-card21-image"
      />
      <div className="blog-post-card21-container">
        <h1 className="blog-post-card21-text">{props.title}</h1>
        <span className="blog-post-card21-text1">{props.description}</span>
      </div>
    </div>
  )
}

BlogPostCard21.defaultProps = {
  image_alt: 'image',
  title: 'You',
  description:
    "Yes YOU, what's a project without the people who entrust in it their time, efforts & ETH. Every single statement on discord, every single recommendation on twitter or DMs, every single joke you make is what makes this project worth a damn in the space time continuum -----------------------------------------------------------------------------------------------------------------------------------------------------------",
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1500',
}

BlogPostCard21.propTypes = {
  image_alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default BlogPostCard21

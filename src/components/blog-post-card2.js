import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card2.css'

const BlogPostCard2 = (props) => {
  return (
    <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="blog-post-card2-image"
      />
      <div className="blog-post-card2-container">
        <h1 className="blog-post-card2-text">{props.title}</h1>
        <span className="blog-post-card2-text1">{props.description}</span>
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  title: 'Arcane',
  description:
    "The art & the inspiration behind the project. Big fan of anything scifi - cosmos, marvel, r/space, discovery science & a major blockchain maxi. Eats too much pizzas but that's okay cause calories are just a number & he can burn it in the football field. Muller > Ronaldo > Messi, don't @ me.",
  image_alt: 'image',
  rootClassName: '',
  image_src: '/playground_assets/party%20biote-1500w.png',
}

BlogPostCard2.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default BlogPostCard2

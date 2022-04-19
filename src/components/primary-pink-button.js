import React from 'react'

import PropTypes from 'prop-types'

import './primary-pink-button.css'

const PrimaryPinkButton = (props) => {
  return (
    <div className={`primary-pink-button-container ${props.rootClassName} `}>
      <button className="primary-pink-button-button button buttonSmall">
        <span className="">
          <span className="">Mint</span>
        </span>
      </button>
    </div>
  )
}

PrimaryPinkButton.defaultProps = {
  rootClassName: '',
  text: 'MINT',
  button1: 'Button',
  button: 'Button',
}

PrimaryPinkButton.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  button1: PropTypes.string,
  button: PropTypes.string,
}

export default PrimaryPinkButton

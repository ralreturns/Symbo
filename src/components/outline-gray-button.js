import React from 'react'

import PropTypes from 'prop-types'

import './outline-gray-button.css'

const OutlineGrayButton = (props) => {
  return (
    <div className="outline-gray-button-container">
      <button
        disabled
        className="outline-gray-button-button button buttonSmall"
      >
        {props.Music}
      </button>
    </div>
  )
}

OutlineGrayButton.defaultProps = {
  Music: 'Music',
}

OutlineGrayButton.propTypes = {
  Music: PropTypes.string,
}

export default OutlineGrayButton

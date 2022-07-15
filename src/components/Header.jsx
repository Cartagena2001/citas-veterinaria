import React from 'react'
import PropTypes from 'prop-types'

const Header = ({titulo}) => {
  return (
    <div>
        <h1 className='text-white font-semibold text-3xl text-center p-6'>{titulo}</h1>
    </div>
  )
}
Header.propTypes = {
  titulo: PropTypes.string.isRequired
}

export default Header
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Entry({entry}) {
  return (
    <div className={`shadow-md rounded p-4 bg-pink-100 text-gray-900`}>
      <h2 className="text-2xl mb-2">{entry.API}</h2>
      <p className="text-xl mb-2">{entry.Description}</p>
      <p>
        Category:{' '}
        <Link className="text-blue-700" to={`/category/${entry.Category}`}>
          {entry.Category}
        </Link>
      </p>
      <p>Auth: {entry.Auth || 'none'}</p>
      <p>HTTPS: {entry.HTTPS.toString()}</p>
      <p className="mb-2">Cors: {entry.Cors}</p>
    </div>
  )
}

Entry.defaultProps = {
  Auth: undefined,
}

Entry.propTypes = {
  entry: PropTypes.shape({
    API: PropTypes.string.isRequired,
    Auth: PropTypes.string,
    Category: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    HTTPS: PropTypes.bool,
    Cors: PropTypes.string.isRequired,
    Link: PropTypes.string.isRequired,
  }),
}

export default Entry

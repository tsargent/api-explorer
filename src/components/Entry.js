import React from 'react'
import PropTypes from 'prop-types'

function Entry({entry}) {
  return (
    <div className="shadow-lg rounded p-4 bg-white">
      <h2>{entry.API}</h2>
      <p>{entry.Description}</p>
      <p>Category: {entry.Category}</p>
      <p>Auth: {entry.Auth || 'none'}</p>
      <p>HTTPS: {entry.HTTPS.toString()}</p>
      <p>Cors: {entry.Cors}</p>
      <p>
        <a className="text-blue-700" href={entry.Link}>
          {entry.Link}
        </a>
      </p>
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

import React, { PropTypes } from 'react'
import styles from './profile.css'

const propTypes = {
  picture : PropTypes.string.isRequired,
  displayName : PropTypes.string.isRequired,
  username : PropTypes.string.isRequired,
  emailAddres : PropTypes.string.isRequired,
  location : PropTypes.string.isRequired
}

function Profile({ picture, displayName, username, emailAddres, location }) {
  return (
    <div className={styles.root}>
      <img className={styles.avatar} src={picture} alt=""/>
      <span className={styles.name}>{displayName}</span>
      <ul className={styles.data}>
        <li>
          <span className='fa fa-user'></span> {username}
        </li>
        <li>
          <span className='fa fa-envelope'></span> {emailAddres}
        </li>
        <li>
          <span className='fa fa-map-marker'></span> {location}
        </li>
      </ul>
    </div>
  )
}

Profile.propTypes = propTypes

export default Profile

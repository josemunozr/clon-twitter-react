import React, { PropTypes } from 'react'
import styles from './input-text.css'

const propTypes = {
  userNameToReply : PropTypes.string.isRequired,
  onSendText : PropTypes.func.isRequired,
  onCloseText : PropTypes.func.isRequired,
}

function InputText({ onSendText, userNameToReply, onCloseText }) {
  return (
    <div>
      <form className={styles.form} onSubmit={onSendText}>
        <textarea className={styles.text} name='text' defaultValue={(userNameToReply) ? `@${userNameToReply} ` : ''} />
        <div className={styles.buttons}>
          <button className={styles.close} onClick={onCloseText}>Cerrar</button>
          <button className={styles.send} type="submit" >Enviar</button>
        </div>
      </form>
    </div>
  )
}

InputText.propTypes = propTypes

export default InputText

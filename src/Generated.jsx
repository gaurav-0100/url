import React from 'react'
import "./Generated.css"
const Generated = ({shortLink, setShortLink, setGen}) => {
    const newlinkgen=()=>{
        setGen(false);
    }
  return (
    <div className='generate-container'>
      <input className="shortLink" type="text" value={shortLink}  readOnly/>
      <button className="generate" type='button' onClick={newlinkgen} >Generate new Link</button>
    </div>
  )
}

export default Generated

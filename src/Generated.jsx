import React from 'react'

const Generated = ({shortLink, setShortLink, setGen}) => {
    const newlinkgen=()=>{
        setGen(false);
    }
  return (
    <div>
      <input type="text" value={shortLink}  readOnly/>
      <button type='button' onClick={newlinkgen} >Generate new Link</button>
    </div>
  )
}

export default Generated

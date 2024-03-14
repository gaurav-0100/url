import React from 'react'
import "./UrlCard.css"
const UrlCard = ({longLink, shortLink}) => {
  return (
    <div className='url-card'>
        {/* console.log(longLink); */}
      <div className="longLinkContainer">{longLink}</div>
      <div className="shortLinkContainer">{shortLink}</div>
    </div>
  )
}

export default UrlCard

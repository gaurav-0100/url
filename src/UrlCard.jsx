import React from 'react'

const UrlCard = ({longLink, shortLink}) => {
  return (
    <div>
        {/* console.log(longLink); */}
      <div className="longLinkContainer">{longLink}</div>
      <div className="shortLinkContainer">{shortLink}</div>
    </div>
  )
}

export default UrlCard

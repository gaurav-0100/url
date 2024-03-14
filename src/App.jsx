import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Generated from './Generated';
import GenUrl from './GenUrl';
import UrlCard from './UrlCard';



function App() {
  
  const [longLink, setLonglink]= useState("");
  const [gen, setGen] = useState(false);
  const [shortLink, setShortLink]= useState("");
  const [allgenlinks, setAllgenlinks]= useState([]);
  return (
    <div className='container'>
      <div className="url-tag">
        Url Shortner
      </div>
      {gen?<Generated shortLink={shortLink} setShortLink={setShortLink}  setGen={setGen}/>: 
      <GenUrl longLink={longLink} shortLink={shortLink} setLonglink={setLonglink}setGen={setGen} setShortLink={setShortLink} setAllgenlinks={setAllgenlinks}/>}
      <div className='generated-urls'>
        {allgenlinks.map((item, index)=><UrlCard key={index}longLink={item.longLink} shortLink={item.shortLink}/>)} 
      </div>
      
    </div>
  )
}

export default App

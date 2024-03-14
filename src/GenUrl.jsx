import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import './GenUrl.css'

const GenUrl = ({setGen, shortLink,setShortLink,longLink,setLonglink, setAllgenlinks}) => {

const generate=async()=>{
    try {
        const serverApi="";
        // const data= await axios.post(serverApi, longLink);
        const data={
            data:"google.com"
        }
        setShortLink(data.data);
        setAllgenlinks((prev)=>{
            const cur={longLink, shortLink:data.data};
            return [...prev, cur];
        })
        setLonglink("");
        setGen(true);
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className='gen'>
        <input className="link-input" type="text" value={longLink} placeholder='Enter Link' onChange={(e)=>{setLonglink(e.target.value)}} required/>
        <button className="submit" onClick={generate}>Generate Link</button>
    </div>
  )
}

export default GenUrl

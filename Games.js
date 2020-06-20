import React from 'react';
import YoutubePlayer from '../YoutubePlayer/YoutubePlayer'

import './Games.css';

const videos = 
  [
    "xzCEdSKMkdU",
    "ssrNcwxALS4",
    "Sr-DKyAVU34" 
  ]

const Games =() =>{
   

  return(
     <div>
      <div className='cattitle'>Games</div>
      <div className='gamegrid'>
        <div className='gamegridvideos'>
        <YoutubePlayer className='ytvid' videoId ='xzCEdSKMkdU' />
        </div>

        <div className='gamegridvideos'>
        <YoutubePlayer className='ytvid' videoId ='ssrNcwxALS4' />
        </div>

        <div className='gamegridvideos'>
        <YoutubePlayer className='ytvid' videoId ='Sr-DKyAVU34' />
        </div>
    </div>
    </div>
   );
  
  }

export default Games;

{/*
        <div className='gamegrid'>
        <div className='gamegridvideos'>
        <YoutubePlayer className='ytvid' videoId ={videos[0]} />
        </div>

        <div className='gamegridvideos'>
        <YoutubePlayer className='ytvid' videoId ={videos[1]} />
        </div>

        <div className='gamegridvideos'>
        <YoutubePlayer className='ytvid' videoId ={videos[2]} />
        </div>
      */}
       
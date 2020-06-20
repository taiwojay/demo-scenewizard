import React from 'react';
import { Link } from 'react-router-dom';

import Cover from '../Cover/Cover';
import './Grid.css'





const Grid =() => {
      return(
        <div>
         <Cover />
            <div className='containerg pointer'>
                                    
                  <div className='boxg series'> 
                  <Link to={'/series'} className='gridtextg'> Series </Link> 
                  </div>
            
                  <div className='boxg animations'>
                  <Link to={'/animations' } className='gridtextg'>Animations  </Link>
                  </div>                     
                  
                  <div className='boxg movies'>
                  <Link to={'/movies'} className='gridtextg'>Movies</Link>
                  </div>
                  
                  <div className='boxg marveldc'>
                  <Link to={'/marveldc'} className='gridtextg' > Marvel/DC </Link>
                  </div>


                  <div className='boxg games'>
                  <Link to={'/games'} className='gridtextg'>Games </Link>
                  </div>     
            
      
            
           </div>
      </div>
      );
}

export default Grid;
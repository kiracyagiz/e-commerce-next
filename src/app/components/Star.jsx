import React from 'react'
import { AiFillStar ,AiOutlineStar} from "react-icons/ai";

const Star = ({star}) => {
    const calc = 5 - star

    const stars = Array.from({ length: calc }).map((_, index) => (

        <AiOutlineStar key={index} color='orange' />
      ));

     const fillStar = Array.from({length: star}).map((_,index)=> (
        <AiFillStar key={index} color='orange'/>
     )) 
  return (
    <div className='flex  justify-center items-center'>
        {fillStar}
        {stars}
    </div>
  )
}

export default Star
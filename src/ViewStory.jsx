import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'

function ViewStory() {

  const{id} = useParams();

  const[story,setStory] =useState(null);

  useEffect(() =>{
 
     fetch(`http://localhost:3000/story/${id}`)
   .then (data => data.json())
   .then (data => setStory(data))
   .catch(err => console.log(err))

  },[])

  return (
    <div>
        { story? <div>
            <img src={story.image} alt="story" />
        </div> : 
        
        
        <div>loading</div>}
        </div>
  )
}

export default ViewStory
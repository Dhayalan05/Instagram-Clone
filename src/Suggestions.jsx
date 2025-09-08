import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Suggestions() {
  const [profile, setprofile] = useState(null);
  const [Suggestions, setSuggestions] = useState([]);


  useEffect(() => {

    fetch('http://localhost:3004/profile')
      .then(data => data.json())
      .then(data => setprofile(data))
      .catch(err => console.log(err))



    fetch('http://localhost:3004/suggestions')
      .then(data => data.json())
      .then(data => setSuggestions(data))
      .catch(err => console.log(err))

  }, [])

  const handleFollow =async (id,username) => {
    axios.post('http://localhost:3004/followers',{"id":id,"username":username})
    .then(alert ('followed'))
    .catch(err => console.log(err)) 
  }

  return (
    <div>
      <div className='suggestions w-75 m-4'>
        {profile ?
          <div className='d-flex'>
            <img className='dp rounded-circle' src={profile.profile_pic} alt="profile" />
            <h5>{profile.username}</h5>
            <small className='ms-auto text-primary'>Switch</small>
          </div>
          : <p>Loading</p>}
        <div className='d-flex mt-3'>
          <p>Suggested for you</p>
          <b className='ms-auto'>See All</b>
        </div>



        {Suggestions.length > 0 ? (

          <div>
            {Suggestions.map((suggestion) => (

              <div  key={suggestion.id}>
                <div className='d-flex'>
                  <img className='dp rounded-circle' src={suggestion.profile_pic} alt="profile" />
                  <h5>{suggestion.username}</h5>
                  <a className='text-primary ms-auto' onClick={()=> {handleFollow(suggestion.id,suggestion.username)}}>Follow</a>
                </div>
             
              </div>

            ))}
          </div>
        ) : (

          <div>
            Loading
          </div>
        )}

      </div>

    </div>
  )
}

export default Suggestions
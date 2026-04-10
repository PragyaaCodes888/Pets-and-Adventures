import React from 'react'
import { useNavigate} from 'react-router-dom'
import card from './Card'

const Home = () => {
  
        let navigate = useNavigate();
        const btnClicked = () => {
          navigate('/browsingpets');
        }
  return (
    <div>
        <div>
      <h1>Find Your New Best Friends.</h1>
      <p>Discover the perfect pet for your family</p>
    
      
      <button onClick={btnClicked}>Browse Pets</button>  
      
    
     
       
    </div>
    <div>
       <card 
      img  = "https://img.freepik.com/premium-vector/cute-vector-shiba-dog-head-doggy_1010539-742.jpg  "
      title = 'Healthy & Happy Pets'
      description = 'Our pets are well cared for'/>
      <card 
      img  = "https://static.vecteezy.com/system/resources/previews/000/377/806/original/home-vector-icon.jpg "
      title = 'Trusted Breeders'
      description = 'Ethically raised & loved'
      
      />
      <card 
      img = "https://vectorified.com/images/google-maps-marker-icon-38.png "
      title = 'Easy Adoption process'
      description = 'Simple & quick to adopt'
      />
      </div>
    
    </div>
  )
}

export default Home
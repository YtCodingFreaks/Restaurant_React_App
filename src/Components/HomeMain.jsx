import React from 'react'
import {Container} from '../Styles/HomeMain'
function HomeMain() {
  return (
    <Container>
        <main>
            <span>Treat Yourself With a Meal</span>
            <hr/>
        <div className='Moving_Across'></div>
        <h1>Welcome To SavorBite <br/> <h1 id="word">Restuarant</h1></h1>
        <div className='Buttons'>
            <button id='View'>View More</button>
            <button id='Food'>Food Menu</button>
        </div>
        </main>
    </Container>
  )
}

export default HomeMain
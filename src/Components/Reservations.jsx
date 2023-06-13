import React, { Fragment } from 'react'
import { Background, Fader, FormSubmitter} from '../Styles/Reservation'
function Reservations() {
  return (
    <Fragment>
        <Background>
            <Fader>
                <span>Reservation</span>
                <div className='ReservationInputs'>
                    <form>
                        <div className='Input'>
                            <label>Number of guess</label>
                            <input type="number" placeholder='How many people?' />
                        </div>
                         <div className='Input'>
                            <label>Select Date</label>
                            <input type="date" id='date' name='date'/>
                        </div>
                         <div className='Input'>
                            <label>Meeting Time</label>
                            <input type="time" id='meetin-time' name='meeting-time' />
                        </div>
                         <div className='Input'>
                            <label>Your Name</label>
                            <input type="text" placeholder='Enter Your name' />
                        </div>
                         <div className='Input'>
                            <label>Email Address</label>
                            <input type="email" placeholder='Enter Email'/>
                        </div>
                         <div className='Input'>
                            <label>Phone Number</label>
                            <input type="tel" placeholder='Enter your phone number' />
                        </div>
                        <FormSubmitter>
                         <div className='Input'>
                            <textarea placeholder='Your Message'></textarea>
                        </div>
                      <button type='submit'>Book Reservation</button>
                      </FormSubmitter>
                    </form>
                </div>
            </Fader>
        </Background>
    </Fragment>
  )
}

export default Reservations
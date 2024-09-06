import React from 'react'
import '../App.css';

const Stage2 = (props) =>{
    return (
        <div className='stage-container'>

            <div className="stage-row">
                <div className='entry'>
                    <label>Departure Date:</label>
                    <input type='date' required/>
                </div>
                <div className='entry'>
                    <label>Return Date:</label>
                    <input type='date' required/>
                </div>
            </div>

            <div className="stage-row">
                <div className='entry'>
                    <label>Accommodation Preference:</label>
                    <select required>
                        <option value="" disabled selected>select an option</option>
                        <option value="spacehotel">Space Hotel</option>
                        <option value="martianbase">Martian Base</option>
                    </select>
                </div>
                <div className='entry'>
                    <label>Special Requests or Preferences:</label>
                    <input type='text' required />
                </div>
            </div>
        </div>
    )
}

export default Stage2;
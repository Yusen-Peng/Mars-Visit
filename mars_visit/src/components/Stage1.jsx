import React from 'react'
import '../App.css';

const Stage1 = (props) =>{
    return (
        <div className='stage-container'>
            <div className='entry'>
                <label>Full Name:</label>
                <input type='text' required/>
            </div>
            <div className='entry'>
                <label>Date of Birth:</label>
                <input type='date' required/>
            </div>    
            <div className='entry'>
                <label>Nationality:</label>
                <input type='text' required/>
            </div>
            <div className='entry'>
                <label>email:</label>
                <input type='email' required/>
            </div>
            <div className='entry'>
                <label>phone:</label>
                <input type='phone' required/>
            </div>
        </div>
    )
}

export default Stage1;
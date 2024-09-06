import React from 'react'
import '../App.css';

const Stage3 = (props) =>{
    return (
        <div className='stage-container'>

            <div className="stage-row">
                <div className='entry'>
                    <label>Health Declaration:</label>
                    <select required>
                        <option value="" disabled selected>select an option</option>
                        <option value="yes">YES</option>
                        <option value="no">NO</option>
                    </select>
                </div>
                <div className='entry'>
                    <label>Emergency Contact Information</label>
                    <input type='text' required/>
                </div>
            </div>

            <div className="stage-row">
                <div className='entry'>
                    <label>Any Medical Conditions (if applicable):</label>
                    <input type='text' required/>
                </div>
                <div className='entry'>
                    <label>Special Requests or Preferences:</label>
                    <input type='text' required/>
                </div>
            </div>
        </div>
    )
}

export default Stage3;
import React from 'react'
import '../App.css';

const StageTitle = (props) =>{
    return (
        <div className='stagetitle'>
            Stage {props.stageNumber}: {props.stageContent}
        </div>
    )
}

export default StageTitle;
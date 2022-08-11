import React from 'react';
import './index.css'
export function Dashboard(props){
    const showAlert = () => {
        alert("Button Clicked")
    }
    return(
        <div className='container' onClick={showAlert}>
            <div style={{borderRadius:10 ,backgroundColor:'red', width:100,alignItems:'center',height:50,justifyContent:'center'}}>
        
                <p style= {{alignContent:'center',color:'white'}}>{props.title}</p>
            </div>
        </div>
    )
}
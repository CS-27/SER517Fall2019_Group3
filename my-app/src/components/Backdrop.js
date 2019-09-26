import React from 'react';
// import logo from '../../public/images/bg1.jpg';
import Toolbar from './Toolbar';
import './Backdrop.css';



function Backdrop() {

  var textStyle = {
           position: 'absolute',
           top: '50%',
           left: '50%',
           color: 'black',
           backgroundColor: 'yellow'
         };

  return (
           <div className = 'bg-image' style={{width: 'auto'}}>
            </div>
        );

}

export default Backdrop;

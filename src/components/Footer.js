import React from 'react'
import {HiSun, HiMoon} from 'react-icons/hi';

const Footer = (props) => { 
    const symbolSwitch = (data) => {
        if(data === 'light') {
          return <div onClick={props.toggle}>
            <HiMoon className='symbol'></HiMoon> 
             Dark Mode
          </div>
        }else {
          return <div onClick={props.toggle}>
            <HiSun className='symbol'></HiSun> 
            Light Mode
          </div>
        }
      }
  return (
    <div>
    <div className='footer'>
        <div className='footer-margin'>
            <h4>SUPPORT</h4>
            <ul className='footer-list'>
                <li>HELP</li>
                <li>CONTACT US</li>
                <li>API STATUS</li>
                <li>DOCUMENTATION</li>
            </ul>
        </div>
        <div>
        <h4>INFO</h4>
            <ul className='footer-list'>
            <li>ABOUT US</li>
                <li>CAREERS</li>
                <li>INVEST</li>
                <li>LEGAL</li>
            </ul>
        </div>
        <div className='footer-right'>
            {symbolSwitch(props.name)}
        </div>
    </div>
    
</div>
  )
}

export default Footer
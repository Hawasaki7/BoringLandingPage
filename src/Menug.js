import React from 'react'
import { FontAwesomeIcon } from 'react-fontawesome'

export default function Menua(){
    return(
        <div className='nav'>
            <div className='nav-wrapper'>
                <ul className='nav-list'>
                    
                    <li>Shop</li>
                    <li>Work</li>
                    <li>
                        apple{/* <FontAwesomeIcon icon="apple" /> */}
                    </li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>

            </div>
            
        </div>
    )
}
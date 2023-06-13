import React, { useState } from 'react'
import './styles.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'

import Home from '../Home/Home'


const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const MENU = [
        {
            title: 'Home',
            link: '#'
        },
        {
            title: 'Product',
            link: '#'
        },
        {
            title: 'Favorite',
            link: '#'
        },
        {
            title: 'Cart',
            link: '#'
        },
        {
            title: 'Contant',
            link: '#'
        }


    ]

    const handleOnClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <>
        <nav>
            <div className='logo'>
              <img src="zaralogo.png" style={{width:"100px",height:"50px"}}/> 
            </div>

            <ul className='desktop-menu'>
                {
                    MENU.map((menuItem) => {
                        return <li><a href={menuItem.link}>{menuItem.title}</a></li>
                    })
                }
            </ul>


            {isMobileMenuOpen ? <FontAwesomeIcon className='mobile-menu-button' icon={faXmark} onClick={handleOnClick} />
         
            : <FontAwesomeIcon className='mobile-menu-button'  icon={faBars} onClick={handleOnClick} />}
            {
                isMobileMenuOpen ? 
                
             
            
                <ul className='mobile-menu'>
                {
                    MENU.map((menuItem) => {
                        return <li><a href={menuItem.link}>{menuItem.title}</a></li>
                    })
                }
                </ul>
     
                : ''
            }
        </nav>
{isMobileMenuOpen ? '':<Home/> }

        </>
    )
}

export default Navbar
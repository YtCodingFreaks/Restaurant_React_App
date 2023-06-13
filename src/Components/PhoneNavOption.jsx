import React, { Fragment, useState } from 'react'
import {ContainerPhone} from '../Styles/PhoneStyled'
import {AiOutlineClose} from 'react-icons/ai'
import {RiArrowDropDownLine, RiArrowUpSLine} from 'react-icons/ri'
function PhoneNavOption({setMobileView}) {
    const [options, setOptions] = useState({
        Home: false,
        Pages: false,
        Menus: false,
        Shop: false,
        Blog: false
    })
  return (
    <Fragment>
        <ContainerPhone>
            <div className='ExitContainer'>
                <AiOutlineClose fontSize={30} onClick={() => setMobileView(false)} cursor="pointer" color='#dd5903'/>
            </div>
            <ul>
                <li onClick={() => setOptions((prevOption) => ({...prevOption, Home: !prevOption.Home}))}>Home {options.Home ? <RiArrowUpSLine fontSize={33} color='#dd5903' id='DropArrow'/> :  <RiArrowDropDownLine fontSize={37} color='#dd5903' id='DropArrow'/> }</li>
                {options.Home &&
                <div className='Dropped'>
                <span>Buger Home</span>
                <span>SeaFood Home</span>
                <span>Pizza Home</span>
                <span>Coffee Home</span>
                </div>
            }
                <li onClick={() => setOptions((prevOption) => ({prevOption, Pages: !prevOption.Pages}))}>Pages {options.Pages ? <RiArrowUpSLine fontSize={33} color='#dd5903' id='DropArrow'/>  : <RiArrowDropDownLine fontSize={37} color='#dd5903' id='DropArrow'/>}</li>
            {options.Pages &&
            <div className='Dropped'>
                <span>About</span>
                <span>Our Chef</span>
                <span>Meet Our Chef</span>
                <span>Reservation</span>
                <span>Contact</span>
            </div>
            }
             <li onClick={() => setOptions((prevOption) => ({prevOption, Menus: !prevOption.Menus}))}>Menu  {options.Menus ? <RiArrowUpSLine fontSize={33} color='#dd5903' id='DropArrow'/> : <RiArrowDropDownLine fontSize={37} color='#dd5903' id='DropArrow'/>}</li>
            {options.Menus &&
            <div className='Dropped'>
                <span>Grilled Steak</span>
                <span>Salmon</span>
                <span>Chicken Alfredo</span>
                <span>Grilled Chicken</span>
                <span>Cheeseburger</span>
            </div>
            }
             <li onClick={() => setOptions((prevOption) => ({prevOption, Shop: !prevOption.Shop}))}>Shop  {options.Shop ? <RiArrowUpSLine fontSize={33} color='#dd5903' id='DropArrow'/>  :  <RiArrowDropDownLine fontSize={37} color='#dd5903' id='DropArrow'/>}</li>
             {options.Shop &&
            <div className='Dropped'>
                <span>Cart</span>
                <span>Checkout</span>
                <span>My Account</span>
            </div>
            }
             <li onClick={() => setOptions((prevOption) => ({prevOption, Blog: !prevOption.Blog}))}>Blog  {options.Blog ? <RiArrowUpSLine fontSize={33} color='#dd5903' id='DropArrow'/> : <RiArrowDropDownLine fontSize={37} color='#dd5903' id='DropArrow'/>}</li>
            {options.Blog &&
            <div className='Dropped'>
                <span>Blog</span>
                <span>Blog Details</span>
            </div>
}
    </ul>
        </ContainerPhone>
    </Fragment>
    )
}

export default PhoneNavOption
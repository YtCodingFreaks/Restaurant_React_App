import React, { Fragment, useState } from 'react'
import {NavContainer, ArrowDown, TabletandMobileView} from '../Styles/NavBarStyle'
import {useDropDown} from '../DropDown/DropDown'
import {RiArrowDropDownLine} from 'react-icons/ri'
function NavBar({setMobileView}) {
  const [darknavbar, setDarknavbar] = useState(false)
  const {dropDown,
    toggleHomeOption,
    togglePageOption,
    toggleMenuOption,
    toggleShopOption,
    toggleBlogOption,} = useDropDown()
    const handlePostioning = (() => {
          const scrollPostion = window.scrollY
          if(scrollPostion > 30){
            setDarknavbar(true)
          }
          else{
            setDarknavbar(false)
          }
    })

    window.addEventListener('scroll', handlePostioning)
  return (
    <Fragment>
      <NavContainer darknavbar={darknavbar}>
        <div className='Logo'>
          <h2>Savor<h2 id='Bite'>Bite</h2></h2>
          <hr />
          <span><span id='Rest'>Rest</span>aurant</span>
        </div>
        <div className='Selection'>
          <ArrowDown  onMouseEnter={() => toggleHomeOption(true)} onMouseLeave={() => {toggleHomeOption(false)}}>
            <a href='#1' alt="Home">Home</a>
            <RiArrowDropDownLine size={30} id='arrow'/>
             {dropDown.HomeOption && 
             <div className='HomeDropped'>
              <div className='Home'>
              <span>Home</span>
              <hr />
              <span>Burger Home</span>
              <hr />
              <span>SeaFood Home</span>
              <hr />
              <span>Pizza Home</span>
              <hr />
              <span>Coffe Home</span>
              </div>
             </div>
             }
          </ArrowDown>
          <ArrowDown onMouseEnter={() => togglePageOption(true)} onMouseLeave={() => {togglePageOption(false)}}>
            <a href='#2' alt="Pages">Pages</a>
            <RiArrowDropDownLine size={30} id='arrow'/>
            {dropDown.PageOption && 
            <div className='PageDropped'>
              <div className='Page'>
                <span>About</span>
                <hr />
                <span>Our Chef</span>
                <hr />
                <span>Meet The Chef</span>
                <hr />
                <span>Contact</span>
              </div>
            </div>
            }
          </ArrowDown>
          <ArrowDown onMouseEnter={() => toggleMenuOption(true)} onMouseLeave={() => {toggleMenuOption(false)}}>
            <a href="#3" alt="Menu">Menu</a>
            <RiArrowDropDownLine size={30} id='arrow'/>
            {dropDown.MenuOption && 
            <div className='MenuDropped'>
              <div className='Menu'>
                <span>Grilled steak</span>
                <hr />
                <span>Salmon</span>
                <hr />
                <span>Chicken Alfredo</span>
                <hr />
                <span>Grilled Chicken</span>
                <hr />
                <span>Cheeseburger</span>
              </div>
              </div>
              }
          </ArrowDown>
          <ArrowDown onMouseEnter={() => toggleShopOption(true)} onMouseLeave={() => {toggleShopOption(false)}}>
            <a href="#4" alt="Shop">Shop</a>
            <RiArrowDropDownLine size={30} id='arrow'/>
             {dropDown.ShopOption && 
             <div className='ShopDropped'>
              <div className='Shop'>
                <span>Cart</span>
                <hr />
                <span>Checkout</span>
                <hr />
                <span>My Account</span>
              </div>
             </div>
             }
          </ArrowDown>
          <TabletandMobileView>
            <div className='Container-Mobile' onClick={() => setMobileView((current) => !current)}>
              <div className='Mobile_Icon'>
                <div className='Circle'></div>
                <div className='Circle'></div>
              </div>
              <div className='Mobile_Icon_2'>
                <div className='Circle'></div>
                <div className='Circle'></div>
              </div>
            </div>
          </TabletandMobileView>
          <ArrowDown onMouseEnter={() => toggleBlogOption(true)} onMouseLeave={() => {toggleBlogOption(false)}}>
            <a href="#3" alt="Blog">Blog</a>
            <RiArrowDropDownLine size={30} id='arrow'/>
            {dropDown.BlogOption && 
            <div className='BlogDropped'>
              <div className='Blog'>
                <span>Blog</span>
                <hr />
                <span>Blog Details</span>
              </div>
            </div>
            }
          </ArrowDown>
        </div>
        <div className='Table'>
          <button alt="Table">Find A Table</button>
        </div>
      </NavContainer>
    </Fragment>
  )
}

export default NavBar
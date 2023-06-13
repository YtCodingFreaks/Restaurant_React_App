import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import {BsFillCartPlusFill} from 'react-icons/bs'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {Container, Buttons, Meals, Foods} from '../Styles/FoodSelection'
import {PhoneDisplay} from '../Styles/PhonedDrop'
function FoodSelection() {
    const [selected, setSelected] = useState(1)
    const [meals, setMeals] = useState([])
    const [drop, setDrop] = useState(false)
    const FoodChoice = {
       Beef: 'Beef',
       Chicken: 'Chicken',
       Pork: 'Pork',
       SeaFood: 'SeaFood',
       Vegan: 'Vegan',
       Vegetarian: 'Vegetarian',
       Pasta: 'Pasta' 
    }
    let foodSelection = FoodChoice
    switch(true){
         case selected === 1 : 
        foodSelection = FoodChoice.Beef
        break
         case selected === 2 : 
        foodSelection = FoodChoice.Chicken
        break
         case selected === 3 : 
        foodSelection = FoodChoice.Pork
        break
         case selected === 4 : 
        foodSelection = FoodChoice.SeaFood
        break
         case selected === 5 : 
        foodSelection = FoodChoice.Vegan
        break
         case selected === 6 : 
        foodSelection = FoodChoice.Vegetarian
        break
         case selected === 7 : 
        foodSelection = FoodChoice.Pasta
        break
        default: 
        foodSelection = FoodChoice.Beef
        break
    }
useEffect(() => {
    const fetchCategoryFoods = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${foodSelection}`);
        setMeals(response.data.meals);
      } catch (error) {
        console.error('Error fetching category foods:', error);
      }
    };
    fetchCategoryFoods();
  }, [selected]);
  return (
    <Fragment>
        <Container>
            <Buttons>
                <button id= {selected === 1 && 'current'} onClick={() => setSelected(1)}>Beef</button>
                <button id= {selected === 2 && 'current'} onClick={() => setSelected(2)}>Chicken</button>
                <button id= {selected === 3 && 'current'} onClick={() => setSelected(3)}>Pork</button>
                <button id= {selected === 4 && 'current'} onClick={() => setSelected(4)}>SeaFood</button>
                <button id= {selected === 5 && 'current'} onClick={() => setSelected(5)}>vegan</button>
                <button id= {selected === 6 && 'current'} onClick={() => setSelected(6)}>Vegetarian</button>
                <button id= {selected === 7 && 'current'} onClick={() => setSelected(7)}>Pasta</button>
            </Buttons>
            {/* Phone Size Here */}
            <PhoneDisplay>
                <div className='Mobile_Selection'>
                    <span onClick={() => setDrop((current) => !current)}>{foodSelection} <RiArrowDropDownLine fontSize={30} id='DropArrow'/></span>
                    {drop && <hr />}
                </div>
           {drop && <div className='Dropped'>
                <span onClick={() => {
                    setSelected(1)
                    setDrop((current) => current === false)
                }}>Beef</span>
                <hr />
                <span onClick={() => {
                    setSelected(2)
                    setDrop((current) => current === false)
                }}>Chicken</span>
                <hr />
                <span onClick={() => {
                    setSelected(3)
                    setDrop((current) => current === false)
                }}>Pork</span>
                <hr />
                <span onClick={() => {
                    setSelected(4)
                    setDrop((current) => current === false)
                }}>SeaFood</span>
                <hr />
                <span onClick={() => {
                    setSelected(5)
                    setDrop((current) => current === false)
                }}>Vegan</span>
                <hr />
                <span onClick={() => {
                    setSelected(6)
                    setDrop((current) => current === false)
                }}>Vegetarian</span>
                <hr />
                <span onClick={() => {
                    setSelected(7)
                    setDrop((current) => current === false)
                }}>Pasta</span>
            </div>
        }
            </PhoneDisplay>
            <Meals>
                {meals.map((meals) => {
                    const RandomNumber = (Math.random() * 70).toFixed(2)
                    if(meals.strMeal.length > 23){
                        meals.strMeal = meals.strMeal.slice(0, 23) + '...' 
                        meals.strMeal = meals.strMeal.replace('with', '').replace('w', '')
                    }
                    return(
                        <Foods key={meals.idMeal}>
                            <img src={meals.strMealThumb} />
                            <span>{meals.strMeal}</span>
                            <br />
                            <button>{RandomNumber}$ <BsFillCartPlusFill id='cart'/></button>
                        </Foods>
                    )
                })}
            </Meals>
        </Container>
    </Fragment>
  )
}

export default FoodSelection
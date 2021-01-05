import React from 'react';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

const Toppings = ({ addTopping, pizza }) => {
let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

const containerVariants = {
  init:{
    x:"100vw",
    opacity:0
  },
  visible:{
    x:0,
    opacity:1,
    transition:{type:"spring",delay:0.5}
  },
  exit:{x:'-100vw',transition:{ease:'easeInOut'}}
}
const nextVariants = {
    init:{
      x:"-100vw",
    },
    visible:{
      x:0,
      transition:{type:"spring",delay:0.5}
    }
}
const buttonVariants = {
  // visible:{
  //   x:[0,-20,20,-20], // they will switch from 0 to -20 than to 20 than to -20
  //   transition:{delay:2}
  // },
  hover:{
      scale:1.1, //the scale wil changes for item[0] next item[i] and also in that way until item[length-1]
      textShadow:"0px 0px 8px rgb(255,255,255)",
      boxShadow:"0px 0px 8px rgb(255,255,255)",
      transition:{
        yoyo:Infinity //yoyo is used to  repeate animation
      }
    }
}
  return (
    <motion.div 
        className="toppings container"
        variants={containerVariants}
        initial="init"
        animate="visible"
        exit="exit"
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li whileHover={{color:'#f8e112',originX:0,scale:1.3}} transition={{type:"spring",stiffness:300}} key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={buttonVariants} whileHover="hover">
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;
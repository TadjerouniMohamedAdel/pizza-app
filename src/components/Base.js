import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
  //you can call the properties of variants as you wish
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
        className="base container"
        variants={containerVariants}
        initial="init"
        animate="visible"
        exit="exit"
        transition={{type:"spring",delay:0.5}}
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li whileHover={{color:'#f8e112',originX:0,scale:1.3}} transition={{type:"spring",stiffness:300}} key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div 
          variants={nextVariants}
          initial="init"
          animate="visible"
          className="next">
          <Link to="/toppings">
            <motion.button
               variants={buttonVariants}
               whileHover="hover"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;
import React,{ useState,useEffect } from 'react';
import { motion,AnimatePresence } from 'framer-motion'
const containerVariants = {
  init:{
    x:"100vw",
    opacity:0
  },
  visible:{
    x:0,
    opacity:1,
    transition:{type:"spring",mass:0.4,damping:8,when:"beforeChildren",staggerChildren:0.4} // before any child animation 
    // staggerChildren is time between between child animation
  },
  exit:{x:'100vw',transition:{ease:'easeInOut'}}
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
const childVariants = {
  init:{
    opacity:0,
  },
  visible:{
    opacity:1
  }
}

const Order = ({ pizza,setShowModal }) => {

  useEffect(() => {
    setTimeout(() => {
        console.log("executed")
        setShowModal(true)
    }, 5000);
  }, [setShowModal])
  
  return (
    <motion.div 
        className="container order"
        variants={containerVariants}
        initial="init"
        animate="visible"
        exit="exit"
    >
      {/* to use the exit attributes you must wrap motion.* with <AnimatePresence> (exit ==>component unmounted) */}
      {/* <AnimatePresence>
          {titleVisible && <motion.h2 exit={{x:"-100vw"}}>Thank you for your order :)</motion.h2>}
      </AnimatePresence> */}
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
          {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;
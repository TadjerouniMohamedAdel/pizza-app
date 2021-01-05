import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import Loader from './Loader';

const buttonVariants = {
  // visible:{
  //   x:[0,-20,20,-20], // they will switch from 0 to -20 than to 20 than to -20
  //   transition:{delay:2}
  // },
  hover:{
      scale:[1,1.1,1,1.1,1,1.1,1], //the scale wil changes for item[0] next item[i] and also in that way until item[length-1]
      textShadow:"0px 0px 8px rgb(255,255,255)",
      boxShadow:"0px 0px 8px rgb(255,255,255)",
      transition:{
        yoyo:Infinity //yoyo is used to  repeate animation
      }
    }
}
const containerVariants={
  hidden:{opacity:0},
  visible:{opacity:1,transition:{delay:1.5,duration:1.5}},
  exit:{x:'-100vw',transition:{ease:'easeInOut'}}
}
const Home = () => {
  return (
    <motion.div 
    className="home container"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
    {/* 
      animate works from default design to animate object design with default (or you van use initialeobject) 
        transition time or (controle them with transition object and other property also 
          like animation types (bound in sprring,tween.....)
        )
    */}
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Hover me
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home;
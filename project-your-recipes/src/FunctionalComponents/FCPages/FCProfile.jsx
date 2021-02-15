import React from 'react';
import Image from '../../Images/img-6.jpg';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../StyledComponents/SEAnimations';
import FCHeader from '../FCHeader';
import { withRouter } from 'react-router-dom';
import CCHeroProfile from '../../ClassComponents/CCHeroProfile';

function FCProfile(props) {
  function getData(data) {
    console.log(data);
  } 
  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationOne} transition={transition}>   
      <FCHeader />
      <CCHeroProfile image={Image} sendRecipe={getData}/>
    </motion.div>
  );
};

export default withRouter(FCProfile);
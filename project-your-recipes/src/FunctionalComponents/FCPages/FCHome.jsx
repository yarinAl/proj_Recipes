import React from 'react';
import Image from '../../Images/img-1.jpg';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../StyledComponents/SEAnimations';
import FCHeader from '../FCHeader';
import CCHero from '../FCHero';
import { withRouter } from 'react-router-dom';

function FCHome(props) {
  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationOne} transition={transition}>   
      <FCHeader />
      <CCHero image={Image} title='Amazing Recipes' desc="Come on let's see" />
    </motion.div>
  );
};

export default withRouter(FCHome);
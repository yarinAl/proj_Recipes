import React from 'react';
import Image from '../../Images/img-5.jpg';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../StyledComponents/SEAnimations';
import FCHeader from '../FCHeader';
import { withRouter } from 'react-router-dom';
import CCHeroLogin from '../../ClassComponents/CCHeroLogin';

function FCLogin(props) {
  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationOne} transition={transition}>   
      <FCHeader />
      <CCHeroLogin image={Image}/>
    </motion.div>
  );
};

export default withRouter(FCLogin);
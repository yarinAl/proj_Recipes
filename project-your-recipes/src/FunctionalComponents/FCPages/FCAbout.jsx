import React from 'react';
import Image from '../../Images/img-2.jpg';
import { motion } from 'framer-motion';
import { animationOne } from '../../StyledComponents/SEAnimations';
import FCHeader from '../FCHeader';
import { withRouter } from 'react-router-dom';
import CCHeroAbout from '../../ClassComponents/CCHeroAbout';

function FCAbout(props) {

  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationOne}>
      <FCHeader />
      <CCHeroAbout image={Image} title='Beautiful fruit salad' desc='About Us.' />
    </motion.div>
  );
};

export default withRouter(FCAbout);

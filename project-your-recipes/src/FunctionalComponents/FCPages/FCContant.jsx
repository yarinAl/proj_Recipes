import React from 'react';
import Image from '../../Images/img-3.jpg';
import { motion } from 'framer-motion';
import { animationOne } from '../../StyledComponents/SEAnimations';
import FCHeader from '../FCHeader';
import { withRouter } from 'react-router-dom';
import CCHeroContant from '../../ClassComponents/CCHeroContant';

function FCContant(props) {
  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationOne}>
      <FCHeader/>
      <CCHeroContant image={Image} title='Look at this cookies' desc='Contant Us.'/>
    </motion.div>
  );
};

export default withRouter(FCContant);

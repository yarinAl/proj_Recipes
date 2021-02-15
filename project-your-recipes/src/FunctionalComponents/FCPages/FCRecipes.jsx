import React from 'react';
import Image from '../../Images/img-4.jpg';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../StyledComponents/SEAnimations';
import FCHeader from '../FCHeader';
import { withRouter } from 'react-router-dom';
import CCHeroRecipes from '../../ClassComponents/CCHeroRecipes';

function FCRecipes(props) {

  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationOne} transition={transition}>   
      <FCHeader />
      <CCHeroRecipes image={Image} title="Recipes" desc="Yummy, Delicious, Hot, Love and so'"/>
    </motion.div>
  );
};

export default withRouter(FCRecipes);
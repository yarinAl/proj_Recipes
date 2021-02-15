import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import FCHome from './FunctionalComponents/FCPages/FCHome';
import FCAbout from './FunctionalComponents/FCPages/FCAbout';
import FCContant from './FunctionalComponents/FCPages/FCContant';
import FCRecipes from './FunctionalComponents/FCPages/FCRecipes';
import FCLogin from './FunctionalComponents/FCPages/FCLogin';
import FCRegister from './FunctionalComponents/FCPages/FCRegister';
import FCProfile from './FunctionalComponents/FCPages/FCProfile';

const Section = styled.section`
  overflow-x: hidden;
`;

function App(props) {

  return (
    <div>
      <Section>
        <GlobalStyle />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path='/' exact component={FCHome} />
            <Route path='/about' component={FCAbout} />
            <Route path='/contant' component={FCContant} />
            <Route path='/recipes' component={FCRecipes} />
            <Route path='/login' component={FCLogin} />
            <Route path='/register' component={FCRegister} />
            <Route path='/profile' component={FCProfile} />
          </Switch>
        </AnimatePresence>
      </Section>
    </div>
  );
}

export default withRouter(App);

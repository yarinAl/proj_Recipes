import React, { Component } from 'react';
import { FaHeart } from "react-icons/fa";
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {
  RegularContainer, RegularWrapper, RegularCard,
  RegularImg
} from '../StyledComponents/SERecipes';
import { Button, Modal, Image, Form, FormControl } from 'react-bootstrap';

const Section = styled.section`
  background: url(${({ image }) => image && image}) bottom center;
  background-repeat: repeat-x;
  height: 50vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: -60px;
`;

const Container = styled.div`
  color: #fff;
  padding: 2rem 5rem;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.4);
  margin: 2rem;
  border-radius: 10px;

  h1 {
    font-size: clamp(2rem, 8vw, 5rem);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: clamp(1rem, 6vw, 2.5rem);
    margin-bottom: 1rem;
  }

  input {
    font-size: clamp(0.8rem, 4vw, 1.2rem);
    padding: 0.8rem 2rem;
    color: #000 !important;
    background: #fff;
    border: none !important;
    border-radius: 4px;
    outline: none;
  }

  button {
    font-size: clamp(0.8rem, 4vw, 1.2rem);
    padding: 0.5rem 2rem;
    color: #000;
    background: #ffb347;
    background: linear-gradient(to right, #ffcc33, #ffb347);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
  }
`;

const ModalTitle = styled.h1`
font-size: 2rem;
color: #000;
font-weight: 700;
font-style: italic;
`;

const ModalBody = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 60vh;
max-height: 100%;
padding: 0 2rem;
width: 100%;
color: #000;

h4 {
    color: #dee2e6;
    font-weight: 900;
}

input {
    width: 75%;
    padding: 10px;
    margin-bottom: 1rem;
    border: 2px solid #dee2e6;
    border-radius: 4px;
}

textarea {
    height: 40vh;
    width: 75%;
    padding: 10px;
    margin-bottom: 1rem;
    border: 2px solid #dee2e6;
    border-radius: 4px;
}

@media screen and (max-width: 650px) {
    width: 100%;
}
`;

class CCRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      searchItem: '',
    };
  }

  //Modal Open
  isOpen() {
    this.setState({ show: true });
    console.log(this.state.show)
  }

  //Modal Close
  isClose() {
    this.setState({ show: false });
  }

  searchItem = (e) => {
    this.setState({
      searchItem: e.target.value
    })
  }

  render() {

    let storedRecipes = JSON.parse(localStorage.getItem('recipes'));

    return (
      <div>
        <Section image={this.props.image}>
          <Container>
            <h1>{this.props.title} <FaHeart /></h1>
            <p>{this.props.desc}</p>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.searchItem} />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Container>
        </Section>
        <RegularContainer>
          <RegularWrapper>
            {storedRecipes ? storedRecipes.map((recipe, index) =>
              <RegularCard key={index}>
                <RegularImg src={recipe.recImg} alt={`picture` + index} onClick={() => this.isOpen()} />
                <Modal size="lg" centered show={this.state.show} onHide={() => this.isClose()}>
                  <Modal.Header>
                    <ModalTitle>Your-Recipes</ModalTitle>
                  </Modal.Header>
                  <ModalBody>
                    <Image src={recipe.recImg} rounded />
                    <h4>Ingredients</h4>
                    {recipe.ListIngredients.map((ingredient, index) =>
                      <ul key={index}>
                        <li>
                          {ingredient.ingName} - {ingredient.amount}
                        </li>
                        <br />
                      </ul>
                    )}
                  </ModalBody>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.isClose()}>
                      Close
                            </Button>
                  </Modal.Footer>
                </Modal>
              </RegularCard>
            ) : <h1>There are no recipes.</h1>}
          </RegularWrapper>
        </RegularContainer>
      </div>
    )
  }
};
export default withRouter(CCRecipes);

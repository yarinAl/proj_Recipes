import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';

const Section = styled.section`
  background: url(${({ image }) => image && image}) bottom center;
  background-repeat: repeat-x;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -60px;
`;

const Container = styled.div`
  color: #fff;
  padding: 2rem 10rem;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.4);
  margin: 2rem;
  border-radius: 10px;

  h1 {
    font-size: clamp(2rem, 8vw, 4rem);
    margin-bottom: 2rem;
    font-weight: 800;
  } 

  h2 {
    font-size: clamp(2rem, 8vw, 2rem);
    margin-bottom: 2rem;
    font-weight: 800;
  } 

  span {
      border: 1px solid #6f42c1;
      background: #6f42c1;
      padding: 4px 10px;
      border-radius: 4px;
  }

button {
    color: #000;
    background: #ffb347;
    background: linear-gradient(to right, #ffcc33, #ffb347);
    border: none;
    margin-top: 1rem;
    width: 400px;
    cursor: pointer;
    outline: none;
    font-size: clamp(0.8rem, 4vw, 1.2rem);
    padding: 0.8rem 2rem;;
    border-radius: 4px;

    &:hover {
        color: #000;
        background: #fff;
    }
}
`;

export const FormContent = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
line-height: 1.8;
color: #fff;
width: 100%;
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
align-items: flex-start;
height: 60vh;
max-height: 100%;
padding: 0 2rem;
width: 100%;
color: #fff;

h1 {
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

class CCProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            recName: '',
            amount: '',
            ingName: '',
            recImg: '',
            ListIngredients: [],
            recNameError: '',
            ingNameError: '',
            amountError: '',
            imgError: '',
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

    handleLogout = () => {

        //למחוק את הנתונים של המשתמש שנכנס או המנהל
        sessionStorage.removeItem(`users`)

        //קישור מעבר לדף התחברות
        this.props.history.push({
            pathname: "/",
        })
    }

    chgInputs = (e) => {
        let id = e.target.id;
        let value = e.target.value;

        if (id === "recName") {
            this.setState({ recName: value })
        } else if (id === "ingName") {
            this.setState({ ingName: value })
        } else if (id === "amount") {
            this.setState({ amount: value })
        } else if (id === "recImg") {
            this.setState({ recImg: value })
        }
    }

    Validate = () => {
        let recNameError = "";
        let ingNameError = "";
        let amountError = "";
        let imgError = "";

        //Recipe name
        if (!this.state.recName) {
            recNameError = "Recipe name is required";
        }

        //Ingredient name
        if (!this.state.ingName) {
            ingNameError = "Ingredient name is required";
        }

        //Ingredient amount
        if (!this.state.amount) {
            amountError = "Amount is required";
        }

        //Url
        if (!this.state.recImg) {
            imgError = "Image is required";
        }

        
        if (recNameError || ingNameError || amountError || imgError) {
            this.setState({ recNameError, ingNameError, amountError, imgError });
            return false;
        }

        return true;
    }


    btnInsertIngredient = () => {
        this.setState({
            ListIngredients: [...this.state.ListIngredients, {
                amount: this.state.amount,
                ingName: this.state.ingName
            }],
            amount: '',
            ingName: '',
        })
    }

    handleSubmit = () => {
        let recipe = ({ recName: this.state.recName, ListIngredients: this.state.ListIngredients, recImg: this.state.recImg })
        let storedRecipes = JSON.parse(localStorage.getItem('recipes'));

        const isValid = this.Validate();
        if (isValid) {
            console.log(this.state);
            // ניקוי הטופס
            this.setState(
                {
                    recName: '',
                    amount: '',
                    ingName: '',
                    recImg: '',
                    recNameError: '',
                    ingNameError: '',
                    amountError: '',
                    imgError: '',
                }
            );

            if (!storedRecipes) {
                localStorage.setItem('recipes', JSON.stringify([recipe]));
                this.setState({
                    ListIngredients: [],
                    show: false,
                });
            } else {
                localStorage.setItem('recipes', JSON.stringify([...storedRecipes, recipe]));
                this.setState({
                    ListIngredients: [],
                    show: false,
                });
            }
        }
    }

    render() {

        //sessionStorage -קבלת מידע שנשמר על המשתמש המחובר ב
        const users = JSON.parse(sessionStorage.getItem(`users`))

        return (
            <div>
                <Section image={this.props.image}>
                    <Container>
                        <FormContent>
                            <span>COMMON</span>
                            <h1>{!users ? undefined : users.nickName}</h1>
                            <h2>{!users ? undefined : users.email}</h2>
                            <button type="button" onClick={() => this.isOpen()}>Add Your Recipes</button>
                            <button type="button" onClick={this.handleLogout}>Logout</button>

                            <Modal size="lg" centered show={this.state.show} onHide={() => this.isClose()}>
                                <Modal.Header>
                                    <ModalTitle>Your-Recipes</ModalTitle>
                                </Modal.Header>
                                <ModalBody noValidate>
                                    <input type="text" id="recName" name="recName" placeholder="Enter Recipe Name..." onChange={this.chgInputs} />
                                    {this.state.recNameError && <p className="errors">{this.state.recNameError}</p>}
                                    <input type="text" id="ingName" name="ingName" placeholder="Enter Ingredient Name..." onChange={this.chgInputs} />
                                    {this.state.ingNameError && <p className="errors">{this.state.ingNameError}</p>}
                                    <input type="text" id="amount" name="amount" placeholder="Enter Ingredient Amount..." onChange={this.chgInputs} />
                                    {this.state.amountError && <p className="errors">{this.state.amountError}</p>}
                                    <button type="button" onClick={this.btnInsertIngredient}>Click Accept</button>
                                    <br />
                                    <input type="text" id="recImg" name="recImg" placeholder="Enter Url..." value={this.state.recImg} onChange={this.chgInputs} />
                                    {this.state.imgError && <p className="errors">{this.state.imgError}</p>}
                                </ModalBody>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => this.isClose()}>
                                        Close
                            </Button>
                                    <Button type="sumbit" onClick={() => this.handleSubmit()}>
                                        Complete
                            </Button>
                                </Modal.Footer>
                            </Modal>
                        </FormContent>
                    </Container>
                </Section>

            </div>
        );
    }
}

export default withRouter(CCProfile);
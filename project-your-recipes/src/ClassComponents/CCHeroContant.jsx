import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Modal } from 'react-bootstrap';
import { FaCookie } from "react-icons/fa";

const Section = styled.section`
  background: url(${({ image }) => image && image}) center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: -60px;
`;

const Container = styled.div`
  color: #fff;
  padding: 2rem;
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

  button {
    font-size: clamp(0.8rem, 4vw, 1.2rem);
    padding: 0.8rem 2rem;
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

class CCHeroContant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name: '',
            email: '',
            message: '',
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

    //Func Change Inputs
    chgInput = (event) => {
        let id = event.target.id;
        let value = event.target.value;

        if (id === "name") {
            console.log(this.state.name)
            this.setState({
                name: value,
            })
        } else if (id === "email") {
            console.log(this.state.email)
            this.setState({
                email: value,
            })
        } else {
            console.log(this.state.message)
            this.setState({
                message: value,
            })
        }
    }

    Validate = () => {
        let emailError = "";

        const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        //Email
        if (!this.state.email) {
            emailError = 'Email is required';
            alert('Email is required');
        } else if (!patternEmail.test(this.state.email)) {
            emailError = 'Email is invalid';
            alert('Email is invalid');
        }

        if (emailError) {
            this.setState({ emailError });
            return false;
        }

        return true;
    }


    handleSubmit = () => {

        const isValid = this.Validate();
        if (isValid) {
            window.location.href = 'mailto:your@email.address?subject=Comments about the color blue';
        }
    }

    render() {
        return (
            <div>
                <Section image={this.props.image}>
                    <Container>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.desc}</p>
                        <button type="button" onClick={() => this.isOpen()}>Learn more</button>

                        <Modal size="lg" centered show={this.state.show} onHide={() => this.isClose()}>
                            <Modal.Header>
                                <ModalTitle>Your-Recipes</ModalTitle>
                            </Modal.Header>
                            <ModalBody>
                                <h1>Write Here <FaCookie /></h1>
                                <input type="text" id="name" name="name" placeholder="Your Name" onChange={this.chgInput} />
                                <input type="email" id="email" name="email" placeholder="Your Email" onChange={this.chgInput} />
                                <textarea name="message" id="message" placeholder="Message..." cols="30" rows="10" onChange={this.chgInput}></textarea>
                            </ModalBody>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => this.isClose()}>
                                    Close
                            </Button>
                                <Button type="sumbit" variant="primary" onClick={() => this.handleSubmit()}>
                                    Send Message
                            </Button>
                            </Modal.Footer>
                        </Modal>

                    </Container>
                </Section>
            </div>
        );
    }
};
export default CCHeroContant;

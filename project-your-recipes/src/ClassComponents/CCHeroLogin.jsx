import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
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
  } 

  input {
    margin-bottom: 1rem;
    padding: 10px;
    width: 400px;
    outline: none;
    border: 1px solid #fff;
    border-radius: 4px;
}

p {
    margin-bottom: 1rem;
    font-size: 16px;
    font-weight: 500;
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

const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
}

class CCLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState,
        };
    }

    chgInput = (event) => {
        let id = event.target.id;
        let value = event.target.value;

        if (id === "email") {
            console.log(this.state.email)
            this.setState({
                email: value,
            })
        } else {
            console.log(this.state.password)
            this.setState({
                password: value,
            })
        }
    }

    Validate = () => {
        let emailError = "";
        let passwordError = "";

        //Email
        if (!this.state.email) {
            emailError = "Email is required";
        }

        //Password
        if (!this.state.password) {
            passwordError = "Password is required";
        }

        if (emailError || passwordError) {
            this.setState({ emailError, passwordError });
            return false;
        }

        return true;
    }

    handleSubmit = (event) => {
        event.preventDefault();//מניעת הרענון של הדף כאשר יש אירוע לחיצה על הכפתור בטופס

        let userLogin = { email: this.state.email, password: this.state.password };
        let storedUsers = JSON.parse(localStorage.getItem('users'));

        if (storedUsers) {
            let user = storedUsers.find(u => u.email === userLogin.email && u.password === userLogin.password);

            const isValid = this.Validate();
            if (user && isValid) {
                console.log(this.state);
                // ניקוי הטופס
                this.setState(initialState);

                //sessionStorage הכנסת המשתמש הנכנס למאגר
                sessionStorage.setItem(`users`, JSON.stringify(user));

                this.props.history.push({
                    pathname: '/',
                });
            }
        }
    }

    render() {

        return (
            <div>
                <Section image={this.props.image}>
                    <Container>
                        <FormContent onSubmit={this.handleSubmit} noValidate>
                            <h1 style={{ fontWeight: 800 }}>LOG IN</h1>
                            <input type="email" id="email" placeholder="Email Address" onChange={this.chgInput} />
                            {this.state.emailError && <p className="errors">{this.state.emailError}</p>}
                                    &nbsp;
                                    <input type="password" id="pass" placeholder="Password" onChange={this.chgInput} />
                            {this.state.passwordError && <p className="errors">{this.state.passwordError}</p>}
                                    &nbsp;
                                    <button type="sumbit">Join Now</button>
                            <br />
                            <p>Don't have an account? <Link to="/register" className="Link">Sign Up</Link></p>
                        </FormContent>
                    </Container>
                </Section>
            </div>
        );
    }
}

export default withRouter(CCLogin);
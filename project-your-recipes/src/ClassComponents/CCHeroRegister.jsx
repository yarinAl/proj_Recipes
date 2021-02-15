import React, { Component } from 'react';
import { Prev } from 'react-bootstrap/esm/PageItem';
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

let index = 0;

const initialState = {
    nickName: "",
    email: "",
    password: "",
    confirmPassword: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    nickNameError: "",
}

class CCRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState,
        };
    }

    chgInput = (event) => {
        let id = event.target.id;
        let value = event.target.value;

        if (id === "nickname") {
            console.log(this.state.nickName)
            this.setState({
                nickName: value,
            })
        } else if (id === "email") {
            console.log(this.state.email)
            this.setState({
                email: value,
            })
        } else if (id === "password") {
            console.log(this.state.password)
            this.setState({
                password: value,
            })
        } else {
            console.log(this.state.confirmPassword)
            this.setState({
                confirmPassword: value,
            })
        }
    }

    Validate = (user, storedUsers) => {
        let nickNameError = "";
        let emailError = "";
        let passwordError = "";
        let confirmPasswordError = "";

        //Nick name
        if (!this.state.nickName) {
            nickNameError = "Nick name is required";
        } else if (localStorage.getItem('users')) {
            storedUsers = JSON.parse(localStorage.getItem('users'));
            if (storedUsers.find(u => u.nickName === user.nickName)) {
                nickNameError = "Nick name already exists";
            }
        }

        const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        //Email
        if (!this.state.email) {
            emailError = "Email is required";
        } else if (!patternEmail.test(this.state.email)) {
            emailError = "Email is invalid";
        } else if (localStorage.getItem('users')) {
            storedUsers = JSON.parse(localStorage.getItem('users'));
            if (storedUsers.find(u => u.email === user.email)) {
                emailError = "Email already exists";
            }
        }

        //Password
        if (!this.state.password) {
            passwordError = "Password is required";
        } else if (this.state.password.length < 8) {
            passwordError = "Password needs to be 8 characters or more";
        }

        //Confirm password
        if (!this.state.confirmPassword) {
            confirmPasswordError = "Password is required";
        } else if (this.state.confirmPassword !== this.state.password) {
            confirmPasswordError = "Passwords do not match";
        }

        if (nickNameError || emailError || passwordError || confirmPasswordError) {
            this.setState({ nickNameError, emailError, passwordError, confirmPasswordError });
            return false;
        }

        return true;
    }


    handleSubmit = (event) => {
        event.preventDefault();//מניעת הרענון של הדף כאשר יש אירוע לחיצה על הכפתור בטופס

        let user = {nickName: this.state.nickName, email: this.state.email, password: this.state.password, confirmPassword: this.state.confirmPassword };
        let storedUsers = JSON.parse(localStorage.getItem('users'));

        const isValid = this.Validate(user, storedUsers);
        if (isValid) {
            console.log(this.state);
            // ניקוי הטופס
            this.setState(initialState);

            if (!storedUsers) {
                localStorage.setItem('users', JSON.stringify([user]));
                this.props.history.push({
                    pathname: '/login',
                });
            } else {
                localStorage.setItem('users', JSON.stringify([...storedUsers, user]));
                this.props.history.push({
                    pathname: '/login',
                })
            }
        }
    }

    render() {
        return (
            <div>
                <Section image={this.props.image}>
                    <Container>
                        <FormContent onSubmit={this.handleSubmit} noValidate>
                            <h1 style={{ fontWeight: 800 }}>Registration</h1>
                            <input type="text" id="nickname" name="nickname" placeholder="Nick Name" onChange={this.chgInput} required />
                            {this.state.nickNameError && <p className="errors">{this.state.nickNameError}</p>}

                            <input type="email" id="email" name="email" placeholder="Email Address" onChange={this.chgInput} required />
                            {this.state.emailError && <p className="errors">{this.state.emailError}</p>}

                            <input type="password" id="password" name="password" placeholder="Password" onChange={this.chgInput} required />
                            {this.state.passwordError && <p className="errors">{this.state.passwordError}</p>}

                            <input type="password" id="con-password" name="con_password" placeholder="Confirm Password" onChange={this.chgInput} required />
                            {this.state.confirmPasswordError && <p className="errors">{this.state.confirmPasswordError}</p>}
                            <button type="sumbit" id="btnLogin">Create Your Account</button>
                            <br />
                            <p>Have an account? <Link to="/login" className="Link">Log In</Link></p>
                        </FormContent>
                    </Container>
                </Section>

            </div>
        );
    }
}

export default withRouter(CCRegister);
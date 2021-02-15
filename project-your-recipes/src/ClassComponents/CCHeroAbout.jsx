import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Modal } from 'react-bootstrap';

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

class CCHeroAbout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }

    isOpen() {
        this.setState({ show: true });
        console.log(this.state.show)
    }

    isClose() {
        this.setState({ show: false });
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
                            <Modal.Body>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                <br />
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.isClose()}>
                                    Close
                            </Button>
                            </Modal.Footer>
                        </Modal>

                    </Container>
                </Section>
            </div>
        );
    }
};
export default CCHeroAbout;

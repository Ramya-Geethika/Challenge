import React, {Component, useState} from 'react';
import {Route,BrowserRouter as Router,Switch,Link,NavLink} from "react-router-dom";
import { Button, Content, Footer, Sidebar } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import { Navbar,Nav,Dropdown,Icon,Container,Header,Steps,Modal,Tooltip,Input,Whisper,Sidenav} from 'rsuite';
import './buyer.css';

export default function Seller() {

    const [wel_modal,setWelModal]=useState(true);
    const [started_modal,setStratedModal]=useState(false);
    const [started_modal2,setStratedModal2]=useState(false);
    const [step_count,setStepCount]=useState(0);
    const [your_needs_modal,setYourNeedsModal]=useState(false);
    
    const goToStartedModal=()=>{
        setWelModal(!wel_modal);
        setStratedModal(!started_modal);
    }
    
    const confirmStarted=()=>{
        setStratedModal(!started_modal);
        setStratedModal2(!started_modal2);
        setStepCount(step_count+1);

    }

    const confirmStarted2=()=>{
        setStratedModal2(!started_modal2);
        setYourNeedsModal(!your_needs_modal);
    }

    const confirmYourNeeds=()=>{
        setYourNeedsModal(!your_needs_modal);
    }
    

    return (
        
        <Container>
            <Header>
                <Navbar appearance="inverse">
                    <Navbar.Header>
                        
                    </Navbar.Header>
                    <Navbar.Body>
                        <Nav>
                            <Nav.Item className="Nav-item" icon={<Icon icon="home" size="2x"/>}>MAKET</Nav.Item>
                           
                        </Nav>
                        <Nav pullRight>
                            <Dropdown icon={<Icon icon="hand-spock-o"/>} title="Jonathan Lamoureux">
                                <Dropdown.Item icon={<Icon icon="user-circle"/>}>Profile</Dropdown.Item>
                                <Dropdown.Item icon={<Icon icon="sign-out"/>}><Link to="/">Sign out</Link></Dropdown.Item>
                            </Dropdown>
                           
                        </Nav>
                    </Navbar.Body>
                </Navbar>
            </Header>

            <Container>
                <Sidebar>
                    <div className="steps-count">
                        <Steps current={step_count} vertical>
                            <Steps.Item title="" icon={<Icon icon="hand-spock-o" size="2x" />} />
                            <Steps.Item title="Your needs" icon={<Icon icon="building2" size="2x" />} />
                            <Steps.Item title="Your budget" icon={<Icon icon="usd" size="2x" />} />
                            <Steps.Item title="Our lands" icon={<Icon icon="map-marker" size="2x" />} />
                            <Steps.Item title="Our Modals" icon={<Icon icon="home" size="2x" />} />
                            <Steps.Item title="Our Meeting" icon={<Icon icon="handshake-o" size="2x" />} />
                            <Steps.Item title="" icon={<Icon icon="check-circle" size="2x" />} />
                        </Steps>
                   </div>
                </Sidebar>

                <Content>
                    <div style={{width:200,"float":"right","margin-top":"20px"}} >
                        <Sidenav defaultOpenKeys={['1', '2']} activeKey="1">
                            <Sidenav.Body>
                                <Nav>
                                    <Dropdown eventKey="3" title="My Projects" icon={<Icon icon="home" />}>
                                        <Dropdown eventKey="31" title="My Needs" icon={<Icon icon="building2" />}>
                                            <Dropdown.Item eventKey="31-1">my needs-1</Dropdown.Item>
                                            <Dropdown.Item eventKey="31-2">my needs-2</Dropdown.Item>
                                        </Dropdown>

                                        <Dropdown eventKey="32" title="My Budget" icon={<Icon icon="usd" />}>
                                            <Dropdown.Item eventKey="32-1">my budget-1</Dropdown.Item>
                                            <Dropdown.Item eventKey="32-2">my budget-2</Dropdown.Item>
                                        </Dropdown>

                                        <Dropdown eventKey="33" title="My Model" icon={<Icon icon="home" />}>
                                            <Dropdown.Item eventKey="33-1">my model-1</Dropdown.Item>
                                            <Dropdown.Item eventKey="33-2">my model-2</Dropdown.Item>
                                        </Dropdown>

                                        <Dropdown eventKey="34" title="My Land" icon={<Icon icon="map-marker" />}>
                                            <Dropdown.Item eventKey="34-1">my land-1</Dropdown.Item>
                                            <Dropdown.Item eventKey="34-2">my land-2</Dropdown.Item>
                                        </Dropdown>

                                        <Dropdown eventKey="35" title="My Meeting" icon={<Icon icon="handshake-o" />}>
                                            <Dropdown.Item eventKey="35-1">my meeting-1</Dropdown.Item>
                                            <Dropdown.Item eventKey="35-2">my meeting-2</Dropdown.Item>
                                        </Dropdown>
                                        
                                    </Dropdown>
                                </Nav>
                            </Sidenav.Body>
                        </Sidenav>
                    </div>

                    {/* welcome modal */}
                    <Modal size="sm" show={wel_modal} onHide={(e)=>setWelModal(!wel_modal)}>
                        <Modal.Header>
                            <Modal.Title><Icon icon='home' size="2x"/>Maket</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <center>
                                    <h3 className="welcome-title">Welcome</h3>
                                </center>
                            </div>
                            <div><b>Let us help you find your dream home</b></div>
                            <br/>
                            <div>
                                <Icon icon='handshake-o' size="2x"/><span> Let us guide you step by step in the building of your new home. We will help you make the right choices for your home from the comfort of your living room </span>
                            </div>
                            <br/>
                            <div>
                                <Icon icon='building2' size="2x"/><span> Let us guide you step by step in the building of your new home. We will help you make the right choices for your home from the comfort of your living room </span>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={(e)=>goToStartedModal()} appearance="primary">
                                Get Started
                            </Button>
                        </Modal.Footer>
                    </Modal>
                     {/* End of welcome modal */}


                    {/* started modal */}
                    <Modal size="sm" show={started_modal} onHide={(e)=>setStratedModal(!started_modal)}>
                        <Modal.Header>
                            <Modal.Title><Icon icon='home' size="2x"/>Maket</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <center>
                                    <h3 className="welcome-title">Get Started</h3>
                                </center>
                            </div>
                            <div><b>Befits ?</b></div>
                            
                            <div>
                                <Icon icon='building2' size="1x"/>&nbsp;<span>Submit a building request to your builder</span>
                            </div>
                           
                            <div>
                                <Icon icon='handshake-o' size="1x"/>&nbsp;<span>Start connecting with your builder</span>
                            </div>
                            <hr/>

                            <div>
                                <Whisper trigger="focus" speaker={<Tooltip>Full Name Required</Tooltip>}>
                                    <Input style={{ width: 300 }} placeholder="Full Name" />
                                </Whisper><br/>
                                <Whisper trigger="focus" speaker={<Tooltip>Email Required</Tooltip>}>
                                    <Input style={{ width: 300 }} placeholder="Email" />
                                </Whisper><br/>
                                <Whisper trigger="focus" speaker={<Tooltip>Phone Number Required</Tooltip>}>
                                    <Input style={{ width: 300 }} placeholder="Phone Number" />
                                </Whisper>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={(e)=>confirmStarted()} appearance="primary">
                                Confirm
                            </Button>
                        </Modal.Footer>
                    </Modal>
                     {/* End of started modal */}


                    {/* Get started2 modal */}
                    <Modal size="xs" show={started_modal2} onHide={(e)=>setStratedModal2(!started_modal2)}>
                        <Modal.Header>
                            <Modal.Title><Icon icon='home' size="2x"/>Maket</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <Icon icon='smile-o' size="2x"/>&nbsp;&nbsp;<span><b>We are happy you are here, We are looking forward to helping you get started.</b></span><br/><br/>
                                <span>First, we will ask you 6 questions that will allow us to know more about your project</span>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={(e)=>confirmStarted2()} appearance="primary">
                            <Icon icon='building2' size="1x"/> Get Started
                            </Button>
                        </Modal.Footer>
                    </Modal>
                     {/* End of Get started2 modal */}

                     {/* Your needs modal */}
                    <Modal size="md" show={your_needs_modal} onHide={(e)=>setYourNeedsModal(!your_needs_modal)}>
                        <Modal.Header>
                            <Modal.Title><Icon icon='home' size="2x"/>Maket</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                            <Steps current={1}>
                                <Steps.Item title="Finished" description="Which type of house?" />
                                <Steps.Item title="In Progress" description="No.of Bed rooms?" />
                                <Steps.Item title="Waiting" description="question 3 ?" />
                                <Steps.Item title="Waiting" description="question 4 ?" />
                                <Steps.Item title="Waiting" description="question 5 ?" />
                                <Steps.Item title="Waiting" description="question 6 ?" />
                            </Steps>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={(e)=>confirmYourNeeds()} appearance="primary">
                                Continue
                            </Button>
                        </Modal.Footer>
                    </Modal>
                     {/* End of your needs modal */}
                     


                </Content>
            </Container>
           
        </Container>
    )
}

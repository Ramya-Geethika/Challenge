import React, {useState} from 'react';
import {Route,BrowserRouter as Router,Switch,Link,NavLink} from "react-router-dom";
import { Button, Content, Sidebar } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import { Navbar,Nav,Dropdown,Icon,Sidenav,Toggle,Container,Header,Row,Col,Grid,SelectPicker,Modal,Panel,PanelGroup} from 'rsuite';
import './seller.css';

export default function Seller() {

    const sampleData = [
        { label: 'All', value: 'All' },
        { label: 'Relevant', value: 'Relevant' },
        { label: 'Very Relevant', value: 'VeryRelevant' },
        { label: 'Not Relevant', value: 'Not Relavant' },
      ];

    
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [mobile,setMobile]=useState('');


    const [title,setTitle]=useState('My Leads');
    const [modal_enable,setModalEnable]=useState(false)

    const [exapnd,setExpand]=useState(true);
    const panelStyles = {
        padding: '15px 20px',
        color: '#aaa'
      };
      
      const headerStyles = {
        padding: 20,
        fontSize: 16,
        background: '#34c3ff',
        color: ' #fff'
      };

    const setInfo=(l_name,l_email,l_mobile)=>{
        setName(l_name);
        setEmail(l_email);
        setMobile(l_mobile);
        setModalEnable(true);
    }
      

    return (
        
        <Container>
            <Header>
                <Navbar appearance="inverse">
                    <Navbar.Body>
                        <Nav>
                            <Nav.Item className="Nav-item" icon={<Icon icon="home" size="2x"/>}>MAKET</Nav.Item>
                           
                        </Nav>
                        <Nav pullRight>
                            <Dropdown icon={<Icon icon="attribution"/>} title="Yourbusiness">
                                <Dropdown.Item>Profile</Dropdown.Item>
                                <Dropdown.Item><Link to="/">Sign out</Link></Dropdown.Item>
                            </Dropdown>
                        </Nav>
                    </Navbar.Body>
                </Navbar>
            </Header>

            <Container>
                <Sidebar>
                    <div style={{ width: 150}}>
                        <Sidenav expanded={exapnd} className="div-backcolor2" style={{height:1000}}>
                            <div style={{"padding-top":"10px","padding-bottom":"10px","align":"left","padding-left":"5px"}}>
                                <Toggle onChange={(e)=>setExpand(!exapnd)} checked={exapnd} />
                            </div>
                            <Sidenav.Body>
                                <Nav>
                                <Nav.Item eventKey="1" onClick={(e)=>setTitle('My Leads')} icon={<Icon icon="dashboard" />}>
                                    My Leads 
                                </Nav.Item>
                                <Nav.Item eventKey="2" onClick={(e)=>setTitle('Favoritrs')} icon={<Icon icon="heart" />}>
                                    Favoritrs
                                </Nav.Item>

                                <Nav.Item eventKey="3" onClick={(e)=>setTitle('Settings')}  icon={<Icon icon="gear-circle" />}>
                                    Settings
                                </Nav.Item>

                                <Nav.Item eventKey="4" onClick={(e)=>setTitle('Models')} icon={<Icon icon="home" />}>
                                    Models
                                </Nav.Item>

                                <Nav.Item eventKey="5" onClick={(e)=>setTitle('Lands')} icon={<Icon icon="map-marker" />}>
                                    Lands
                                </Nav.Item>
                                </Nav>
                            </Sidenav.Body>
                        </Sidenav>
                    </div>
                </Sidebar>

                <Content className="content-align">

                    <br/>
                    <Row>
                        <Col md={6} sm={12}>
                        <h4>{title}</h4>
                        </Col>
                    </Row>
                    <br/>

                    <SelectPicker
                        data={sampleData}
                    />
                    <br/><br/>

                    <Grid fluid>

                        <Row className="show-grid">

                            <Col md={6} sm={12} className="cutsom-grid">
                                <div className="card-header">
                                    <Icon icon='avatar' className="card-header-icon" size="2x"/>Jonathan Lamoureux 
                                </div>
                                
                                <div className="card-body">
                                    <Icon icon='calendar' className="card-body-icon" size="2x"/> May 25,2021
                                </div>

                                <div className="card-footer" >
                                <Button color="green" appearance="ghost" size="xs">very relevant</Button> <Link href="#" onClick={(e)=>setInfo('Jonathan Lamoureux','jonathanlam@gmail.com','928-883-9923')} className="card-footer-Link">More Info</Link>
                                </div>
                            </Col>

                            <Col md={6} sm={12} className="cutsom-grid">
                                <div className="card-header">
                                    <Icon icon='avatar' className="card-header-icon" size="2x"/>Kane William
                                </div>
                                
                                <div className="card-body">
                                    <Icon icon='calendar' className="card-body-icon" size="2x"/> March 21,2021
                                </div>

                                <div className="card-footer" >
                                <Button color="yellow" appearance="ghost" size="xs">relevant</Button> <Link href="#" onClick={(e)=>setInfo('Kane William','kanewillam99@gmail.com','732-883-2234')} className="card-footer-Link">More Info</Link>
                                </div>
                            </Col>

                            <Col md={6} sm={12} className="cutsom-grid">
                                <div className="card-header">
                                    <Icon icon='avatar' className="card-header-icon" size="2x"/>Warner D
                                </div>
                                
                                <div className="card-body">
                                    <Icon icon='calendar' className="card-body-icon" size="2x"/> Feb 14,2021
                                </div>

                                <div className="card-footer" >
                                <Button color="red" appearance="ghost" size="xs">not relevant</Button> <Link href="#" onClick={(e)=>setInfo('Warner D','dwarner9223@gmail.com','284-298-2234')} className="card-footer-Link">More Info</Link>
                                </div>
                            </Col>

                            <Col md={6} sm={12} className="cutsom-grid">
                                <div className="card-header">
                                    <Icon icon='avatar' className="card-header-icon" size="2x"/>James P
                                </div>
                                
                                <div className="card-body">
                                    <Icon icon='calendar' className="card-body-icon" size="2x"/> Jan 11,2021
                                </div>

                                <div className="card-footer" >
                                <Button color="red" appearance="ghost" size="xs">not relevant</Button> <Link href="#" onClick={(e)=>setInfo('James P','jamesp002@gmail.com','992-234-8842')} className="card-footer-Link">More Info</Link>
                                </div>
                            </Col>

                            <Col md={6} sm={12} className="cutsom-grid">
                                <div className="card-header">
                                    <Icon icon='avatar' className="card-header-icon" size="2x"/>Ravi K
                                </div>
                                
                                <div className="card-body">
                                    <Icon icon='calendar' className="card-body-icon" size="2x"/> May 10,2021
                                </div>

                                <div className="card-footer" >
                                <Button color="green" appearance="ghost" size="xs">very relevant</Button> <Link href="#" onClick={(e)=>setInfo('Ravi K','kravi00912@gmail.com','883-432-2223')} className="card-footer-Link">More Info</Link>
                                </div>
                            </Col>

                            <Col md={6} sm={12} className="cutsom-grid">
                                <div className="card-header">
                                    <Icon icon='avatar' className="card-header-icon" size="2x"/>Jacob G
                                </div>
                                
                                <div className="card-body">
                                    <Icon icon='calendar' className="card-body-icon" size="2x"/> Jan 12,2021
                                </div>

                                <div className="card-footer" >
                                <Button color="yellow" appearance="ghost" size="xs">relevant</Button> <Link href="#" onClick={(e)=>setInfo('Jacob G','jacobg007@gmail.com','828-334-2343')} className="card-footer-Link">More Info</Link>
                                </div>
                            </Col>
                    
                        </Row>
                        

                    </Grid>


                    <Modal className="modal-back" size="md" show={modal_enable} onHide={(e)=>setModalEnable(!modal_enable)}>
                        <Modal.Header>
                        </Modal.Header>
                        <Modal.Body className="modal-body">
                            <div class="first-column">
                                <h4 className="lead-name">{name}</h4>
                                <div>{email}</div>
                                <div>{mobile}</div>
                            </div>
                            <div class="second-column">
                                <h4 className="summary">Summary</h4>
                                <PanelGroup accordion bordered>
                                    
                                    <Panel icon={<Icon icon="map-marker" />} header="his needs">
                                        {name}'s needs
                                    </Panel>

                                    <Panel header="his budget">
                                    {name}'s budget
                                    </Panel>

                                    <Panel header="his land">
                                    {name}'s land
                                    </Panel>

                                    <Panel header="his modal">
                                    {name}'s modal
                                    </Panel>

                                    <Panel header="his meeting">
                                    {name}'s meeting
                                    </Panel>
                                    
                                </PanelGroup>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={(e)=>setModalEnable(!modal_enable)} appearance="primary">
                            Accept this lead
                            </Button>
                            <Button onClick={(e)=>setModalEnable(!modal_enable)} appearance="subtle">
                            Cancel
                            </Button>
                        </Modal.Footer>
                    </Modal>

                   
                </Content>
            </Container>
           
        </Container>
    )
}
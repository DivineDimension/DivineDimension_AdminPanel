import React from 'react';
import {Button, Col, Container, Form, Modal, Row} from 'react-bootstrap';
import {
    NavLink as Link
  } from "react-router-dom";
  import Cartoon from '../../assets/images/cartoon_light.png';
//   import ModalImage from '../../assets/images/desktop_light.png';
  import Logo from '../../assets/images/logo-d.svg'
const Footer = () => {
    const [Cartoonshow, setCartoonShow] = React.useState(false);
    const handle = () => {setCartoonShow(!Cartoonshow); localStorage.setItem('elemCartn', true);};

    const [show, setShow] = React.useState(false);

    const handleClose = () => {setShow(false); localStorage.setItem('elemCartn', true);}

    React.useEffect(() => {
        if(!localStorage.getItem('elemCartn')){
            setTimeout(() => {
                setCartoonShow(true);
            }, 1000);
            setTimeout(() => {
                setShow(true);
            }, 2000);
        }
    }, [])
    return (
        <>
            {/* <Modal show={show} size="lg" centered className="modal-dashboard" onHide={handleClose}>
                <Modal.Header closeButton className='align-items-start'>
                    <Modal.Title><h2 className='m-0'>Welcome to Element</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-0'>
                    <Row className='mb-3 align-items-center'>
                        <Col md={12} className="mb-md-0 mb-0">                            
                        <p>
                        Element is the first Stablecoin DeFi 2.0 Hub on Algorand which includes the following
                        <br/>
                        1) Stablecoin Single-Sided DEX<br/>
                        2) Fractional Stablecoin (TAU Protocol)<br/>
                        3) KYC-enabled Launchpad<br/>
                        4) Metaverse NFT Marketplace
                        </p>
                        </Col>                        
                    </Row>
                    <Row className='text-center mb-sm-0 my-md-2 mb-3'>
                        <Col sm="4" className='py-sm-4 py-2'>
                        <a href="https://docs.elementfi.io" target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" >TestNet Guide</Button></a>
                        </Col>
                        <Col sm="4" className='py-sm-4 py-2'>
                        <a href="https://discord.gg/U5xkaqrD" target="_blank" rel="noopener noreferrer"><Button variant="primary">Discord</Button></a>
                        </Col>                        
                    </Row>

                    <hr className='mb-3' />

                    <Row className='align-items-center text-sm-start text-center'>
                        <Col sm={6}>                            
                            <div>Copyright © 2022 ELEMENT</div>
                        </Col>
                        <Col sm={6} className="d-none d-md-block text-end">
                            <img src={Logo} alt="image" className='img-fluid' /> 
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>

            <img src={Cartoon} onClick={handle} alt="Cartoon" className={`footer-cartoon ${Cartoonshow ? '' : 'c-hide'}`} /> */}
        </>
    );
};

export default Footer;
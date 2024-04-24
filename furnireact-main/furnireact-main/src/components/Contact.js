import React, { Component } from 'react'
import { Navbar, Container, Nav, Row, Col, Button, Image, Stack, Form, FormControl } from 'react-bootstrap'

export class Contact extends Component {
  render() {
    return (
      <div>
        <Container fluid className='text-white px-1 px-md-5 py-md-2' style={{ backgroundColor: '#3b5d50' }}>
          <Navbar expand='md' variant='dark'>
            <Container fluid>
              <Navbar.Brand href='/' className='text-white'><h1 className='fw-medium'>Furni.</h1></Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' className='border-0' style={{ color: 'transparent' }} />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto' gap={5}>
                  <Nav.Link href='/' className='fw-medium'>Home</Nav.Link>
                  <Nav.Link href='/shop' className='fw-medium'>Shop</Nav.Link>
                  <Nav.Link href='/about' className='fw-medium'>About</Nav.Link>
                  <Nav.Link href='/services' className='fw-medium'>Services</Nav.Link>
                  <Nav.Link href='/blog' className='fw-medium'>Blog</Nav.Link>
                  <Nav.Link href='/contact' className='fw-medium active'>Contact US</Nav.Link>
                  <Nav.Link><Image src='images/user.svg' className='img-fluid' /></Nav.Link>
                  <Nav.Link><Image src='images/cart.svg' className='img-fluid' /></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container fluid>
            <Row>
              <Col lg={5} className='d-flex justify-content-center'>
                <Stack gap={2} className='d-flex justify-content-center' >
                  <h1 className='fw-bold'>Contact</h1>
                  <p className='text-white-50'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                  <Stack direction='horizontal' gap={2} >
                    <Button variant='warning' className='rounded-pill fw-medium text-dark' size='lg'>Shop Now</Button>
                    <Button variant='outline-light' className='rounded-pill fw-medium' size='lg' >Explore</Button>
                  </Stack>
                </Stack>
              </Col>
              <Col lg={7}>
                <Image src="images/couch.png" className='img-fluid' />
              </Col>
            </Row>
          </Container>
        </Container>
        {/* Deprecated */}
        <Container className='py-5 contactus d-flex justify-content-center align-items-center'>
          <span className=''><i class="fa-solid fa-location-dot fa-lg"></i></span>
          <p className='px-3 text-warp'>43 Raymouth Rd. Baltemoer, London 3910</p>
          <span><i class="fa-solid fa-envelope fa-lg"></i></span>
          <p className='px-3 text-warp'>info@yourdomain.co</p>
          <span><i class="fa-solid fa-phone fa-lg"></i></span>
          <p className='px-3 text-warp'>+1 294 3925 3939</p>
        </Container>
        <Container className='px-5 px-md-5'>
          <Row className='d-flex justify-content-center p-auto p-md-5'>
            <Form className='p-auto p-md-5'>
              <Row>
                <Col>
                  <Form.Group className=''>
                    <Form.Label>First name</Form.Label>
                    <FormControl type='text' size='lg' className='' />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type='text' size='lg' />
                  </Form.Group>
                </Col>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' size='lg' />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Comments</Form.Label>
                  <Form.Control as='Textarea' size='lg' />
                </Form.Group>
              </Row>
              <Button variant='dark' className='rounded-pill mt-5' size='lg'>Send Message</Button>
            </Form>
          </Row>
        </Container>
        <Container fluid className='bg-white anchor'>
          <Row className='p-auto py-5 p-sm-5'>
            <Col className='d-flex flex-column justify-content-end'>
              <h4><span class="me-1"><Image src="images/envelope-outline.svg" alt="Image" class="img-fluid" /></span><span>Subscribe to Newsletter</span></h4>
              <Form className='d-flex'>
                <Form.Control placeholder='Enter your name' className='me-4' />
                <Form.Control placeholder='Enter your email' className='me-4' />
                <Button variant="primary" type='submit' className='px-4 border-0' size='lg' style={{ backgroundColor: '#3b5d50' }}><span class="fa fa-paper-plane"></span></Button>
              </Form>
            </Col>
            <Col className='d-flex flex-column justify-align-center align-items-end'>
              <Image src='images/sofa.png' fluid style={{ width: '400px', height: 'auto' }} />
            </Col>
          </Row>
          <Row className='border-bottom p-auto p-sm-5'>
            <Col lg={4} className='pb-5'>
              <h3>Furni.</h3>
              <p className='w-75'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
              <ul className="list-unstyled d-inline py-5 custom-social">
                <li className='d-inline me-4'><a href="/"><span class="fa fa-brands fa-facebook-f"></span></a></li>
                <li className='d-inline pe-4'><a href="/"><span class="fa fa-brands fa-twitter"></span></a></li>
                <li className='d-inline pe-4'><a href="/"><span class="fa fa-brands fa-instagram"></span></a></li>
                <li className='d-inline'><a href="/"><span class="fa fa-brands fa-linkedin"></span></a></li>
              </ul>
            </Col>
            <Col>
              <ul className='list-unstyled'>
                <li><a href='/'>About us</a></li>
                <li><a href='/'>Service</a></li>
                <li><a href='/'>Blog</a></li>
                <li><a href='/'>Contact us</a></li>
              </ul>
            </Col>
            <Col>
              <ul className='list-unstyled'>
                <li><a href='/'>Support</a></li>
                <li><a href='/'>Knowledge base</a></li>
                <li><a href='/'>Live chat</a></li>
              </ul>
            </Col>
            <Col>
              <ul className='list-unstyled'>
                <li><a href='/'>Jobs</a></li>
                <li><a href='/'>Our team</a></li>
                <li><a href='/'>Leadership</a></li>
                <li><a href='/'>Privacy policy</a></li>
              </ul>
            </Col>
            <Col>
              <ul className='list-unstyled'>
                <li><a href='/'>Nordic Chair</a></li>
                <li><a href='/'>Kruzo Aero</a></li>
                <li><a href='/'>Ergonomic Chair</a></li>
              </ul>
            </Col>
          </Row>
          <Row className='p-auto p-sm-5'>
            <Col md>
              <p>Copyright ©2023. All Rights Reserved. — Designed with love by Untree.co</p>
              <p>Distributed By Ambareesh</p>
            </Col>
            <Col md className='d-flex justify-content-end align-items-center'>
              <Stack direction='horizontal' gap={4}>
                <a href='/'>Terms & Conditions</a>
                <a href='/'>Privacy policy</a>
              </Stack>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Contact
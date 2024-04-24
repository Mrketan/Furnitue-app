import React from 'react'
import { Navbar, Container, Nav, Row, Col, Button, Image, Stack, Carousel, Form } from 'react-bootstrap'

function About() {
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
                <Nav.Link href='/about' className='fw-medium active'>About</Nav.Link>
                <Nav.Link href='/services' className='fw-medium'>Services</Nav.Link>
                <Nav.Link href='/blog' className='fw-medium'>Blog</Nav.Link>
                <Nav.Link href='/contact' className='fw-medium'>Contact US</Nav.Link>
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
                <h1 className='fw-bold'>About Us</h1>
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
      <Container fluid className=''>
        <Row className='p-2 p-md-5'>
          <Col className='py-5'>
            <Row className='pb-5'>
              <h2 className='display-6 fw-medium'>Why Choose US</h2>
              <p className='text-black-50'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            </Row>
            <Row className=''>
              <Col className='mb-3'>
                <Image src='images/truck.svg' className='img-fluid' />
                <h6>Fast & Free Shipping</h6>
                <p className='text-black-50'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </Col>
              <Col className='mb-3'>
                <Image src='images/bag.svg' className='img-fluid' />
                <h6>Easy to Shop</h6>
                <p className='text-black-50'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </Col>
            </Row>
            <Row className=''>
              <Col className='mb-3'>
                <Image src='images/support.svg' className='img-fluid' />
                <h6>24/7 Support</h6>
                <p className='text-black-50'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </Col>
              <Col className='mb-3'>
                <Image src='images/return.svg' className='img-fluid' />
                <h6>Hassle Free Returns</h6>
                <p className='text-black-50'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </Col>
            </Row>
          </Col>
          <Col lg className='d-flex justify-content-center align-items-center'>
            <Image src='images/why-choose-us-img.jpg' className='img-fluid rounded-5' />
          </Col>
        </Row>
      </Container>
      <Container fluid className='p-5'>
        <h3 className='text-center fw-medium py-5'>Our Team</h3>
        <Row>
          <Col sm={6} lg={3} className='pb-5 p-sm-auto' >
            <Image src='images/person_1.jpg' fluid className='mb-4'/>
            <a href='/' className='h3'>Lawson Arnold</a>
            <p>CEO, Founder, Atty.</p>
            <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <a href='/' className='text-black'>Learn More</a>
          </Col>
          <Col sm={6} lg={3} className='pb-5 p-sm-auto' >
            <Image src='images/person_2.jpg' fluid className='mb-4' />
            <a href='/' className='h3'>Jeremy Walker</a>
            <p>CEO, Founder, Atty.</p>
            <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <a href='/' className='text-black'>Learn More</a>
          </Col>
          <Col sm={6} lg={3} className='pb-5 p-sm-auto' >
            <Image src='images/person_3.jpg' fluid className='mb-4' />
            <a href='/' className='h3'>Patrik White</a>
            <p>CEO, Founder, Atty.</p>
            <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <a href='/' className='text-black'>Learn More</a>
          </Col>
          <Col sm={6} lg={3} className='pb-5 p-sm-auto' >
            <Image src='images/person_4.jpg' fluid className='mb-4' />
            <a href='/' className='h3'>Kathryn Ryan</a>
            <p>CEO, Founder, Atty.</p>
            <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <a href='/' className='text-black'>Learn More</a>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <h1 className='display-6 text-center fw-normal pt-5'>Testimonials</h1>
        <Carousel data-bs-theme='dark' className='p-5'>
          <Carousel.Item>
            <Container className='d-flex flex-column justify-content-center align-items-center'>
              <p className='text-center py-4' style={{ fontSize: '20px', width: '75%' }}>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
              <Image src='images/person-1.png' fluid roundedCircle style={{ width: '75px', height: '100%' }} />
              <h6 className='pt-4'>Maria Jones</h6>
              <p>CEO, Co-Founder, XYZ Inc.</p>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container className='d-flex flex-column justify-content-center align-items-center'>
              <p className='text-center py-4' style={{ fontSize: '20px', width: '75%' }}>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
              <Image src='images/person-1.png' fluid roundedCircle style={{ width: '75px', height: '100%' }} />
              <h6 className='pt-4'>Maria Jones</h6>
              <p>CEO, Co-Founder, XYZ Inc.</p>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container className='d-flex flex-column justify-content-center align-items-center'>
              <p className='text-center py-4' style={{ fontSize: '20px', width: '75%' }}>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
              <Image src='images/person-1.png' fluid roundedCircle style={{ width: '75px', height: '100%' }} />
              <h6 className='pt-4'>Maria Jones</h6>
              <p>CEO, Co-Founder, XYZ Inc.</p>
            </Container>
          </Carousel.Item>
        </Carousel>
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

export default About
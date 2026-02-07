import { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Check, Email, Github, Linkedin, List, Twitter } from '../../icon/icon';
import {Nav,NavItem} from "@asphalt-react/sidebar";
import { Link } from 'react-router-dom';
import { Download } from '@mui/icons-material';
import Spinner from 'react-bootstrap/Spinner'

function SidebarLinear() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sticky-top p-2">
      <Button variant="" className="d-lg-none d-md-none" onClick={handleShow}>
        <List/>
      </Button>

      {/* <Alert variant="" className="d-none d-lg-block">
        Body.
      </Alert> */}

      <Offcanvas show={show} onHide={handleClose} responsive="md lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>James Ogbonna</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* <div className='rounded' style={{background:"#2F3645",color:"#ffffff"}}> */}
          <div className='ps-3 shadow-lg' style={{background:"#F1F1F1",color:""}}>
            <Nav>
            <NavItem >
                <img src='images/Jamespicsnobg.png' className='w-50 rounded-pill ms-4 mt-4 bg-primary' alt='profile'/>
                <div style={{marginTop:"-2rem",marginLeft:"9.5rem"}}>
                  <Spinner animation="grow" size="sm" variant='warning' />
                </div>
            </NavItem>
            <NavItem>
                <h4 style={{color:'orangered'}}>Ogbonna James</h4>
            </NavItem>
            <NavItem>
                <p>Fullstack Developer</p>
            </NavItem>
            <NavItem>
              <hr/>
             {/* <div className='d-flex bg-success p-2 text-white bg-opacity-50'> */}
             <div className='row'>
                <h6 className='col-md-4'>Location:</h6>
                <p className='col-md-6'>Lagos, Nigeria</p>
             </div>
             <hr/>
            </NavItem>
            <NavItem>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>HTML, CSS</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>Bootstrap, Tailwind</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>Material UI, React Bootstrap, Antd</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>Slick, AOS, Flowbite React</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>Reactjs, Nextjs</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>JavaScript, Nodejs, Expressjs</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>C#,.NET 6.0, .NET Core MVC, EFcore</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>Swagger, Postman, Tunder client</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>Sql, Msql, Mongoo, MSsql, Firebase</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>REST API</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>vercel, netlify, Version control(Git)</p>
                </div>
            </NavItem>
            <hr/>
            <p>View resume <Link to={'https://drive.google.com/file/d/1YPcX9rGkinuNWSiFTM1HkdYpwl1g6haq/view?usp=sharing'} className='text-black'><Download/></Link></p>
            <hr/>
            <div className="row px-3 pb-3">
              <Link to={'https://www.linkedin.com/in/ogbonna-sundayj/'}
              target='_blank' className='col-lg-3 col-md-6 col-sm-6 text-black mb-2'>
                <Linkedin/>
              </Link>
              <Link to={'https://github.com/James-O'} 
              target='_blank' className='col-lg-3 col-md-6 col-sm-6 text-black mb-2'>
                <Github/>
              </Link>
              <Link to={'https://x.com/JamesOgbonna15'} 
              target='_blank' className='col-lg-3 col-md-6 col-sm-6 text-black mb-2'>
                <Twitter/>
              </Link>
              <Link to={'mailto:ogbonnasunday42@gmail.com'}
              target='_blank' className='col-lg-3 col-md-6 col-sm-6 text-black mb-2'>
                <Email/>
              </Link>
            </div>
          </Nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default SidebarLinear;

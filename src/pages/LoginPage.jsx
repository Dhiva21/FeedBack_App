
import { Container, Row, Col } from 'react-bootstrap';
import { LoginForm } from '../components/LoginForm';
import loginBg from '../assets/images/loginBg.jpg';
import logo from '../assets/images/logo.png';
import '../assets/css/Login.css';


const LoginPage = () => {

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        {/* Left Side: Image */}
        <Col md={8} className="d-none d-md-block p-0">
          <div className="h-100 position-relative">
            <img
              src={loginBg}
              alt="Placeholder"
              className="img-fluid h-100 w-100"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="login_content"> 
            <div>
            <img src={logo} alt="SRM_LOGO" />
            </div>
             <div>
            <h2>Manage Your Activities with FeedBack App</h2> 
             </div>
             <div className="logo_copyright">
               <p>Copyright<span className="mx-1">©</span>2022 SRMTech</p>
                            </div>
          </div>
        </Col>

        {/* Right Side: Login Form */}
        <Col md={4} className="d-flex align-items-center justify-content-center px-4">
          <div className="">
            <h2 className="mb-2">Welcome to FeedBack Portal</h2>
            <p>Please enter your credentials to sign in!</p>

            <LoginForm/>
          
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;

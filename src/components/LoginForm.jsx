import { Form, Button } from 'react-bootstrap';
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMenu } from "../Context/MenuContext";

export const LoginForm = () => {
  // const [menuName, setMenuName] = useState();
  const { setMenuName } = useMenu();
  const navigate = useNavigate();

  // Sample users with roles for validation
  const users = [
    { username: 'canteen', password: '1', role: 'admin' },
    { username: 'department', password: '2', role: 'user' },
    { username: 'superadmin', password: '3', role: 'user' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const username = e.target.formUsername.value;
    const password = e.target.formPassword.value;

    // Find the user with matching username and password
    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
      setMenuName(validUser.username === "canteen" ? "Canteen" : validUser.username === "department" ? "Department" : "Super Admin");
      if (validUser.username === 'canteen') {
        navigate('/canteen');  
        // setMenuName("Canteen");
      } else if (validUser.username === 'department') {
        navigate('/department'); 
        // setMenuName("Department");
      } else if (validUser.username === 'superadmin') {
        navigate('/superadmin');  
        // setMenuName("Super Admin");
      } else {
        navigate('/');  
      }
    } else {
      alert('Please enter valid username and password!');
    }
  };

  return (
    <div>
      <Form noValidate className="row g-3" onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername" className="col-12">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="fName"
            className="form-focus"
            placeholder="Enter username"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="col-12 position-relative">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            className="form-focus"
            placeholder="Enter password"
            required
          />
          <span className="password-toggle">
            <i className="icon-eye2 icon_show d-none"></i>
            <i className="icon-eye-blocked2 icon_not_show"></i>
          </span>
        </Form.Group>

        <div className="col-12 d-flex justify-content-between">
          <Form.Check
            type="checkbox"
            id="gridCheck"
            label="Terms and Conditions"
            className="label_terms"
            required
          />
          <a href="#" className="forgotPass">
            Forgot Password?
          </a>
        </div>

        <div className="col-12 text-center">
          <Button type="submit" className="btn_welcome btn_green text-white w-100">
            Sign In
          </Button>
        </div>
      </Form>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Nav, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getTodayDate } from '../util/getDate';
import Spinner from 'react-bootstrap/Spinner';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function signInBtn() {

    if (email === "") {
      alert("Please insert email")
    } else if (password === "") {
      alert("Please insert password")
    } else {
      setLoading(true);
      const datas = {
        txn_cd: 'MEDAUTH01',
        tstamp: getTodayDate(),
        data: {
          userID: email,
          password: password
        }
      }

      fetch('http://157.245.148.221:3001/SIGNIN',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(datas),
        })
        .then(res => res.json())
        .then(
          (result) => {
            if (result.status === 'IDXDE') {
              alert('User ID does not exist')
              setLoading(false);
              resetForm();
            } else if (result.status === 'PASSWORDWRONG') {
              alert('Wrong password.')
              setLoading(false);
              resetForm();
            } else {
              // window.location = '/PersonalInfo';
              saveToStorage();
            }

          },
          () => {
            alert('Something is went wrong')
          }
        )
    }
  }

  function resetForm() {
    setEmail('');
    setPassword('');
  }

  function saveToStorage() {
    localStorage.setItem('myData', email)
    window.location = '/PersonalInfo';
  }

  useEffect(() => {
    const fetchData = () => {
      const email = localStorage.getItem('myData');
      if (email !== null) {
        window.location = '/PersonalInfo';
        return;
      }
    };

    fetchData();
  }, []);


  if (loading) {
    return (
      <div style={{ textAlign: 'center' }}>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>

    )
  }

  let styles = {
      height: '500px',
      borderColor: '#E5E5E5',
      margin: 'auto'
  };
  const max_width = 500;
  if (window.innerWidth >= max_width) {
      styles = {
          ...styles,
          width: max_width
      }
  }

  return (
    <Card style={styles}>
      <Card.Body>
        <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Sign In</h1><br />
        <h4 style={{ textAlign: 'center', fontWeight: 'normal', fontSize: 20 }}>Enter your email address and password</h4><br />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              name="email"
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            >
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            >
            </Form.Control>
          </Form.Group>

          <Nav.Link href="/TenantSignup">
            <h6 style={{ fontSize: 16, color: '#FCA20A' }}>Doesn't have an account? <br/>Please sign up </h6><br />
          </Nav.Link>
          <Nav.Link >
            <Button
              onClick={() => signInBtn()}
              style={{
                color: 'white',
                backgroundColor: '#FBB03B',
                borderColor: '#FBB03B',
                borderRadius: 30,
                width: 179.54,
                height: 47,
                float: 'right'
              }}>Sign In
                  </Button>
          </Nav.Link>
        </Form>
      </Card.Body>
    </Card>

  );
};

export default SignIn;

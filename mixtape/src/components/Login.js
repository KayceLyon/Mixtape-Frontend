import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap' 




function Login(props) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const triggerLogin = (event) => {
    event.preventDefault()
    let userObj = {
      username: username,
      password: password
    }
    props.handleLogin(userObj)
  }


  return (
    <>
     <div className="bg">
     <h1>Welcome to Mixtape</h1>
    <Form class="submit" onSubmit={triggerLogin} className='inputForm'>
    <Form.Group className="mb-3" controlId="formBasic">
      <Form.Label class='log'>Login</Form.Label>
      <Form.Control type="text" placeholder="Username" className="textInput" onChange={(event)=>{setUsername(event.target.value)}}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label className='log'>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" className='textInput'  onChange={(event)=> {setPassword(event.target.value)}}/>
    </Form.Group>

        {props.toggleError ?
          <h5 className='errorMsg'>{props.errorMessage}</h5>
          :
          null
        }
        <Button input type='submit' value='Login' className='submitBtn'>Login</Button>
        <Button onClick={props.handleToggleForm} className='accountBtn'> {props.toggleLogin ? null : 'Need an account?'}</Button>
        </Form>

      </div>
    </>
  );
}

export default Login;
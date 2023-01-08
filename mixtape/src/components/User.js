import React, {useState} from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap' 




function User(props) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const triggerLogin = (event) => {
    event.preventDefault()
    let userObj = {
      username: username,
      password: password
    }
    createUser(userObj)
  }

  const createUser = (userObj) => {
    console.log(userObj);
  axios.post('https://secret-beach-46849.herokuapp.com/api/useraccount/login', userObj).then((response) => {
    if(response){
        console.log(response.data.username);
      props.setCurrentUser(true)
    } else {
      console.log('error');
     
    }
  })
}

return (
    <>
      <div className='bg'>
      <h1>Welcome to Mixtape</h1>
            <Form class="submit" onSubmit={triggerCreateUser} className='inputForm'>
                <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label class='log'>Create New User</Form.Label>
                <Form.Control type="text" placeholder="Username" class="textInput" onChange={(event)=>{setUsername(event.target.value)}}/>
                </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label class='log'>Password</Form.Label>
                 <Form.Control type="password" placeholder="Password" className='textInput'  onChange={(event)=> {setPassword(event.target.value)}}/>
                </Form.Group>
            {props.toggleError ?
            <h5 className='errorMsg'>{props.errorMessage}</h5>
            
             :
            null
            }
     <Button input type='submit' value='Login' className='submitBtn'>Create Account</Button>
     <Button onClick={props.handleToggleForm} className='accountBtn'>{props.toggleLogin ? null : 'Already Have an Account?' }</Button>

      </Form>
      </div>
      </>
  );
}

export default User;
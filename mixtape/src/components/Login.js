import React, {useState} from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap' 




function Login(props) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [toggleLogin, setToggleLogin] = useState(false)
  const [toggleForm, setToggleForm] = useState(true)

  const handleToggleForm = (event) => {
    if(toggleForm === true) {
      setToggleForm(false)
      setToggleLogin(true)
    } else {
      setToggleForm(true)
      setToggleLogin(false)
    }
  }

  const triggerLogin = (event) => {
    event.preventDefault()
    let userObj = {
      username: username,
      password: password
    }
    handleLogin(userObj)
  }

  const triggerCreateUser = (event) => {
    event.preventDefault()
    let userObj = {
      username: username,
      password: password
    }
    createUser(userObj)
  }

  const handleLogin = (userObj) => {
    console.log(userObj);
  axios.put('https://secret-beach-46849.herokuapp.com/api/useraccount/login', userObj).then((response) => {
    if(response){
        console.log(response.data.username);
      props.setCurrentUser(true)
    } else {
      console.log('error');
     
    }
  })
}

const createUser = (userObj) => {
  console.log(userObj);
axios.post('https://secret-beach-46849.herokuapp.com/api/useraccount', userObj).then((response) => {
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

    { toggleForm ? 

    <div className='body'>

    <h1 className='loginHeader'>Welcome to Mixtape</h1>

     <div className="bg">
    
    <Form className="submit" onSubmit={triggerLogin}>
    <Form.Group className="mb-3" controlId="formBasic">
      <Form.Label className='log'>Login</Form.Label>
      <Form.Control type="text" placeholder="Username" className="textInput" onChange={(event)=>{setUsername(event.target.value)}}/>
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label className='log'>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" className='textInput'  onChange={(event)=> {setPassword(event.target.value)}}/>
    </Form.Group>

       
        <Button input type='submit' value='Login' className='submitBtn'>Login</Button>
        <Button onClick={handleToggleForm} className='accountBtn'> {toggleLogin ? null : 'Need an account?'}</Button>
        </Form>

      </div>
    </div>     

    :

    <div className='body'>

    <h1 className='loginHeader'>Welcome to Mixtape</h1>

      <div className='bg'>
      
            <Form class="submit" onSubmit={triggerCreateUser} className='inputForm'>
                <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label class='log'>Create New User</Form.Label>
                <Form.Control type="text" placeholder="Username" class="textInput" onChange={(event)=>{setUsername(event.target.value)}}/>
                </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label class='log'>Password</Form.Label>
                 <Form.Control type="password" placeholder="Password" className='textInput'  onChange={(event)=> {setPassword(event.target.value)}}/>
                
                </Form.Group>
            
     <Button input type='submit' value='Login' className='submitBtn'>Create Account</Button>
     <Button onClick={handleToggleForm} className='accountBtn'>{toggleLogin ? 'Have an Account?' : null }</Button>

      </Form>
      </div> 
    </div>      

      }





    </>
  );
}

export default Login;

import Form from './Form.js'
import formSchema from './formSchema.js'
import User from './Form.js'
import {
  useParams,
  NavLink,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';

import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import axios from 'axios';

const initialFormValues = {
 
  username: '',
  special: '',

  size: '',
 
  civil: '',
  
  toppings: {
    mushrooms: false,
    pinapples: false,
    salami: false,
    jalapenos:false
  },
    
  
}
const initialFormErrors = {
  username: '',
  email: '',
  
  size: '',
  civil: '',
}
const initialUsers = []
const initialDisabled = true

export default function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
 
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const getUsers = () => {
    
    axios.get('http://localhost:4000/friends')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        debugger
      })
  }

  const postNewUser= newUser=> {
   
    axios.post('http://localhost:4000/friends', newUser)
      .then(res => {
        setUsers([res.data, ...users])
        
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  
  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)

      .validate(value)
      .then(valid => {
     
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })


    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const onCheckboxChange = evt => {
    debugger;
    const { name } = evt.target
  
    const { checked } = evt.target

    setFormValues({
      
      ...formValues,
      
      toppings: {
        
        ...formValues.hobbies,
        
        [name]: checked,  
      }
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      size: formValues.size,
      civil: formValues.civil,
      
      hobbies: Object.keys(formValues.hobbies)
        .filter(topping => formValues.toppings[topping] === true)
      
    
    }
  
    postNewUser(newUser)
    debugger
  }

  
  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <div className='container'>
      <header><h1>User App</h1></header>

      <Form
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        
        disabled={disabled}
        errors={formErrors}
        onCheckboxChange={onCheckboxChange}
      />

      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }

      <Switch>

        <Route path='/'>
          <Form  />
        </Route>

      </Switch>
    </div>
  )
}
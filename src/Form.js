import React from 'react';

export default function Form(props) {

    const {
      values,
      onInputChange,
      onSubmit,
     
      disabled,
      errors,
      onCheckboxChange,
    } = props
  
    return (
        //<Link to={`/pizza`}>
      <form className='form container' onSubmit={onSubmit}>
        <div className='form-group submit'>
          <h2>Add a User</h2>
  
         
          <button disabled={disabled}>submit</button>
  
          <div className='errors'>
            
            <div>{errors.username}</div>
            <div>{errors.email}</div>
           
            <div>{errors.role}</div>
            <div>{errors.civil}</div>
          </div>
        </div>
  
        <div className='form-group inputs'>
          <h4>General information</h4>
  
          
          <label>Name&nbsp;
            <input
              value={values.username}
              onChange={onInputChange}
              name='username'
              type='text'
            />
          </label>
  
          <label>Special Instructions
            <input
              value={values.special}
              onChange={onInputChange}
              name='special'
              type='text'
            />
          </label>
  
          
  
         
          <label>Pizza Size
            <select
              onChange={onInputChange}
              value={values.size}
              name='size'
            >
              <option value=''>- Select an option -</option>
              <option value='Small'>Small</option>
              <option value='Medium'>Medium</option>
              <option value='Large'>Large</option>
              <option value='Extra-Large'>Extra-Large</option>
            </select>
          </label>
  
          
          <label>Single
            <input
              type='radio'
              name='civil'
              value='Single'
              onChange={onInputChange}
            
            />
          </label>
  
          <label>Married
            <input
              type='radio'
              name='civil'
              value='Married'
              onChange={onInputChange}
              
            />
          </label>
        </div>
  
        <div className='form-group checkboxes'>
        <h4>Toppings</h4>

            <label>Mushrooms
                <input
                    type='checkbox'
                    name='mushrooms'
                    checked={values.toppings.mushrooms}
                    onChange={onCheckboxChange}
                />
            </label>

            <label>Pinapples
                <input
                    type='checkbox'
                    name='pinapples'
                    checked={values.toppings.pineapples}
                    onChange={onCheckboxChange}
                />
            </label>

            <label>Salami
                <input
                    type='checkbox'
                    name='salami'
                    checked={values.toppings.salami}
                    onChange={onCheckboxChange}
                />
            </label>

            <label>Jalapenos
                <input
                    type='checkbox'
                    name='jalapenos'
                    checked={values.toppings.jalapenos}
                    onChange={onCheckboxChange}
                />
            </label>
  
         
        </div>
      </form>
      //</Link>
    )
  }
  
import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <div className='friend container'>
      <h2>{details.username}</h2>
      <p>Special Instructions: {details.email}</p>
      
      <p>Size: {details.size}</p>
      

      {
        !!details.terms && !!details.terms.length &&
        <div>
          Toppings:
          <ul>
            {details.termsOfUse.map((like, idx) => <li key={idx}>{like}</li>)}
            
          </ul>
        </div>
      }
    </div>
  )
}

export default User;

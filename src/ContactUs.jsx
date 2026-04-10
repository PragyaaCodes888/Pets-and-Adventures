import React from 'react'

const ContactUs = () => {
  return (
    <div>
       <div>
        <h1>Get in Touch</h1>
        <p>Fill in the form to start a conversation.</p>
        <div>
          ParkerStreet,State,PostalCode
           </div>
           <div>
            +44987654321
           </div>
           <div>
           petsforsale@gmail.com
           </div>
       </div>
      
        <input type="text" placeholder = "Full Name" />
        <input type="text" placeholder = "Email" />
        <input type="text" placeholder = "Telephone" />
        <textarea placeholder="Leave a message here"></textarea>
        <button>Submit</button>
    </div>
  )
}

export default ContactUs
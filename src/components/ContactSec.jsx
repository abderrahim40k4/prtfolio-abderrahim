import React from 'react'
import { CONTACT } from '../constants'

const ContactSec = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className="my-20 text-4xl text-center">Get In Touch</h2>
            <div className="text-center tracking-tight">
                <p className="my-4"> { CONTACT.address}</p>
                <p className="my-4"> { CONTACT.email}</p>
                <p className="my-4"> { CONTACT.phoneNo}</p>
            </div>
        </div>
    )
}

export default ContactSec
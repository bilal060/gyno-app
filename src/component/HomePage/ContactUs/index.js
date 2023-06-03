
import React from 'react'
import {callADDAPI} from "../../../pages/CallApi";
const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target)

    const newData = {
        name: event.target.name.value,
        email: event.target.email.value,
        mobile: event.target.phone.value,
        subject: event.target.subject.value,

    };
    //
    try {
       await callADDAPI("gyno/contactUs", newData);

    } catch (error) {
        console.log(error);
    }
};


function ContactUsForm() {
    return (
        <div className='discovey-form'>
            <h3  style={{textAlign: 'center', marginBottom: '40px'}}>Contact Us</h3>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <label className='form-label' htmlFor='name'>Name</label>
                        <input type={'text'} className='form-input' placeholder='Name' name='name'/>
                    </div>
                    <div className='col-lg-6'>
                        <label className='form-label' htmlFor='email'>Email</label>
                        <input type={"email"} className='form-input' placeholder='Email' name='email'/>
                    </div>
                    <div className='col-lg-6' >
                        <label className='form-label' for={'phone'}>Phone</label>
                        <input type={'text'} placeholder='Phone' className='form-input' name='phone' />
                    </div>
                    <div className='col-lg-6'>
                        <label className='form-label' htmlFor='subject'>Subject</label>
                        <textarea  placeholder='Message'  className='form-input' name='subject'/>
                    </div>
                    <div className='col-lg-12' style={{textAlign: 'center'}}>
                        <input type={"submit"} style={{width: '250px', textAlign: 'center'}} className='form-input green-btn' name={'submit'}/>
                    </div>


                </div>
            </form>
        </div>
    )
}

export default ContactUsForm

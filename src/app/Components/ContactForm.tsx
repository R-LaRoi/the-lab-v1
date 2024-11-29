
import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../Stylesheets/form.css'



interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}


export default function Form() {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    service: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };




  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="inputGroup">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder=" First Last"
        />
        <label htmlFor="name"><span className='px-2'><small>01</small></span> What's your name?</label>
      </div>
      <div className="inputGroup">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="guest@email.com"
          required
        />
        <label htmlFor="email"><span className='px-2'><small>02</small></span>What's your email?</label>
      </div>
      <div className="inputGroup">
        <textarea
          name="message"
          value={formData.service}
          onChange={handleChange}
          required
          placeholder="Web Design, Web Development..."
        ></textarea>
        <label htmlFor="service"><span className='px-2'><small>03</small></span>What services are you looking for?</label>
      </div>
      <div className="inputGroup">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="We're happy to help you..."
        ></textarea>
        <label htmlFor="message"><span className='px-2'><small>04</small></span>Message</label>
      </div>
      <button type="submit" className="submitButton">Send</button>
    </form>
  )
}
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../Stylesheets/form.css';

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
    service: '',
    message: ''
  });

  const [state, handleSubmit] = useForm("mzzbngol");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
  };

  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }

  return (
    <form className="form" onSubmit={onSubmit}>
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
        <ValidationError prefix="Name" field="name" errors={state.errors} />
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
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="inputGroup">
        <textarea
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          placeholder="Web Design, Web Development..."
        ></textarea>
        <label htmlFor="service"><span className='px-2'><small>03</small></span>What services are you looking for?</label>
        <ValidationError prefix="Service" field="service" errors={state.errors} />
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
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <button type="submit" className="submitButton" disabled={state.submitting}>
        {state.submitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}
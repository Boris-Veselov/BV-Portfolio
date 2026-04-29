import './contact.scss';
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://formsubmit.co/ajax/borisveselov@yahoo.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='contact' id='contact'>
      <div className='redLine' />
      <div className='content'>
        <div className='left'>
          <img src='assets/call.png' alt='' />
        </div>
        <div className='right'>
          <h2>Get In Touch</h2>
          <p className='subtitle'>Have a project in mind? Let's talk.</p>
          <div className='socialLinks'>
            <a href="https://github.com/Boris-Veselov" target='_blank' rel='noreferrer'>
              <img src="assets/github.png" alt='GitHub' />
            </a>
            <a href="mailto:borisveselov@yahoo.com">
              <img src="assets/mail.png" alt='Email' />
            </a>
            <a href="https://www.linkedin.com/in/veselavalava/" target='_blank' rel='noreferrer'>
              <img src="assets/linkedin.png" alt='LinkedIn' />
            </a>
          </div>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className={`inputGroup${focused === 'name' ? ' focused' : ''}`}>
                <input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  required
                />
              </div>
              <div className={`inputGroup${focused === 'email' ? ' focused' : ''}`}>
                <input
                  type='email'
                  name='email'
                  placeholder='Your Email'
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  required
                />
              </div>
              <div className={`inputGroup${focused === 'message' ? ' focused' : ''}`}>
                <textarea
                  name='message'
                  placeholder='Your Message'
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  required
                />
              </div>
              <button type='submit'>Send Message</button>
            </form>
          ) : (
            <div className='successMsg'>
              <div className='checkmark'>✓</div>
              <p>Thanks for reaching out! I'll get back to you soon.</p>
            </div>
          )}
        </div>
      </div>
      <div className='redLine' />
    </div>
  );
}

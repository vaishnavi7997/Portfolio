import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { BsInfoCircleFill, BsSendFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import './styles.scss';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_6bd7rd8',     // replace with your actual service ID
      'template_y6lt46k',    // replace with your actual template ID
      form.current,
      'Jj1wCImKG_UQjQdU-'      // replace with your actual public key
    ).then(
      (result) => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent 
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="contact__form-container">
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">
            <BsSendFill style={{ marginRight: "8px" }} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

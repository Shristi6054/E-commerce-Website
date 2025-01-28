import React,{ useState } from "react";
import '../CSSFile/Inquiry.css';

function Inquiry() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
      const [error, setError] = useState('');
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const validateForm = () => {
        if (!formData.name) {
          setError('Please enter your name');
          return false;
        }
        else if(!formData.email){
          setError('Please enter your email address');
          return false;
        }
        else if(!formData.message){
          setError('Please provide any message for inquiry');
          return false;
        }
        else{
          setError('');
          return true;
        }      
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
          alert(`Inquiry Sent Successfully`);
        }
      };
    
      return (
        <section className="contact">
          <form onSubmit={handleSubmit}>
            <h2>Inquiry Form</h2>
          <div className="input-box">
            <label>Name</label>
              <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange}/>
            
          </div>
          <div className="input-box">
            <label>
              Email</label>
              <input type="email" placeholder="Enter your email address" name="email" value={formData.email} onChange={handleChange}/>
          </div>
          <div className="input-box">
            <label>Message</label>
            <textarea name="message" placeholder="Enter your message" value={formData.message} onChange={handleChange}/>
          </div>
          {error && <div className="error-msg">{error}</div>}
          <button type="submit">Send Inquiry</button>
        </form>
        </section>
      );
    
}

export default Inquiry;
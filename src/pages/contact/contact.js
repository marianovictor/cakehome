import  React from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
import wpp from '../../assets/qrCode.jpeg';
import Fb from '../../assets/printFB.png';
import insta from '../../assets/insta.jpeg';
import Swal from 'sweetalert2';


export default function About() {
    function sendEmail(e){
        e.preventDefault();
  
        emailjs.sendForm('service_td9ua9c', 'template_1bju1bi', e.target, 'user_k0sP5Zjig5Hr3mYasSD33')//SERVICE_ID/TEMPLETE_ID/USAR_ID
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };
    return(
        <div className="container">
            <div className="titlePag1"><h1>Contato</h1></div>
            <p className="subTitle">Entre em contato com a gente pelas redes sociais e pelo e-mail!!</p>
            <div className="allContacts">
            <div className="contatoContainer">
                <div className="titleContato">
                    <h2>Whatsapp</h2>
                    <h4>Clique na foto ou escaneie o QRCODE</h4>
                </div>
                <a href = "https://wa.me/5519992678295">
                    <div className="media">
                        <img src={wpp} alt="foto"/>
                    </div>
                </a>
            </div>
            <div className="contatoContainerFB">
                <div className="titleContato">
                    <h2>Facebook</h2>
                    <h5>Clique na foto ou escaneie o entre em facebbok.com/cakkehome</h5>
                </div>
                <a href = "https://www.facebook.com/cakkehome">
                    <div className="mediaFB">
                        <img src={Fb} alt="foto"/>
                    </div>
                </a>
            </div>
            <div className="contatoContainerInta">
                <div className="titleContato">
                    <h2>instagram</h2>
                    <h4>Clique na foto ou escaneie o QRCODE</h4>
                </div>  
                <a href = "https://www.instagram.com/cakkehome">
                    <div className="media">
                        <img src={insta} alt="foto"/>
                    </div>
                </a>
            </div>
            </div>
            <div className="Contato">
                <div className="titleContatoEmail">
                        <h2>Email</h2>
                        <h4>Entre em contato diretamente por email!</h4>
                </div>  
                <form onSubmit={sendEmail}>
                    <div className="formContainer">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" style={{ color: 'var(--color-text)' }} name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" style={{ color: 'var(--color-text)' }}name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" style={{ color: 'var(--color-text)' }}name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="number" className="form-control" placeholder="Phone" style={{ color: 'var(--color-text)' }}name="phone"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control-message" id="" cols="30" rows="8" placeholder="Your Message" style={{ color: 'var(--color-text)' }}name="message"></textarea>
                        </div>
                        <div className="col-8 form-group pt-3 mx-auto">
                            <input type="submit" className="btn" value="Send Message"/>
                        </div>
                    </div>
                </form>
               </div>
        </div>
    );
}
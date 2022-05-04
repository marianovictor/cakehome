import React, {useState } from 'react';
import './menu.css';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';


export default function Menu() {
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

  const [userinfo, setUserInfo] = useState({
    languages: [],
    order: [],
  });
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = userinfo;
      
    console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        order: [...languages, value],
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        order: languages.filter((e) => e !== value),
      });
    }
    e.target.reset()
  };
  
    return(
         

        <div class="container">
            <div className="titlePag1"><h1>Cardapio</h1></div>
            <div className="genericContainer1">
                <div className="topicGeneric">
                  <h2>BOLOS</h2>
                  <form onSubmit={sendEmail}>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-check m-3">
                                  <input className="form-check-input" type="checkbox" name="languages" value="Bolo 1" id="flexCheckDefault" onChange={handleChange}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                      Bolo 1
                                    </label>
                                </div>
                                <div className="form-check m-3">
                                  <input className="form-check-input" type="checkbox" name="languages" value="Bolo 0" id="flexCheckDefault" onChange={handleChange}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                      Bolo muito topzera
                                    </label>
                                </div>
                                <div className="form-check m-3">
                                  <input className="form-check-input" type="checkbox" name="languages" value="Bolo 2" id="flexCheckDefault" onChange={handleChange}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                      Bolo 2
                                    </label>
                                </div>
                                <div className="form-check m-3">
                                  <input className="form-check-input" type="checkbox" name="languages" value="Bolo 3" id="flexCheckDefault" onChange={handleChange}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Bolo 3
                                    </label>
                                </div>
                                <div className="form-check m-3">
                                  <input className="form-check-input" type="checkbox" name="languages" value="Bolo 4" id="flexCheckDefault" onChange={handleChange}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Bolo 4
                                    </label>
                                </div>
                              </div>
                            </div>
                  
                            <div className="form-floating mt-3 mb-3 text-center">
                              <label htmlFor="exampleFormControlTextarea1">
                                Aqui aparecera seu pedido: {" "}
                              </label>
                              <textarea className="form-control text" value={userinfo.order} placeholder="The checkbox values will be displayed here " id="floatingTextarea2" style={{ height: "150px" }} onChange={handleChange} name="order" ></textarea>
                            </div>
                            <div className="col-8 form-group mx-auto">
                              <input type="text" className="form-control" placeholder="Name" style={{ color: 'var(--color-text)' }} name="Name"/>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                              <input type="number" className="form-control" placeholder="Phone" style={{ color: 'var(--color-text)' }}name="Phone"/>
                            </div>
                            <div className="col-8 form-group pt-3 mx-auto">
                                <input type="submit" className="btn" value="Send Message"/>
                            </div>
                    </form>      
                  </div>
                </div>
        </div>
    );
}
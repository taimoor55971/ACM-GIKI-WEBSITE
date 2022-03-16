import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import "../Assets/css/ambassador.css"
import ScrollToTop from "react-scroll-to-top";
function Ambassador() {

  const history = useHistory();

  const [user, setUser] = useState({
    Name: '', Cnic: "", Address: "", University: "", Mobile: "", Email: "", Participants: "",
  });

  const [checked, setChecked] = useState({
    Hackathon: 0, Quiz: 0,
    Poster: 0, Startup: 0
  });
  let name, value
  
  const handleChange = e => {
    name = e.target.name;
    
    // 
    value = e.target.value
    
    // 
    setUser({ ...user, [name]: value });
    // setChecked({ ...checked, [name]: value });
  }
  function handleChangecheck(e) {
  const value =
    e.target.type === "checkbox" ? e.target.checked : e.target.value;
  setChecked({...checked,[e.target.name]: value
  });
}
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { Name, Cnic, Address, University, Mobile, Email, Participants } = user;
    const { Hackathon, Quiz, Poster, Startup } = checked;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Name, Cnic, Address, University, Mobile, Email, Participants,Hackathon, Quiz, Poster, Startup  }),
    });

    
     if (res.status===422) {
     alert( "Please fill all spaces");

     
     
     
    }
     if (res.status === 201 || res.status === 200) {
       alert("registeration successful");
       history.push("/");
        }
  };


  

    return (
      
      <div className="container" id="ambassador">
        <ScrollToTop smooth color="#6f00ff" />
        <h2>AMBASSADOR REGISTRATION</h2>
        <form  method="POST" >
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-7">
                  <h3>REGISTRATION FORM (SOFTCOM)</h3>
                </div>
                <div className="col-md-5">
                  <span className="fa fa-pencil" />
                </div>
              </div>
              
              <hr />
              <div className="row" id="form-row">
                <div className="col-md-3">
                  <label className="label control-label">Name</label>
                </div>
                <div className="col-md-9">
                  <input type="text" className="form-control" name="Name" placeholder="Name" value={user.Name} required
                  onChange={handleChange}/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <label className="label control-label">CNIC</label>
                </div>
                <div className="col-md-9">
                  <input type="number" className="form-control" pattern="[0-9]{13}" name="Cnic" placeholder="xxxxxxxxxxxxx" required
                    value={user.Cnic} onChange={handleChange} />
                </div>
              </div>
              <div className="row" id="form-row">
                <div className="col-md-3">
                  <label className="label control-label">Address</label>
                </div>
                <div className="col-md-9">
                  <input type="text" className="form-control" name="Address" value={user.Address} onChange={handleChange} required />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <label className="label control-label">University</label>
                </div>
                <div className="col-md-9">
                  <input type="text" className="form-control" name="University" value={user.University} onChange={handleChange} required />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <label className="label control-label">Mobile</label>
                </div>
                <div className="col-md-9">
                  <input type="number" className="form-control" pattern="[0-9]{11}" name="Mobile" placeholder="xxxx-xxxxxx-x" value={user.Mobile} onChange={handleChange} required />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <label className="label control-label">E-Mail</label>
                </div>
                <div className="col-md-9">
                  <input type="Email" className="form-control" name="Email" placeholder="@gmail.com" value={user.Email} onChange={handleChange} required />
                </div>
              </div>
              <div className="row" id="form-row">
                <div className="col-md-3">
                  <label className="label control-label">No of Participants</label>
                </div>
                <div className="col-md-9">
                  <input type="number" className="form-control" name="Participants" value={user.Participants} onChange={handleChange} required  />
                </div>
              </div>
              {/*<div class="row">
                    <div class="col-md-4">
                        <label class="label control-label">Modules</label><br>
                        <input type="checkbox" name="icpc" value="ICPC"><small>ICPC</small><br>
                        <input type="checkbox" name="hack" value="Hackathon"><small>Hackathon</small><br>
                        <input type="checkbox" name="quiz" value="Quiz"><small>Quiz Competition</small><br>
                        <input type="checkbox" name="poster" value="Poster"><small>Poster Design</small><br>
                        <input type="checkbox" name="startup" value="Startup"><small>Startup</small><br>
                        <input type="checkbox" name="concert" value="Concert"><small>Concert</small>
                    </div>
                </div>*/}
              <div className="row">
                <div className="col-md-1 col-12">
                  <label className="label control-label">Modules</label>
                </div>
                <div className="col-md-11 col-12">
                  <p className="warn">You can Register for any one!</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7 offset-md-3 col-12">
                  <nav>
                    <div className="nav" id="form-nav-tab" role="tablist">
                      <a className="nav-item nav-link" id="nav-hack-tab" data-toggle="tab" href="#nav-hack" role="tab" aria-controls="nav-hack" aria-selected="true">Hackathon</a>
                      <a className="nav-item nav-link" id="nav-other-tab" data-toggle="tab" href="#nav-other" role="tab" aria-controls="nav-other" aria-selected="false">Other Modules</a>
                    </div>
                    <hr id="form-navline" />
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-hack" role="tabpanel" aria-labelledby="nav-hack-tab">
                      <div className="row">
                        <div className="col color">
                          <label className="contain  ">Hackathon<input  type="checkbox"  name="Hackathon" checked={checked.Hackathon} onChange={handleChangecheck} /><span className="checkmark" /></label>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="nav-other" role="tabpanel" aria-labelledby="nav-other-tab">
                      <div className="row">
                        <div className="col color">
                          <label className="contain">Quiz Competition<input type="checkbox"  name="Quiz" checked={checked.Quiz} onChange={handleChangecheck}/><span className="checkmark" /></label><br />
                          <label className="contain">Poster Design Competition<input type="checkbox" name="Poster" checked={checked.Poster} onChange={handleChangecheck} /><span className="checkmark" /></label><br />
                          <label className="contain">Startup Competition<input type="checkbox"  name="Startup" checked={checked.Startup} onChange={handleChangecheck}/><span className="checkmark" /></label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               <button type="submit" name="submit_icpc" defaultValue="Submit" className="btn btn-info" onClick={handleSubmit}>Submit</button>

            </div>
            <div id="package" className="col-md-6">
              <ul>
                <h3>Fee Discount For Ambassador</h3><br />
                <p className="leadpkg">The Condition Below Apply only to the Fee of Ambassador.</p>
                <li>More than 5 participants, discount on the ambassador’s fee will be 25%.</li>
                <li>More than 10 participants, discount on the ambassador’s fee will be 50%.</li>
                <li>More than 15 participants, discount on the ambassador’s fee will be 75%. </li>
                <li>More than 20 participants, discount on the ambassador’s fee will be 100%. </li><br />
              </ul>
              <br />
              <ul>
                <h3>Benefits of Ambassador</h3><br />
                <li>Discount on registration fee of 20th Softcom.</li>
                <li>Certificates for ambassadors from each institute.</li>
                <li>Best ambassador for the ambassador who registers the most participants.</li>
                <li>VIP seats for ambassadors in all social events (Concert and Theme Dinner).</li>
                <li>Resume booster and chance to build your network.</li>
                <li>Chance to sit with the chief guests at the opening and closing ceremony.</li><br />
              </ul>
              <br />
              <ul>  
                <h3>Fee Structure of 20th Softcom</h3><br />
                <p className="leadpkg">Registration Fee for modules: Rs.2500</p>
                <p className="leadpkg">Accomodation Fee: Rs.1000 (For 3 Days)</p>
                <p className="leadpkg">Transportation Fee: Rs.500 (Pick and Drop from Islamabad and Peshawar)</p>
                <br />
                <p className="leadpkg">Total Fee: Rs.4000</p><br />
              </ul>
            </div>
          </div>
        </form>
      </div>

    )
}

export default Ambassador

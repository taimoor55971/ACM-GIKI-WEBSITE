import React, { useState, } from 'react'
import { useHistory } from "react-router-dom";
import "../Assets/css/participants.css"
import Button from 'react-bootstrap/Button';



function Participants() {
    const history =useHistory();
    const [user, setUser] = useState({
        Name: "", Cnic: "",Amb:"", University: "", Mobile: "", Email: "",
        NameL: "", CNICL: "", UniversityL: "", Tname: "", MobileL: "", EmailL: "",
        Name1: "", CNIC1: "", University1: "", Mobile1: "", Email1: "",
        Name2: "", CNIC2: "", University2: "", Mobile2: "", Email2: ""
        
    });
   const [checked, setChecked] = useState({
    Hackathon: 0, Quiz: 0,
    Poster: 0, Startup: 0
  });
    let name, value;
   const handleChange = (e) => {
       console.log(e);
       name = e.target.name;
       value = e.target.value
       setUser({...user, [name]: value });
    }

   function handleChangecheck(e) {
  const value =
    e.target.type === "checkbox" ? e.target.checked : e.target.value;
  setChecked({...checked,[e.target.name]: value
  });
}
    const handleSubmit = async (e) => {
    e.preventDefault();
        const { Name, Cnic, Amb, University, Mobile, Email } = user;
         const { Hackathon, Quiz, Poster, Startup } = checked;
    const res = await fetch("/registerps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Name, Cnic,Amb, University, Mobile, Email,Hackathon, Quiz, Poster, Startup}),
    });

       
        console.log("data status"+res.status);
    if (res.status===422) {
     alert( "Please fill all spaces");

     
     
     
        }
        if (res.status === 201 || res.status === 200) {
            alert("registeration successful");
        }
    }
    
    const handleSubmit2 = async (e) => {
    e.preventDefault();
    const { NameL, CNICL, UniversityL, Tname, MobileL, EmailL,
        Name1, CNIC1, University1, Mobile1, Email1,
        Name2, CNIC2, University2, Mobile2, Email2 } = user;
    const res = await fetch("/registerpi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ NameL, CNICL, UniversityL, Tname, MobileL, EmailL,
        Name1, CNIC1, University1, Mobile1, Email1,
        Name2, CNIC2, University2, Mobile2, Email2 }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid registration");
      console.log("Invalid registration");
    } else {
      window.alert("Successful registration");
      console.log("Successful registration");
      history.push("/");
    }
    }
    
    return (
        <div className="container" id="participants">
            <h2>PARTICIPANT REGISTRATION</h2><br /><br />
            <navbar className="team">
                <div className="nav" id="module-nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-softcom-tab" data-toggle="tab" href="#nav-soft" role="tab" aria-controls="nav-soft" aria-selected="true">REGISTER FOR SOFTCOM</a>
                    <a className="nav-item nav-link" id="nav-icpc-tab" data-toggle="tab" href="#nav-icpc" role="tab" aria-controls="nav-icpc" aria-selected="false">REGISTER FOR ICPC</a>
                </div>
            </navbar>
            <hr id="module-navline" />
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-soft" role="tabpanel" aria-labelledby="nav-softcom-tab">
                    <form  method="POST">
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
                                        <input type="text" className="form-control" name="Name" placeholder="Name" value={user.Name}
                                        onChange={handleChange} required
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="label control-label">CNIC</label>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="number" className="form-control" pattern="[0-9]{13}" name="Cnic" placeholder="CNIC" value={user.Cnic}
                                        onChange={handleChange} required
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="label control-label">Ambassador</label>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="text" className="form-control" name="Amb" placeholder="Ambassador name" value={user.Amb} onChange={handleChange} required/>
                                            
                                       
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="label control-label">University</label>
                                    </div>
                                    <div className="col-md-9">
                                        <input  type="text" className="form-control" required name="University" placeholder="Institute / College" value={user.University} onChange={handleChange}  />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="label control-label">Mobile</label>
                                    </div>
                                    <div className="col-md-9">
                                        <input required type="number" className="form-control" name="Mobile" pattern="[0-9]{11}" placeholder="xxxx-xxxxxx-x" value={user.Mobile} onChange={handleChange}  />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="label control-label">E-Mail</label>
                                    </div>
                                    <div className="col-md-9">
                                        <input required onChange={handleChange} type="email" className="form-control" name="Email" placeholder="@gmail.com" value={user.Email} />
                                    </div>
                                </div>
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
                                                    <div className="col color" >
                                                        <label className="contain " >Hackathon<input type="checkbox"  name="Hackathon" checked={checked.Hackathon} onChange={handleChangecheck} /><span className="checkmark" /></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-other" role="tabpanel" aria-labelledby="nav-other-tab">
                                                <div className="row">
                                                    <div className="col color">
                                                        <label className="contain">Quiz Competition<input type="checkbox"  name="Quiz" checked={checked.Quiz} onChange={handleChangecheck} /><span className="checkmark" /></label><br />
                                                        <label className="contain">Poster Design Competition<input type="checkbox"  name="Poster" checked={checked.Poster} onChange={handleChangecheck}/><span className="checkmark" /></label><br />
                                                        <label className="contain">Startup Competition<input type="checkbox" checked={checked.Startup} name="Startup" onChange={handleChangecheck} /><span className="checkmark" /></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    
                                
                                <Button variant="info" type="submit" name="submit_softcom" defaultValue="Submit"  onClick={handleSubmit} style={{textAlign: 'center'}} >Submit</Button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="tab-pane fade" id="nav-icpc" role="tabpanel" aria-labelledby="nav-icpc-tab">
                    <form  method="POST">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-7">
                                        <h3>REGISTRATION FORM (ICPC)</h3>
                                    </div>
                                    <div className="col-md-5">
                                        <span className="fa fa-pencil" />
                                    </div>
                                </div>
                               
                                <navbar className="team">
                                    <div className="nav" id="module-nav-tab" role="tablist">
                                        <a className="nav-item nav-link active" id="nav-lead-tab" data-toggle="tab" href="#nav-lead" role="tab" aria-controls="nav-lead" aria-selected="true">Team Lead</a>
                                        <a className="nav-item nav-link" id="nav-m1-tab" data-toggle="tab" href="#nav-m1" role="tab" aria-controls="nav-m1" aria-selected="false">Member 1</a>
                                        <a className="nav-item nav-link" id="nav-m2-tab" data-toggle="tab" href="#nav-m2" role="tab" aria-controls="nav-m2" aria-selected="false">Member 2</a>
                                    </div>
                                </navbar>
                                <hr id="module-navline" />
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-lead" role="tabpanel" aria-labelledby="nav-lead-tab">
                                        <div className="row" id="form-row">
                                            <div className="col-md-3">
                                                <label className="label control-label">Name</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input onChange={handleChange} type="text" className="form-control" name="NameL" placeholder="Name" value={user.NameL} required />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label className="label control-label">CNIC</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input onChange={handleChange} required type="number" className="form-control" name="CNICL" pattern="[0-9]{13}" placeholder="xxxxx-xxxxxxx-x"
                                                value={user.CNICL}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label className="label control-label">Team Name</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input onChange={handleChange} required type="text" className="form-control" name="Tname" value={user.Tname}  />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label className="label control-label">University</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input onChange={handleChange} required type="text" className="form-control" name="UniversityL" placeholder="Institute / College"  value={user.UniversityL} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label className="label control-label">Mobile</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input onChange={handleChange} required type="number" className="form-control" name="MobileL" pattern="[0-9]{11}" placeholder="xxxx-xxxxxx-x" value={user.MobileL}  />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label className="label control-label">E-Mail</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input onChange={handleChange} required type="Email" className="form-control" name="EmailL" placeholder="@gmail.com" value={user.EmailL} />
                                            </div>
                                        </div>
                                        {/* <input style={{ visibility: 'hidden' }} className="btn btn-info" /> */}
                                    </div>
                                    <div className="tab-pane fade" id="nav-m1" role="tabpanel" aria-labelledby="nav-m1-tab">
                                        <div className="row" id="form-row">
                                            <div className="col-md-3">
                                                <label className="label control-label">Name</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input onChange={handleChange} required type="text" className="form-control" name="Name1" placeholder="Name" value={user.Name1}  />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label className="label control-label">CNIC</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input onChange={handleChange} required type="number" className="form-control" name="CNIC1" pattern="[0-9]{13}" placeholder="xxxxx-xxxxxxx-x" value={user.CNIC1}  />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label className="label control-label">University</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input onChange={handleChange } required type="text" className="form-control" name="University1" placeholder="Institute / College" value={user.University1}  />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label className="label control-label">Mobile</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input onChange={handleChange} required type="number" className="form-control" name="Mobile1" pattern="[0-9]{11}" placeholder="xxxx-xxxxxx-x" value={user.Mobile1}  />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label className="label control-label">E-Mail</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input onChange={handleChange} required type="Email" className="form-control" name="Email1" placeholder="@gmail.com" value={user.Email1} />
                                            </div>
                                        </div>
                                        {/* <input style={{ visibility: 'hidden' }} className="btn btn-info" /> */}
                                    </div>
                                    <div className="tab-pane fade" id="nav-m2" role="tabpanel" aria-labelledby="nav-m2-tab">
                                        <div className="row" id="form-row">
                                            <div className="col-md-3">
                                                <label className="label control-label">Name</label>
                                            </div>
                                            <div className="col-md-9">
                                      <input onChange={handleChange} required type="text" className="form-control" name="Name2" placeholder="Name" value={user.Name2} />

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label className="label control-label">CNIC</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input type="number" required className="form-control" name="CNIC2" pattern="[0-9]{13}" placeholder="xxxxx-xxxxxxx-x" value={user.CNIC2} onChange={handleChange}  />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label className="label control-label">University</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input type="text" required className="form-control" name="University2" placeholder="Institute / College" value={user.University2} onChange={handleChange}  />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label className="label control-label">Mobile</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input type="number" required className="form-control" name="Mobile2" pattern="[0-9]{11}" placeholder="xxxx-xxxxxx-x" value={user.Mobile2} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label className="label control-label">E-Mail</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input required type="Email" className="form-control" name="Email2" placeholder="@gmail.com" value={user.Email2} onChange={handleChange}  />
                                            </div>
                                        </div>
                                     <button type="submit" name="submit_icpc" defaultValue="Submit" className="btn btn-info" onClick={handleSubmit2}>Info</button>
                                         
                                        
                                    </div>
                                   
                                </div>
                            </div>
                        </div></form>
                </div>
            </div>
        </div>

    )
}

export default Participants

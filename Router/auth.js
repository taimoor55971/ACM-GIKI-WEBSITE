const express = require('express')
const router = express.Router();

const mailjet = require("node-mailjet").connect(
  process.env.API_PUBLIC_KEY, process.env.API_PRIVATE_KEY
);




require("../db/conn");
const Amb = require("../models/amb_Schema");
const Ps = require("../models/psSchema");
const Pi = require("../models/piSchema");
const image = require("../models/imageSchema")
const member=require("../models/members")

// router.get("/", (req,res) => {
//     res.send("Backend for maintainiance");
// })




router.post("/register", (req, res) => {
   const {Name,Cnic,Address,University,Mobile,Email,Participants,Hackathon, Quiz, Poster, Startup} = req.body;
    if (!Name || !Cnic || !Address || !University || !Mobile || !Email || !Participants) {
        return res.status(422).json({ error: "Fill the spaces" });
    } 
   
        const amb = new Amb({ Name, Cnic, Address, University, Mobile, Email, Participants,Hackathon, Quiz, Poster, Startup });

        amb.save().then(() => res.status(201).json({ success: "Registeration Suceesful!" }
        
        ))
        .catch((error) => res.status(500).json({ error: `regitration Failure ${error}` }));
    
    
    
const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
    
  "Messages": [
    
    {
      "From": {
        "Email": "tk55971@gmail.com",
        "Name": "acmgiki"
      },
      "To": [
        {
          "Email": `${Email}`,
          "Name": `${Name}`
        }
      ],
      "Subject": "Ambassador registration for Softcom",
      "HTMLPart": `
     <pre>
     <h3>Dear ${Name}!</h3> 
     You have successfuly registered as a ambasssador for  Softcom.
              For Details Contact:
                       Liaison Head: Awais Sajjad (0331-3153332)
                      Liaison Head: Obail Tariq (0333-4424450)
                      System Administrator: Muhammad Taimoor Khan (0332-2236519)
              Regards:
              ACM Giki Chapter
    </pre> `
      
    }
  ]
})
request
  .then((result) => {
		console.log(result.body)
	})
	.catch((err) => {
		console.log(`${err.statusCode} ${err}`)
	})
    
      
    
});

router.post("/registerps", (req, res) => {
   const {Name,Cnic,Amb,University,Mobile,Email,Hackathon, Quiz, Poster, Startup} = req.body;
    if (!Name || !Cnic ||!Amb  || !University || !Mobile || !Email) {
      return res.status(422).json({ error: "Fill the spaces" });

     
     
     
    } 
   
        const ps = new Ps({ Name, Cnic,Amb, University, Mobile, Email,Hackathon, Quiz, Poster, Startup });

        ps.save().then(() => res.status(201).json({ success: "Registeration Suceesful!" }
        
        ))
            .catch((error) => res.status(500).json({ error: `regitration Failure ${error}` }));
    
       
     const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
    
  "Messages": [
    
    {
      "From": {
        "Email": "tk55971@gmail.com",
        "Name": "acmgiki"
      },
      "To": [
        {
          "Email": `${Email}`,
          "Name": `${Name}`
        }
      ],
      "Subject": "Participant Registration Confirmation for  Softcom",
      "HTMLPart": `
  <pre>
     <h3>Dear ${Name}!</h3> 
     You have successfuly registered as a participant for 20th Softcom.
              For Details Contact:
                      Liaison Head: Awais Sajjad (0331-3153332)
                      Liaison Head: Obail Tariq (0333-4424450)
                      System Administrator: Muhammad Taimoor Khan (0332-2236519)
              Regards:
              ACM Giki Chapter
    </pre>`
      
    }
  ]
})
request
  .then((result) => {
		console.log(result.body)
	})
	.catch((err) => {
		console.log(`${err.statusCode} ${err}`)
	})
});

router.post("/registerpi", (req, res) => {
   const {NameL,CNICL,UniversityL,Tname,MobileL,EmailL,Name1,CNIC1,Mobile1,University1,Email1,Name2,CNIC2,Mobile2,University2,Email2} = req.body;
    if (!NameL||!CNICL||!UniversityL||!Tname||!MobileL||!EmailL||!Name1||!CNIC1||!Mobile1||!University1||!Email1||!Name2||!CNIC2||!Mobile2||!University2||!Email2 ) {
        return res.status(422).json({ error: "Fill the spaces" });
    } 
   
        const pi = new Pi({ NameL,CNICL,UniversityL,Tname,MobileL,EmailL,Name1,CNIC1,Mobile1,University1,Email1,Name2,CNIC2,Mobile2,University2,Email2 });

        pi.save().then(() => res.status(201).json({ success: "Registeration Suceesful!" }
        
        ))
            .catch((error) => res.status(500).json({ error: `regitration Failure ${error}` }));
    
        const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
    
  "Messages": [
    
    {
      "From": {
        "Email": "tk55971@gmail.com",
        "Name": "acmgiki"
      },
      "To": [
        {
          "Email": `${EmailL}`,
          "Name": `${NameL}`
        }
      ],
      "Subject": "Participant Registration Confirmation for ICPC",
      // "TextPart": "My first Mailjet email",
      "HTMLPart": `<pre>
     <h3>Dear ${NameL}!</h3> <br/>
     Your Team have successfuly registered as a participant for ICPC.
                For Details Contact:
                      Liaison Head: Awais Sajjad (0331-3153332)
                      Liaison Head: Obail Tariq (0333-4424450)
                      System Administrator: Muhammad Taimoor Khan (0332-2236519)
              Regards:
              ACM Giki Chapter
    </pre> `
      
    }
  ]
})
request
  .then((result) => {
		console.log(result.body)
	})
	.catch((err) => {
		console.log(`${err.statusCode} ${err}`)
	})
    
});


router.post("/images",(req,res) => {

  // console.log(req.body);
  const img = new image(req.body);
  img.save().then(() => {
    res.send(img);
  }).catch((err) => {console.log(err)})
})



router.get("/images", async (req, res) => {
 
  try {
    const imgs = await image.find();
    
    res.send(imgs);
  }catch(err) {console.log(err)}
  
  
})

router.post("/members",(req,res) => {

  // console.log(req.body);
  const mem = new member(req.body);
  mem.save().then(() => {
    res.send(mem);
  }).catch((err) => {console.log(err)})
})


router.get("/members", async (req, res) => {
 
  try {
    const mem = await member.find();
    
    res.send(mem);
  }catch(err) {console.log(err)}
  
  
})


module.exports=router;


function sendemail(){
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let subject = document.getElementById('subject').value.trim();
  let message = document.getElementById('message').value.trim();  

  if (!name) {
      alert("Name required");
      return;
  }
  if (!email) {
      alert("Email required");
      return;
  }
  if (!subject) { 
      alert("This message has no subject. Are you sure you want to send it?");
      return;
  }
  if (!message) {
      alert("This message has no content");
      return;
  }
  let params={
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  emailjs
  .send("service_2gfc9cn","template_m72u1ff",params)
  .then(()=>{
    alert("email has been sent!");
    document.getElementsByClassName('contact-form')[0].reset()
  })

.catch((error)=>{
  console.error(" EmailJS Error:",error);
  alert("an error occured");
  

})

};

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('user-name');
const emailInput = document.getElementById('user-email');
const messageInput = document.getElementById('message');
const subjectInput = document.getElementById('subject');
const developerEmail = 'bliznetatata@gmail.com';
const developerName = 'Solar System Quiz Team';

const serviceID = 'service_d5etogh';
const templateID = 'template_ff9vwue';
const publicKey = 'oxWAJWFo--FmtxF1w';

//event listener to handle the form submission.
form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  const emailData = {
    from_name : nameInput.value,
    user_email : emailInput.value,
    message : messageInput.value,
    subject : subjectInput.value,
    developer_email : developerEmail,
    developer_name : developerName,
  };

  //Sends the email using the EmailJS service with the provided data.
  emailjs.send(serviceID, templateID, emailData).then(
    () => {
      nameInput.value = '',
      emailInput.value = '',
      messageInput.value = '',
      subjectInput.value = '',
      alert('Your email has been sent successfully!');
    }, 
    (error) => {
      console.error('Error occurred:', error);
      window.location.href = '/workspace/solar-system-quiz/404.html';
    }
  );
});
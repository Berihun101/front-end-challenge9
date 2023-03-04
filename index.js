const btn = document.querySelector('.icon');
const email = document.getElementById('inputEmail');
const redmessage = document.getElementById('alert')
const erroricon=document.querySelector('.iconerror')
btn.addEventListener('click', function() {
  const emailValue = email.value;
  if (emailValue === "" || emailValue.indexOf("@") === -1) {
    redmessage.classList.remove('alertmsg')
    redmessage.classList.add('alertmessage')
    erroricon.classList.remove('iconerror')
    erroricon.classList.add('erroricon')
    email.classList.add('inputclass')
  }
});

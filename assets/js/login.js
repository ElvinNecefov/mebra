const showLogin = () => {

  let form_field_phone = document.querySelector(".form-field-phone");
  let form_field_email = document.querySelector(".form-field-email");

  let button_email = document.querySelector(".button-email");
  let button_phone = document.querySelector(".button-phone");

  let button_email_hide = document.querySelector(".button-email-hide");
  let button_phone_hide = document.querySelector(".button-phone-hide");
  
  form_field_phone.style.display = "none";
  
  button_phone.addEventListener("click", (e) => {
    form_field_email.style.display = "none";
    form_field_phone.style.display = "block";
  });
  
  button_email_hide.addEventListener("click", (e) => {
    form_field_email.style.display = "block";
    form_field_phone.style.display = "none";
  })
}

showLogin();


const pwShowHide = document.querySelector(".eye-icon");

pwShowHide.addEventListener("click", () => {
  let pwFields = pwShowHide.parentElement.parentElement.querySelectorAll(".password");
  console.log(pwFields);
  console.log(pwShowHide);
  
  pwFields.forEach(password => {
    if(password.type === "password"){
        password.type = "text";
        pwShowHide.classList.replace("bx-hide", "bx-show");
        return;
    }
    password.type = "password";
    pwShowHide.classList.replace("bx-show", "bx-hide");
  })
})


const pwShowHide_phone = document.querySelector(".eye-icon-phone");

pwShowHide_phone.addEventListener("click", () => {
  let pwFields_phone = pwShowHide_phone.parentElement.parentElement.querySelectorAll(".password");
  console.log(pwFields_phone);
  console.log(pwShowHide_phone);
  
  pwFields_phone.forEach(password => {
    if(password.type === "password"){
        password.type = "text";
        pwShowHide_phone.classList.replace("bx-hide", "bx-show");
        return;
    }
    password.type = "password";
    pwShowHide_phone.classList.replace("bx-show", "bx-hide");
  })
})










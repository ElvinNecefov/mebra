const showRegister = () => {

  let register_person = document.querySelector(".register-person");
  let register_company = document.querySelector(".register-company");
  let select = document.getElementById("mySelect");
  let selectedOption = select.options[select.selectedIndex].value;

  register_person.style.display="none";
  register_company.style.display="none";

  if(selectedOption == "person") {
    register_person.style.display="block";
   
  } else if(selectedOption == "company") {
    register_company.style.display="block";
  }

}

showRegister();




const pwShowHide_company = document.querySelector(".eye-icon-company");

pwShowHide_company.addEventListener("click", () => {
  let pwFields_company = pwShowHide_company.parentElement.parentElement.querySelectorAll(".password");
  console.log(pwFields_company);
  console.log(pwShowHide_company);
  
  pwFields_company.forEach(password => {
    if(password.type === "password"){
      password.type = "text";
      pwFields_company.classList.replace("bx-hide", "bx-show");
      return;
    }
    password.type = "password";
    pwShowHide_company.classList.replace("bx-show", "bx-hide");
  })
})



const pwShowHide_person = document.querySelector(".eye-icon-person");

pwShowHide_person.addEventListener("click", () => {
  let pwFields_person = pwShowHide_person.parentElement.parentElement.querySelectorAll(".password");
  console.log(pwFields_person);
  console.log(pwShowHide_person);
  
  pwFields_person.forEach(password => {
    if(password.type === "password"){
      password.type = "text";
      pwShowHide_person.classList.replace("bx-hide", "bx-show");
      return;
    }
    password.type = "password";
    pwShowHide_person.classList.replace("bx-show", "bx-hide");
  })
})
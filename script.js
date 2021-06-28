// var getDataBtn = document.getElementById('getbtn')

// const getData = () => {
//     axios.get('https://randomuser.me/api').then(response => {
//         console.log(response)
//     })
// }

// getDataBtn.addEventListener('click', getData)
var descriptionBox = document.querySelector('#description-box')


const ProfileName = document.querySelector('#profile-name')
const ProfileImage = document.querySelector('#profile-pic')

function fetchData() {
    console.log('data')
    fetch('https://randomuser.me/api').then(response => {
        console.log(response)
        if (!response.ok) {
            throw Error('There is probably an error in this code')
        }
        return response.json()
    }).then(data => {
        console.log(data.results)
        const icon = document.querySelector('#icon')
const descriptionbox = document.querySelector('#description-box')






  const ageData= data.results.map(result => {return result.dob.age})
        const htmlData= data.results.map(result => {return result.picture.large})
        const city= data.results.map(result => {return result.location.state})
        const firstname = data.results.map(result => {return result.name.first})
        const lastname = data.results.map(result => {return result.name.last})
        var emailData = data.results.map(result => {return result.email})
        var password = data.results.map(result => {return result.login.password})
        var username = data.results.map(result => {return result.login.username})
        var PhoneNumberData = data.results.map(result => {return result.cell})
        var sexData = data.results.map(result => {return result.gender})
        console.log(sexData)
        var sex = document.querySelector('#sex')
        sex.innerHTML = sexData
        var locationData = data.results.map(result => {return result.location.country})
        console.log(locationData)
        var location = document.querySelector('#location')
        location.innerHTML = locationData
        var locationData = data.results.map(result => {return result.location.country})
        console.log(locationData)
        var location = document.querySelector('#location')
        location.innerHTML = locationData
        var userData = "your username is: " +  username + " and your password is" + password
        const PhoneNumber = document.querySelector('#phone-number')
        var KeyItem = document.querySelector('#keyitem')
        KeyItem.addEventListener('click', changeparagraphkey )
        function changeparagraphkey() {
          descriptionbox.innerHTML = username + " is my username and my password is " + password
          }
          var state = document.querySelector('#state')
          state.addEventListener('click', changeparagraphstate )
          function changeparagraphstate() {
            descriptionbox.innerHTML =  "My main location for now is " + city + ", " + locationData
            }
            var message = document.querySelector('#message')
            message.addEventListener('click', changeparagraphstate )
            function changeparagraphstate() {
              descriptionbox.innerHTML =  "My main location for now is " + city + ", " + locationData
              }
        PhoneNumber.addEventListener('click', changeparagraphphone )
        function changeparagraphphone() {
          descriptionbox.innerHTML = PhoneNumberData + " is my phone number, please feel free to reach out or send a mail" + emailData
          }
        // phoneNumber.innerHTML = phoneNumber
        descriptionbox.innerHTML = 'Hi, my name is ' + firstname + " " + lastname
        console.log(Profilename)
        var Profilename = firstname + ' ' + lastname
        ProfileName.innerHTML = Profilename
        icon.addEventListener('click', changeparagraph)

function changeparagraph() {
  descriptionbox.innerHTML=" i am " + ageData + " years old"
  }
       ProfileImage.src = htmlData[0]
    }).catch(error => console.log(error))
}
fetchData()


// const thankYou = document.querySelector('.thank-you')
// const form = document.querySelector("form[name='contact-form']");
// const nameInput = document.querySelector("input[name='name']");
// const emailInput = document.querySelector("input[name='email']");

// const messageInput = document.querySelector("textarea[name='message']");

// nameInput.isValid = () => !!nameInput.value;
// emailInput.isValid = () => isValidEmail(emailInput.value);

// messageInput.isValid = () => !!messageInput.value;

// const inputFields = [nameInput, emailInput, messageInput];

// const isValidEmail = (email) => {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };



// let shouldValidate = false;
// let isFormValid = false;

// const validateInputs = () => {
//   console.log("we are here");
//   if (!shouldValidate) return;

//   isFormValid = true;
//   inputFields.forEach((input) => {
//     input.classList.remove("invalid");
//     input.nextElementSibling.classList.add("hide");

//     if (!input.isValid()) {
//       input.classList.add("invalid");
//       isFormValid = false;
//       input.nextElementSibling.classList.remove("hide");
//     }
//   });
// };

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   shouldValidate = true;
//   validateInputs();
//   if (isFormValid) {
//       thankYou.classList.remove("hidden")
//     // TODO: DO AJAX REQUEST
//   }
// });

// inputFields.forEach((input) => input.addEventListener("input", validateInputs));









function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 10){
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length >= 15){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length < 0){
    text = "Message field can't be empty";
    error_message.innerHTML = text;
    return false;
  }
  window.location.replace("/message-sent.html");
  alert("Form Submitted Successfully!");
  return true;
}







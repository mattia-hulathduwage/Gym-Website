let menubars = document.querySelector('#menu-bars')
let mynav = document.querySelector('.navbar')


let searchform = document.querySelector('#search-form')
let myform = document.querySelector('.form-search')







menubars.onclick = () =>{
    menubars.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}

searchform.onclick = () =>{

    myform.classList.toggle('active')
}







/*validation*/
// Validation function
function validate() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;
    var errorSpan = document.getElementsByClassName('errors');
    var isValid = true;

    // Reset error messages and styles
    for (var i = 0; i < errorSpan.length; i++) {
        errorSpan[i].textContent = '';
    }

    // Validate name
    if (name.trim() === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
    }

    // Validate email
    if (email.trim() === '') {
        document.getElementById('email-error').textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('email-error').textContent = 'Invalid email address';
        isValid = false;
    }

    // Validate phone
    if (phone.trim() === '') {
        document.getElementById('phone-error').textContent = 'Phone number is required';
        isValid = false;
    } else if (!isValidPhone(phone)) {
        document.getElementById('phone-error').textContent = 'Invalid phone number';
        isValid = false;
    }

    // Validate subject
    if (subject.trim() === '') {
        document.getElementById('subject-error').textContent = 'Message is required';
        isValid = false;
    }

    return isValid;
}

// Helper function to validate email
function isValidEmail(email) {
    var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(email);
}

// Helper function to validate phone number
function isValidPhone(phone) {
    var phonePattern = /^\+?[0-9()-\s]+$/;
    return phonePattern.test(phone);
}






































// const navbar = document.querySelector('.header')

// window.onscroll = () =>{
//     if(window.scrollY > 300){
//         navbar.classList.add('active')
//     }
//     else{
//         navbar.classList.remove('active')
//     }
// }
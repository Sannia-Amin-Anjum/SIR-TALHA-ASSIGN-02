
//---------------CLICK IMAGE FUNCTION------------

 var fullImgBox = document.getElementById("fullImgBox")
 var fullImg = document.getElementById("fullImg");
 function openFullImg(pic) {
     fullImgBox.style.display = "flex";
     fullImg.src = pic;
 }
 function closeFullImg() {
     fullImgBox.style.display = "none";
 }


//---------------SELECTED IMAGE FUNCTION------------

function myFuntion(smallimg) {
    var fullimg = document.getElementById("imagebox");
    fullimg.src = smallimg.src;
}


// ------------------MEMEBERSHIP Form------------
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const container = document.querySelector('.container');


form.addEventListener('submit', (e) => {  
    e.preventDefault();

    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const password2Value = password2.value;
  
  

    if (usernameValue === '') {
        errorMessage(username, "Username is empty");
    } else {
        successMessage(username);
    }

    if (emailValue === '') {
        errorMessage(email, "Email is empty");
    } else if (!validateEmail(emailValue)) {
        errorMessage(email, "Email is invalid");
    } else {
        successMessage(email);
    }
   
    if (passwordValue === '') {
        errorMessage(password, "Password is empty");
    } else {
        successMessage(password);
    }

    if (password2Value === '') {
        errorMessage(password2, "Password is empty");
    } else if (password2Value !== passwordValue) {
        errorMessage(password2, "Both Passwords does not match");
    } else {
        successMessage(password2);
    }

    if (username.parentElement.classList.contains('success') && email.parentElement.classList.contains('success') && password.parentElement.classList.contains('success') && password2.parentElement.classList.contains('success')) {

        swal({
            title: 'Account Created',
            text: 'Your are now our official member',
            icon: 'success',
            button: 'Back to Home',
        });
        const obj = {}
        obj.username = usernameValue;
        obj.email = emailValue;
        obj.password = passwordValue;
        obj.password2 = password2Value;
        console.log(obj);
        username.value = '';
        email.value = '';
        password.value = '';
        password2.value = '';
    }
    
});



function errorMessage(value, message) {
    const formControl = value.parentElement;

    if (formControl.classList.contains('success')) {
        formControl.classList.remove('success');
        formControl.classList.add('error');
    } else {
        formControl.classList.add('error');
    }
    formControl.querySelector('.errorMessage').textContent = message;


}


function successMessage(value) {
    const formControl = value.parentElement;

    if (formControl.classList.contains('error')) {
        formControl.classList.remove('error');
        formControl.classList.add('success');
    } else {
        formControl.classList.add('success');
    }
}


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


jQuery(document).ready(function($){
	var $slickElement = $('.slideshow');

	$slickElement.slick({
	  autoplay: true,
	  dots: false,
	});

});
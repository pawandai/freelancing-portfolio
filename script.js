const btn = document.querySelector('.hamburger-wrap');
const hamburger = document.querySelector('.hamburger');
const nav_links = document.querySelector('.nav-links');

btn.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  nav_links.classList.toggle('active');
});


// FORM VALIDATION

const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const message = document.getElementById('message');
//Functions
function showError(input, message) {
  const formElement = input.parentElement;
  const small = formElement.querySelector('small');
  formElement.className = 'form-element error';
  small.innerText = message;
}

function showSuccess(input) {
  const formElement = input.parentElement;
  formElement.className = 'form-element success';
}

function validEmail(input) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value))
  {
    return true;
  } else {
    return false;
  }
}

// RESPONSIVE

let skills_wrap = document.querySelector('.skills-wrap');
const about_height = new ResizeObserver(function(height_arr) {
	
	let rect = height_arr[0].contentRect;
	// current width & height
	let height = rect.height;
	let width = rect.width;
  skills_wrap.style.top = `${height-800}px`;

  if(width < 292.5) {
    skills_wrap.style.top = `${height+100}px`;
  }
});

// start observing for resize
about_height.observe(document.querySelector(".aboutme"));


//Event Listeners
form.addEventListener('submit', function() {

  if(email.value === '') {
    showError(email, 'Email is required');
  } else if(!validEmail(email)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }

  if(password.value === '') {
    showError(password, 'Password is required');
  } else if(password.value.length < 6) {
    showError(password, 'Password must be atleast six characters');
  } else {
    showSuccess(password);
  }

  if(password2.value === '') {
    showError(password2, 'Password Confirmation is required');
  } else if(password2.value !== password.value) {
    showError(password2, 'Passwords do not match');
  } else {
    showSuccess(password2);
  }
});





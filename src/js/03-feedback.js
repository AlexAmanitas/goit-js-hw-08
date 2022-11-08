/////////////////////////////  мой вариант   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';
// const refs = {
//   form: document.querySelector('form'),
//   email: document.querySelector('input'),
//   message: document.querySelector('textarea'),
// };

// getStorage();

// refs.form.addEventListener('submit', onFormSubmit);
// refs.form.addEventListener('input', throttle(onTextInput, 500));

// function onFormSubmit(event) {
//   event.preventDefault();
//   event.currentTarget.reset();
//   console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
//   localStorage.removeItem(STORAGE_KEY);
// }

// const dataForm = {};

// function onTextInput() {
//   dataForm.email = refs.email.value;
//   dataForm.message = refs.message.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
// }

// function getStorage() {
//   const storageMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

//   if (!storageMessage) return;
//   if (storageMessage.email) refs.email.value = storageMessage.email;
//   if (storageMessage.message) refs.message.value = storageMessage.message;
// }

///////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form';

const refs = {
  form: document.querySelector('.feedback-form'),
  message: document.querySelector('textarea[name="message"]'),
  email: document.querySelector('input[name="email"]'),
};
const data = {};

const onInput = e => {
  data.email = refs.email.value;
  data.message = refs.message.value;
  const inputJson = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, inputJson);
};

const onFormSubmit = e => {
  e.preventDefault();
  if (!data.email || !data.message) {
    alert('Fill in all the fields');
    return;
  }
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.target.reset();
  delete data.message;
  delete data.email;
  localStorage.removeItem(STORAGE_KEY);
};

function populateMessageOutput() {
  const savedMsg = localStorage.getItem(STORAGE_KEY);

  if (savedMsg) {
    const newData = JSON.parse(savedMsg);
    refs.email.value = newData.email || '';
    refs.message.value = newData.message || '';
  }
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));
populateMessageOutput();
////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// import throttle from 'lodash.throttle';

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   inputEl: document.querySelector('input'),
//   textareaEl: document.querySelector('textarea'),
// };

// const { form, inputEl, textareaEl } = refs;

// let feedbackForm;

// try {
//   feedbackForm = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// window.onload = onLoad();
// form.addEventListener('input', throttle(onInput, 500));
// form.addEventListener('submit', onSubmit);

// function onLoad() {
//   const { email, message } = feedbackForm;

//   inputEl.value = email || '';
//   textareaEl.value = message || '';
// }

// function onInput() {
//   feedbackForm.email = inputEl.value;
//   feedbackForm.message = textareaEl.value;

//   localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));
// }

// function onSubmit(e) {
//   e.preventDefault();
//   console.log(feedbackForm);
//   e.target.reset();
//   localStorage.clear();
// }

// // if (email === undefined && message === undefined) {
// //   return;
// // } else if (email === undefined) {
// //   textareaEl.value = message;
// // } else if (message === undefined) {
// //   inputEl.value = email;
// // } else {
// //   textareaEl.value = message;
// //   inputEl.value = email;
// // }

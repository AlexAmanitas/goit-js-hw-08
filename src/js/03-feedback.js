import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

getStorage();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
}

const dataForm = {};

function onTextInput(event) {
  const name = event.target.name;
  const data = event.target.value;
  dataForm[name] = data;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function getStorage() {
  const storageMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!storageMessage) return;
  if (storageMessage.email) refs.email.value = storageMessage.email;
  if (storageMessage.message) refs.message.value = storageMessage.message;
}

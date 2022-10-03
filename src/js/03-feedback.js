import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

formRef.addEventListener('input', throttle(onInput, 500));

populateForm();

formRef.addEventListener('submit', onSubmit);

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (!savedData) {
    return;
  }

  const parsedData = JSON.parse(savedData);
  Object.entries(parsedData).forEach(([name, value]) => {
    formData[name] = value;
    formRef.elements[name].value = value;
  });
}

function onSubmit(evt) {
  evt.preventDefault();

  if (!evt.target.email.value || !evt.target.message.value) {
    window.alert('All fields should be completed');
    return;
  }
  evt.currentTarget.reset();
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
}

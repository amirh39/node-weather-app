const form = document.querySelector('form');
const input = document.querySelector('input');
const msg1 = document.querySelector('.location');
const msg2 = document.querySelector('.forecast');

form.addEventListener('submit', e => {
  e.preventDefault();

  msg1.textContent = 'Loading...';
  msg2.textContent = '';

  fetch(`http://localhost:3000/weather?address=${input.value}`).then(res => {
    res.json().then(data => {
      if (data.error) {
        return (msg1.textContent = data.error);
      }

      console.log(data.location);
      console.log(data.forecast);

      msg1.textContent = data.location;
      msg2.textContent = data.forecast;
    });
  });
});

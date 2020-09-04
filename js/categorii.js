const grid = document.querySelector('#grid-container');
const butonAdaugCateg = document.querySelector('#adaugaCateg');
const form = document.forms['formAdauga'];
let butonSterge = document.querySelectorAll('.sterge');
const stergeToate=  document.querySelector('#stergeToate');
const recuperare = document.querySelector('#recuperare');


butonAdaugCateg.onclick = function() {
  if (form.style.display === 'block') {
    form.style.display = 'none';
  } else {
    form.style.display = 'block';
  }
}

butonSterge.forEach(function(buton) {
  buton.addEventListener('click', function(sterge){
    let ok = confirm('Esti sigur ca vrei sa stergi acest element?');
    if(ok === true) {
      let ultimulSters = buton.parentElement.innerHTML;
      if (localStorage.getItem('ultimulObiect') === null){
        localStorage.setItem('ultimulObiect', ultimulSters);
      } else {
        localStorage.removeItem('ultimulObiect');
        localStorage.setItem('ultimulObiect', ultimulSters)
      }
    setTimeout(function(){
      const item = sterge.target.parentElement;
      item.remove();
    }, 1000);
    }
  });
});

form.addEventListener('submit', function(trimite){
  trimite.preventDefault();
  const nume = form.querySelector('input[type="text"]').value;
  if (nume !== '') {
    // cream elemente
    const div = document.createElement('div');
    const tagA = document.createElement('a');
    const numeCateg = document.createElement('p');
    const sterge = document.createElement('button');
    sterge.textContent = '[x]sterge';
    numeCateg.textContent = nume;
    tagA.href='#';
    tagA.className = 'main-poza';
    tagA.appendChild(numeCateg);
    div.className = 'grid-item';
    div.appendChild(tagA);
    sterge.className = 'sterge';
    div.appendChild(sterge);
    grid.appendChild(div);
  }
  form.style.display = 'none';
  form.querySelector('input[type="text"]').value = null;
})


let interval;
stergeToate.onclick = function() {
  let ok = confirm('Esti sigur ca vrei sa stergi toate categoriile?');
  if (ok === true) {
    interval = setInterval(sterge, 1000);
  }
};

function sterge(){
  let deSters = document.querySelector('.grid-item')
  if (deSters !== null) {
    deSters.remove()
  } else {
    clearInterval(interval);
  }
}

recuperare.addEventListener('click', function(){
  const div = document.createElement('div');
  if (localStorage.getItem('ultimulObiect') !== null){
    let recuperat = localStorage.getItem('ultimulObiect');
    let temp = document.createElement('a');
    temp.innerHTML = recuperat;
    div.className = 'grid-item'
    div.appendChild(temp);
    grid.appendChild(div);
    localStorage.removeItem('ultimulObiect');
  } else {
    alert('Nu exista categorie care poate fi recuperata!');
  }
});



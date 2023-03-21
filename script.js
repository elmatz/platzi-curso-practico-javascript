// //console.log('Hello World!');
// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.querySelector('.parrafito');
// const parrafote = document.getElementById('parrafote');
// const input = document.querySelector('input');

// //input.value 
// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     parrafote,
//     input
// })

// h1.innerText = 'Camaron que se duerme <br> se lo lleva la corriente'
// console.log(h1.getAttribute('pantalla'))
// //h1.setAttribute('class', 'rojo');
// //h1.classList.add('rojo')

// input.value = null;
// input.placeholder = 'Ingresa un valor';

// const img = document.createElement('img');
// img.setAttribute('src', 'https://sm.ign.com/t/ign_latam/image/t/the-25-bes/the-25-best-marvel-heroes-in-the-mcu_s8s6.1280.jpg');

// //parrafote.append(img);
// parrafote.innerHTML = img.outerHTML;

const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const result=document.querySelector('#result');
const form=document.querySelector('#formulario');

form.addEventListener('submit', sumarinputValues);

function sumarinputValues(event){
    console.log({event});
    event.preventDefault();
    result.innerHTML = `Resultado: ${Number(input1.value) + Number(input2.value)}`;
}

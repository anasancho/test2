//- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map - pedidios / proocesso api -
//definir variavel. cria funcao fetch. nao meter "console log" no final. array 10 objectos // loop for // block try catch//assycrona data fetch
//https://codesandbox.io/

let container = document.getElementById('container');

const getPosts = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(result => {
        return result.json();
    })
    .then(data => {
        let people = data;

        container.innerHTML = people.map(ppl => {
            return `<ul>
                <li>${ppl.name}</li>
                <li>${ppl.email}</li>
                <li>${ppl.website}</li>
            </ul>`;
        }).join('')

    })
    .catch(error => console.log(error));
}
getPosts();

//foto 
let container2 = document.getElementById('container2');

const getPhoto = () => {
    fetch(` https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(result => {
        return result.json();
    })  
    .then(data => {
         for (let i = 0; i < data.length; i++) {
            let personEl = document.createElement('ul');
            personEl.innerHTML = `
                <li>${data[i].title}</li>
                <li> <img src="${data[i].url}" /> </li>
            `;
            container2.appendChild(personEl);
        }
    })
}
getPhoto();

// // Async data fetch
// async function getPosts() {
//     try {
//         const result = await fetch(`https://jsonplaceholder.typicode.com/users`);
//         const data = await result.json();
//         let people = data;

//         container.innerHTML = people.map(ppl => {
//             return `<ul>
//                 <li>${ppl.name}</li>
//                 <li>${ppl.email}</li>
//                 <li>${ppl.website}</li>
//             </ul>`;
//         }).join('')
//     } catch(error) {
//         alert(error);
//     }
// }
// getPosts();


// // An other way of doing it
// for (let i = 0; i < data.length; i++) {
//     let personEl = document.createElement('ul');
//     personEl.innerHTML = '<li>' + data[i].name + '</li>' +
//                         '<li>' + data[i].email + '</li>' +
//                         '<li>' + data[i].website + '</li>';
//     container.appendChild(personEl);
// }
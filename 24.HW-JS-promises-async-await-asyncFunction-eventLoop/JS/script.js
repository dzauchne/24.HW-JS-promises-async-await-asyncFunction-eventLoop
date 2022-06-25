//1
/*Перепишите через async await вместо .then/catch:*/

function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                response.json();
            } else {
                throw new Error(response.status);
            }
        })
}
loadJson("https://62b067e4e460b79df04504eb.mockapi.io/api/v1/users")
    .catch(alert);

async function loadJson2(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        console.log(await response.json());
    } else {
        throw new Error(response.status);
    }
}
loadJson2("https://62b067e4e460b79df04504eb.mockapi.io/api/v1/users")
    .catch(console.log);






/*2) Напишите функцию, которая в качестве параметра будет принимать url и по нему делать запрос на получение данных.Затем эти данные обрабатывать и выводить в консоль обязательно теория setTimeout / setInterval, Promise, async..await*/


//async..await
async function dataRequest(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        console.log(await response.json());
    } else {
        throw new Error(response.status);
    }

}
dataRequest("https://jsonplaceholder.typicode.com/todos/1")
    .catch(console.log);



//Promise: fetch-then
let dataFromAPI;
fetch('https://owen-wilson-wow-api.herokuapp.com/wows/random?results=10')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        dataFromAPI = data;
        sortFilms(data);
    });


function sortFilms(arrFilms) {
    console.log(arrFilms);
}



// try..catch
async function errorAnalysis() {
    const url = "https://owen-wilson-wow-api.herokuapp.com/wows/random?results=10";
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.error(err);
    }
}
let result = errorAnalysis();
console.log(result);
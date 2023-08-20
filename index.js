const btn = document.getElementById("btn");
const apiKey= "kPPpM9q1PQGaY3W65BBaLw==ksatOmifDUxI6qoP";
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


let jokeContent = document.getElementById("joke");
const options = {
  method: 'GET',
  headers:{'X-Api-Key':apiKey}
}


async function getJoke() {
  try {
    jokeContent.innerText = "Loading...";
    btn.disabled = true;
    btn.innerText = "wait";
    const request = await fetch(apiUrl, options)
    const rawData = await request.json();
 
    jokeContent.innerText = rawData[0].joke;
    
    btn.disabled = false;
    btn.innerText = "Tell me a joke";
  } catch (error) {
    console.log(error);
    btn.disabled = true;
  }
 

}

btn.addEventListener("click", getJoke);
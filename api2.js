//API con oauth

function onjson2(json){

    console.log("json ricevuto:"+ json);
const ricerca=document.querySelector('#ricerca');
    ricerca.innerHTML= '';


let num_results=json.data[0];

console.log(json);


const name=num_results.name;
const caption=document.createElement('span');
caption.textContent=name;
caption.setAttribute("class","title_api_2");
const id=num_results.id;

image_url='https://static-cdn.jtvnw.net/ttv-boxart/'+id+'.jpg';
const image=document.createElement('img');
image.src=image_url;
image.setAttribute("class","immagine_api_2");

const giochi = document.createElement('div');
giochi.classList.add('giochi');

giochi.appendChild(caption);
giochi.appendChild(image);

ricerca.appendChild(giochi);

}  

 
 function onResponse(response) {
    console.log('Risposta ricevuta');
    return response.json();
  }

function onTokenJson(json)
{
 token = json.access_token;
 console.log(token);
}



function onTokenResponse(response)
{
 return response.json();
}

//RICHIESTA TOKEN
const client_id='fwselx1rz0rhk3l298sqqzijwu864l';
const client_secret='gy0qwlwdq3heyyaqvt5btzhgsd80qr';

let token;


fetch("https://id.twitch.tv/oauth2/token",
{
    method: 'POST',
    body: 'client_id=fwselx1rz0rhk3l298sqqzijwu864l&client_secret=gy0qwlwdq3heyyaqvt5btzhgsd80qr&grant_type=client_credentials',
    headers:
    {
         'Content-Type': 'application/x-www-form-urlencoded'
    }

}).then(onTokenResponse).then(onTokenJson);



function onResponce(response){
   console.log('Json ricevuto correttamente');
   return response.json();
}




//RICHIESSTA API
function search1(event){
 
   event.preventDefault();

 const gioco_input = document.querySelector('#gioco2');
 const gioco_value = encodeURIComponent(gioco_input.value);

       fetch('https://api.twitch.tv/helix/games?name='+gioco_value,
   {
           headers: {
               'Authorization': 'Bearer ' + token,
               'Client-Id' : 'fwselx1rz0rhk3l298sqqzijwu864l' 
           }
       }).then(onResponce).then(onjson2);
       console.log('il token dentro la search è: '+token);
   }

const form2 = document.querySelector('#form2');
form2.addEventListener('submit', search1);
//fetch senza oauth

function onjson(json){

     console.log("json ricevuto:"+ json);
const shop=document.querySelector('#shop');
     shop.innerHTML= '';

let num_results=json;
console.log(num_results)
if(num_results.length===0){
     window.alert("Mi dispiace, nessun gioco trovato");
}

  
let i=0;
while(i<(num_results.length)){
   
               const doc=json[i];
            
               const titolo=doc.external;
               const title=document.createElement('span');
               title.textContent=titolo;
               const prezzo=doc.cheapest;
               const price=document.createElement('span');
               price.textContent=prezzo;
               const steam_id=doc.steamAppID;
               title.setAttribute("class","title");
          url_image="https://cdn.cloudflare.steamstatic.com/steam/apps/"+steam_id+"/capsule_sm_120.jpg";
    
          const image=document.createElement('img');
          image.src=url_image;
          image.setAttribute("class","immagine_shop");

          const sez_giochi = document.createElement('div');
          sez_giochi.classList.add('sez_giochi');

   
     sez_giochi.appendChild(title);
     if(steam_id==null){
          let textnode=document.createTextNode("immagine non disponibile");
          sez_giochi.appendChild(textnode);
     }
      sez_giochi.appendChild(image);
     sez_giochi.appendChild(price);  
     shop.appendChild(sez_giochi);

               i++;
     }
 }

function onResponce(response){
	console.log('Json ricevuto correttamente');
	return response.json();
}

function search(event){
  
	event.preventDefault();

  const gioco_input = document.querySelector('#gioco');
  const gioco_value = encodeURIComponent(gioco_input.value);

		fetch('https://www.cheapshark.com/api/1.0/games?title='+gioco_value)
          .then(onResponce).then(onjson);
	}

const form1 = document.querySelector('#form1');
form1.addEventListener('submit', search);
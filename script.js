function check_click(event){
  
const select=event.currentTarget;
const answerId=select.dataset.choiceId;
const questionId=select.dataset.questionId;
image=select.querySelector('img.checkbox');

for(const box_attuale of boxes){
  if(answerId!==box_attuale.dataset.choiceId && questionId===box_attuale.dataset.questionId){

select.style.backgroundColor="#cfe3ff";
image.src="images/checked.png";

  }if(box_attuale!==select&& answerId!==box_attuale.dataset.choiceId && questionId===box_attuale.dataset.questionId){
    box_attuale.style.backgroundColor="#f4f4f4";
    box_attuale.classList.add('opacita');
  }

}

change(event);
}


function change(event){
const select=event.currentTarget;
const answerId=select.dataset.choiceId;
const image=select.querySelector('img.checkbox');
const questionId=select.dataset.questionId;
for(const box_attuale of boxes){

if(answerId!==box_attuale.dataset.choiceId && questionId===box_attuale.dataset.questionId){

    const deselected=box_attuale.querySelector('img.checkbox');
    deselected.src="images/unchecked.png";
  
}else{
  select.classList.remove('opacita');
    image.src="images/checked.png";
   
}
}
addvec(questionId,answerId);
}


const boxes=document.querySelectorAll('.choice-grid div');
    for(const box of boxes){
     
     box.addEventListener('click',check_click);
     
            
    }


//result -----------------------------------------------------------------
let box_select={};
const result=document.querySelector('.box_res');
result.classList.add('hidden');


function addvec(questionId,answerId){
  box_select[questionId]=answerId;
  if(Object.keys(box_select).length===3){
    for(const box of boxes){
        box.removeEventListener('click',check_click);
        result.classList.remove('hidden');
    }
    Result();
  }


}

function Result(){

  const one=box_select['one'];
  const two=box_select['two'];
  const three=box_select['three'];
  let titolo;
  let contenuto;

if(one===two || one===three || one!==two && two!== three){
  titolo=RESULTS_MAP[one] ['title'];
  contenuto=RESULTS_MAP[one] ['contents'];
}
else{
  titolo=RESULTS_MAP[two] ['title'];
  contenuto=RESULTS_MAP[two] ['contents'];
}
mostra_res(titolo,contenuto);

}


function mostra_res(titolo,contenuto){


  const result_tit=document.querySelector('.titolo')
  const result_cont=document.querySelector('.contenuto');

  result_tit.textContent=titolo;
  result_cont.textContent=contenuto;
}



function restart(){
  const boxes=document.querySelectorAll('.choice-grid div');
for(const box of boxes){
  box.addEventListener('click',check_click);
  box.style.backgroundColor="#f4f4f4";
  box.classList.remove('opacita');
  const image=box.querySelector('.checkbox');
  image.src='images/unchecked.png';

}
result.classList.add('hidden');


box_select={};
}
const btn_reset=document.querySelector('.btnreset');
btn_reset.addEventListener('click',restart);
 
console.log(box_select);

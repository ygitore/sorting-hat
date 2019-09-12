var house = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
let random_house = Math.floor(Math.random()*house.length);
let studHouse = house[random_house];
const fid = [];
const studId = [];
function myFunction()
{
  var x = document.getElementById("formid");
  if (x.style.display === "none") 
  {
    x.style.display = "block";
  } 
  else 
  {
    x.style.display = "none";
  }
}
const printToDom = (divId, domString)=>{
  document.getElementById(divId).innerHTML += domString;
}
// const expelButton = ()=>{    
//   for (let i = 0; i < fid.length; i++) {
//     const element = fid[i];
//     if(element ===document.getElementById('sorting'))
//     document.getElementById("stud-info-container").style.display = 'none';
//   } 
// }
var i=0;
const myfun = ()=>{  
  var studName = document.getElementById('inlineFormInputGroup').value;
    const studentContainer = `<div class="stud-container" id ="stud-info-container-{i}">
        <h5>${studHouse}</h5>
        <h5>${studName}</h5>
        <a class = "remove-stud-info" href="#" value = "${i}" id="expelId">Expel</a>
      </div>`
    printToDom('stu-info',studentContainer);     
    i++;
};
document.getElementById('sorting').addEventListener('click',myFunction);
document.body.addEventListener('click', (event) => {
  if (event.target.id === 'expelId') {
      const buttonValue = event.target.value;
      const cardId = `stud-info-container-${buttonValue}`;
      const card = document.getElementById(cardId);
      card.parentNode.removeChild(card);
  }
  if (event.target.id === 'sortingId') {
      myfun();
  }
});

document.getElementById('sortingId').addEventListener('click', (event) => {
        event.preventDefault();
});
document.body.addEventListener('click', (event) => {
  if (event.target.id === 'expelId') {
      const buttonValue = event.target.value;
      const cardId = `stud-info-container-${buttonValue}`;
      const card = document.getElementById(cardId);
      card.parentNode.removeChild(card);
  }
  if (event.target.id === 'sortingId') {
      myfun();
  }
});

document.getElementById('sortingId').addEventListener('click', (event) => {
  event.preventDefault();
});

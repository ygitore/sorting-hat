var house = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
let random_house = Math.floor(Math.random()*house.length);
let studHouse = house[random_house];

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
var printToDom = (divId, domString)=>{
  document.getElementById(divId).innerHTML = domString;
}
var studName = document.getElementById('inlineFormInputGroup').value;
var myfun = ()=>{
  var studentContainer = `<div class="stud-main"><p>${studName}</p></div>`;
  printToDom('stu-info',studentContainer);
}
document.getElementById('sorting').addEventListener('click',myFunction);
document.getElementById('sortingId').addEventListener('click',(e)=>{  
  myfun();
});
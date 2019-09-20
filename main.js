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
const printToDom = (divId, domString)=>{
  document.getElementById(divId).innerHTML += domString;
}
var i=0;
const studentCardBuilder = ()=>{  
  var studName = document.getElementById('inlineFormInputGroup').value;
  let studentContainer = '<div class="row">'
  studentContainer =        `<div class="col-4" id = "each-columnId-${i}">
                              <div class="card" id="student-cardId">
                                <div class="card-body">
                                  <h6 class="card-title">${studName}</h6>
                                  <p class="card-text">${studHouse}</p>
                                </div>
                                <button type="button" class="btn btn-danger" value = "${i}" id="expelId" expel">Expel</button>
                              </div>
                            </div>
                          </div>`
    i++;
    printToDom('stu-info',studentContainer);   
};
document.getElementById('sorting').addEventListener('click',(event)=>{
  event.preventDefault();
  myFunction();  
});
document.getElementById('student-sortingId').addEventListener('click', (event) => {
  event.preventDefault();  
  const inputField = document.getElementById('inlineFormInputGroup');
  if(inputField.value != '')
  {
    studentCardBuilder();  
    inputField.value = '';   
    document.body.addEventListener('click', removes);
  }
});
const removes = (e)=>{  
  const parentElemen = document.getElementById('each-colId');
  if (event.target.id === 'expelId') {
    const valueOfEachClick = event.target.value;
    const eachStudInfoCardId = `each-columnId-${valueOfEachClick}`;
    const grabEachStudCardById = document.getElementById(eachStudInfoCardId);
    grabEachStudCardById.parentNode.removeChild(grabEachStudCardById);
  }
}
// your code here
document.addEventListener("DOMContentLoaded", () => {
  const form= document.querySelector('form');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    let inpt= document.getElementById('new-task-description').value;
    handle(inpt);
  } )
});
function handle(elem){
  let li= document.createElement('li');
  li.setAttribute('id', 'li')
  li.textContent= elem;
  document.getElementById('tasks').appendChild(li);
  let button= document.createElement('button');
  button.textContent='X'
  li.appendChild(button);
  button.addEventListener('click',(btn)=>btn.target.parentNode.remove())
  const select= document.createElement('select');
  select.setAttribute('id','sel');
  document.querySelector('form').appendChild(select);
  const opt0= document.createElement('option');
  opt0.innerText=''
  const opt1= document.createElement('option');
  opt1.innerText='high priority'
  const opt2= document.createElement('option');
  opt2.innerText='medium priority'
  const opt3= document.createElement('option');
  opt3.innerText='low priority'
  select.appendChild(opt0)
  select.appendChild(opt1)
  select.appendChild(opt2)
  select.appendChild(opt3)
  select.addEventListener('change',function(){
    document.getElementById('li').style.color= 'red'
  })
}

// document.getElementById('li').style.color= 'red'
// console.log(document.getElementById('new-task-description').value)
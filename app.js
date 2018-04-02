var todo=[];
var text=document.getElementById("myInput")
var button=document.getElementById("submit")
var firebaseRef=firebase.database().ref();


function add(){
  
  var innerText=document.getElementById('myInput').value;
  var li=document.createElement('li');
  var items=document.getElementById('item');
  if(innerText===' '){
    alert('You must write something')
    firebaseRef.push().set(null)
}
  else{
    li.innerText=innerText;
    items.appendChild(li);
   todo.push(innerText);
   document.getElementById('item').appendChild(li);
 
 firebaseRef.push().set(innerText);
 
document.getElementById('myInput').value=' ';
// delete button
 var span=document.createElement('span')
var dltBtn=document.createElement('button')
dltBtn.innerText='delete'
  span.className='close';
  span.appendChild(dltBtn)
li.appendChild(span);

for(var i=0;i<close.length;i++){
  close[i].onclick=function(){
 var span = this.parentElement;
 span.style.display='none';
}
}
 }
  }
// create delete button
var del=document.getElementById('delete')
var list=document.createElement('li')
for(var i=0;i<list.length;i++){
  // var span=document.createElement('span')
  var dltBtn=document.createElement('button')
  dltBtn.innerText='delete'
 span.appendChild(dltBtn)
 span.className='close';
 list[i].appendChild(span);
}

// delete on click on button
var close=document.getElementsByClassName('close');
for(var i=0;i<close.length;i++){
 close[i].onclick=function(){
style.display='none';
firebaseRef.child(li).removeValue();
 }
}


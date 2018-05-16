'use strict';

var row = "<tr><td></td><td></td><td></td><td></td></tr>";
var col = "<td></td>";
var field = document.getElementsByTagName('table');
var ButtonDown =  document.getElementsByClassName('field__addButton_down')[0];
var ButtonRight = document.getElementsByClassName('field__addButton_right')[0];
var deleteButton =  document.getElementsByClassName('field__deleteButton');


ButtonDown.addEventListener("click",onBottomButtonClick);
ButtonRight.addEventListener("click",onRightButtonClick);
deleteButton[0].addEventListener("click",onLeftButtonClick);
deleteButton[1].addEventListener("click",onTopButtonClick);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Add Buttons*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function onBottomButtonClick() {
    var row = document.getElementsByClassName('field')[0].getElementsByTagName('tr')[0].cloneNode(true);
    ButtonDown.style.top = parseInt(ButtonDown.style.top)+52+'px';
    field += document.getElementsByTagName('table')[0].getElementsByTagName('tbody')[0].appendChild(row);
}
function onRightButtonClick() {
    var z = document.createElement('td');
    z.innerHTML = col;
    ButtonRight.style.left = parseInt(ButtonRight.style.left)+52+'px';
	for(var i = 0; i< document.getElementsByClassName('field')[0].getElementsByTagName('tr').length; i++){
		document.getElementsByClassName('field')[0].getElementsByTagName('tr')[i].innerHTML += col;
	}	
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Delete Buttons*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function onTopButtonClick() {
    for(var i = 0 ; i < document.getElementsByClassName('field')[0].getElementsByTagName('tr').length;i++){
		document.getElementsByClassName('field')[0].getElementsByTagName('tr')[i].getElementsByTagName('td')[0].remove();
	}
    deleteButton[1].style.opacity=0;
	 ButtonRight.style.left = parseInt(ButtonRight.style.left)-52+'px';
}
function onLeftButtonClick() {
	document.getElementsByClassName('field')[0].getElementsByTagName('tr')[0].remove();
	 ButtonDown.style.top = parseInt(ButtonDown.style.top)-52+'px';
    deleteButton[0].style.opacity=0;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function showButtons(){ 
    deleteButton[0].style.visibility = 'visible';
	deleteButton[1].style.visibility = 'visible';
}

function hideButtons(){ 
    deleteButton[0].style.visibility = 'hidden';
	deleteButton[1].style.visibility = 'hidden';
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Onmouseover function*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////
field[0].onmouseover = function(event) {
	var target = event.target;
      if(document.getElementsByClassName('field')[0].getElementsByTagName('tr').length>1){
        deleteButton[0].style.visibility = 'visible';
    }
    if(document.getElementsByClassName('field')[0].getElementsByTagName('tr')[0].getElementsByTagName('td').length>1){
        deleteButton[1].style.visibility = 'visible';
    }
    deleteButton[1].style.opacity=1;
    deleteButton[0].style.opacity=1;
    deleteButton[0].style.top = parseInt(target.offsetTop)+56+'px';
	deleteButton[1].style.left = parseInt(target.offsetLeft)+56+'px';
}
field[0].onmouseout = function(){
    hideButtons();    
}
deleteButton[0].onmouseover = function(){
    this.style.visibility = 'visible';
}
deleteButton[0].onmouseout = function(){
    hideButtons();
}

deleteButton[1].onmouseover = function(){
    this.style.visibility = 'visible';
}
deleteButton[1].onmouseout = function(){
    hideButtons();
}

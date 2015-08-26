function edit(elem) {
    c = elem.parentNode.childNodes[0];
    c.focus();   
}

function delete_task(e){
    e.parentNode.remove();
}

function add_card(e){
	var el = document.createElement('div');
	el.setAttribute("class", "well");
	el.innerHTML = '<p contentEditable="true">Edit and replace text..</p><span class=" glyphicon glyphicon-trash pull-right" onclick="delete_task(this)"></span><span class=" glyphicon glyphicon-pencil pull-right" onclick="edit(this)" ></span>';
	e.parentNode.insertBefore(el, e);
}

function add_list( title, e){
	if(!title){title="Title not set";}
	var pan = document.createElement('div');
	pan.setAttribute("class","panel panel-primary typeTask type");
	pan.innerHTML ='<div class="panel-heading">'+title+'<span class="pop glyphicon glyphicon-cog pull-right"></span></div><div class="panel-body"><a class="btn btn-success" href="#" role="button" onclick="add_card(this)"> Add Card </a></div>';
	var loc = document.getElementById('main-container');
	loc.insertBefore(pan, document.getElementById('addbtn'));

}

function delete_all(){
	var del = document.getElementsByClassName('type');
	 while(del[0]) {
 	    	del[0].parentNode.removeChild(del[0]);
	 }
}

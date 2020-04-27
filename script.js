function newView(file,value){
  var content = file;
  $.get(content, function(data){
		document.getElementById("main").innerHTML = data;
	});
}
function resize(){
    var main = document.getElementById('main');
  if(window.innerWidth > 800){
    var myHeight = window.innerHeight;
    var newHeight = myHeight - 129;
    var newHeight = newHeight.toString().concat("px");
    main.style.height = newHeight;
  }else{
    main.style.height = "auto";
  }
}
function copy(that){
    var inp =document.createElement('input');
    document.body.appendChild(inp)
    inp.value =that.textContent
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
}
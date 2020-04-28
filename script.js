function newView(file,value){
  var content = file;
  $.get(content, function(data){
		document.getElementById("main").innerHTML = data;
	});
}
function resize(){
    var main = document.getElementById('main');
  if(window.innerWidth > 1000){
    var myHeight = window.innerHeight;
    var newHeight = myHeight - 277;
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
function toggleNav(){
  var nav = document.getElementById("nav");
  if(nav.style.display == "none"||nav.style.display == ""){
    nav.style.display = "block";
  }else{
    nav.style.display = "none";
  }
}
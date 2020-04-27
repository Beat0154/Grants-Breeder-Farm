function newView(file,value){
  var content = file;
  $.get(content, function(data){
		document.getElementById("main").innerHTML = data;
	});
}
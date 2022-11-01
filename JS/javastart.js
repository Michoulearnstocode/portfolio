var oldElement  = document.getElementById("container1");
var newElement = document.getElementById("container2");
  function replaceNode(){
    oldElement.parentNode.replaceChild(container2, container1);
     setTimeout(replaceNode, 100);};

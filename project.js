    function myFunction(imgs) {
      var expandImg = document.getElementById("expandedImg");
      var imgText = document.getElementById("imgtext");
      expandImg.src = imgs.src;
      imgText.innerHTML = imgs.alt;
      expandImg.parentElement.style.display = "block";
      
    }

    function bgFunction() {
   var element = document.body;
   element.classList.toggle("bg-color");
}
    
    function textFunction() {
      var element1 = document.getElementById("txt");
      element1.classList.toggle("txt-color");
  
}
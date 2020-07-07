// JavaScript Document
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {  
      
    this.classList.toggle("active"); // activate button
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) { // close if previously openned
      panel.style.maxHeight = null;
    } else {        
           
               acc[0].nextElementSibling.style.maxHeight = null;   
               acc[0].classList.remove("active");
               acc[1].nextElementSibling.style.maxHeight = null;   
               acc[1].classList.remove("active");
                   
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.classList.toggle("active"); // activate button
        
    }
     
  })
}



/*Script for sticky Header*/
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

/*Script to make the background of the current section grey*/
/*TODO: Make this better, cause this very ugly*/
window.addEventListener("scroll", function() {
  const elementTarget = document.getElementById("Projects");
  const elementBottom = elementTarget.offsetTop + elementTarget.offsetHeight;

  if (window.scrollY >= (elementTarget.offsetTop -45) && window.scrollY <= (elementBottom -80))
  {
    document.getElementById("ProjectsLink").style.backgroundColor = "#222222";
  }else
  {
    document.getElementById("ProjectsLink").style.backgroundColor = "transparent";
  }
});

window.addEventListener("scroll", function() {
  const elementTarget = document.getElementById("Technologies");
  const elementBottom = elementTarget.offsetTop + elementTarget.offsetHeight;

  if (window.scrollY >= (elementTarget.offsetTop -45) && window.scrollY <= (elementBottom -40))
  {
    document.getElementById("TechnologiesLink").style.backgroundColor = "#222222";
  }else
  {
    document.getElementById("TechnologiesLink").style.backgroundColor = "transparent";
  }
});

window.addEventListener("scroll", function() {
  const elementTarget = document.getElementById("AcademicAssignments");
  const elementBottom = elementTarget.offsetTop + elementTarget.offsetHeight;

  if (window.scrollY >= (elementTarget.offsetTop -45) && window.scrollY <= (elementBottom -40))
  {
    document.getElementById("AcademicAssignmentsLink").style.backgroundColor = "#222222";
  }else
  {
    document.getElementById("AcademicAssignmentsLink").style.backgroundColor = "transparent";
  }
});

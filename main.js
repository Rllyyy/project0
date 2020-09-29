/*Script for sticky Header*/
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

window.addEventListener('scroll', function () {
  const elementProjects = document.getElementById('Projects');
  const elementProjectsBottom = elementProjects.offsetTop + elementProjects.offsetHeight;

  const elementTechnologies = document.getElementById('Technologies');
  const elementTechnologiesBottom = elementTechnologies.offsetTop + elementTechnologies.offsetHeight;

  const elementAcademicAssignments = document.getElementById('AcademicAssignments');
  const elementAcademicAssignmentsBottom = elementAcademicAssignments.offsetTop + elementAcademicAssignments.offsetHeight;

  //set all backgrounds to transparent
  document.getElementById('ProjectsLink').style.backgroundColor = 'transparent';
  document.getElementById('TechnologiesLink').style.backgroundColor = 'transparent';
  document.getElementById('AcademicAssignmentsLink').style.backgroundColor = 'transparent';

  if (window.scrollY >= elementProjects.offsetTop - 45 && window.scrollY <= elementProjectsBottom - 40) {
    document.getElementById('ProjectsLink').style.backgroundColor = '#222222';
  } else if (window.scrollY >= elementTechnologies.offsetTop - 45 && window.scrollY <= elementTechnologiesBottom - 40) {
    document.getElementById('TechnologiesLink').style.backgroundColor = '#222222';
  } else if (window.scrollY >= elementAcademicAssignments.offsetTop - 45 && window.scrollY <= elementAcademicAssignmentsBottom - 40) {
    document.getElementById('AcademicAssignmentsLink').style.backgroundColor = '#222222';
  }
});

/* let buttons = document.querySelectorAll('[id^="btn]'); */
const btn = document.getElementById('btn');

btn.addEventListener('mouseenter', function (e) {
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;

  let ripples = document.createElement('span');
  ripples.style.left = x + 'px';
  ripples.style.top = y + 'px';
  btn.appendChild(ripples);
  console.log('Hello');
  setTimeout(() => {
    ripples.remove();
  }, 1000);
});

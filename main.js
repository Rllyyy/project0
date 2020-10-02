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

  if (window.scrollY >= elementProjects.offsetTop - 45 && window.scrollY <= elementProjectsBottom - 80) {
    document.getElementById('ProjectsLink').style.backgroundColor = '#222222';
  } else if (window.scrollY >= elementTechnologies.offsetTop - 100 && window.scrollY <= elementTechnologiesBottom - 40) {
    document.getElementById('TechnologiesLink').style.backgroundColor = '#222222';
  } else if (window.scrollY >= elementAcademicAssignments.offsetTop - 45 && window.scrollY <= elementAcademicAssignmentsBottom - 40) {
    document.getElementById('AcademicAssignmentsLink').style.backgroundColor = '#222222';
  }
});

//Adds effect to the landing button by adding span elements
const btn = document.getElementById('btn');

btn.addEventListener('mouseenter', function (e) {
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;

  let ripples = document.createElement('span');
  ripples.style.left = x + 'px';
  ripples.style.top = y + 'px';
  btn.appendChild(ripples);
  setTimeout(() => {
    ripples.remove();
  }, 1000);
});

//Makes the Inkscape-Icon go from one picture (transparent) to the other picture (not transparent)
const InkscapeIconTransparent = document.getElementById('InkscapeIconTransparent');
const InkscapeIcon = document.getElementById('InkscapeIcon');

InkscapeIconTransparent.addEventListener('mouseenter', function () {
  InkscapeIcon.style.opacity = '1';
  InkscapeIconTransparent.style.opacity = '0';

  InkscapeIconTransparent.addEventListener('mouseleave', function () {
    InkscapeIcon.style.opacity = '0';
    InkscapeIconTransparent.style.opacity = '1';
  });
});

//Makes the Markdown-Icon go from one picture (transparent) to the other picture (not transparent)
const MarkdownIconTransparent = document.getElementById('MarkdownIconTransparent');
const MarkdownIcon = document.getElementById('MarkdownIcon');

MarkdownIconTransparent.addEventListener('mouseenter', function () {
  MarkdownIcon.style.opacity = '1';
  MarkdownIconTransparent.style.opacity = '0';

  MarkdownIconTransparent.addEventListener('mouseleave', function () {
    MarkdownIcon.style.opacity = '0';
    MarkdownIconTransparent.style.opacity = '1';
  });
});

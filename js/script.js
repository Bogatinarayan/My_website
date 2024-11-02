
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  }, false);
  document.addEventListener('keydown', function(e) {
    // Disable F12 (Developer Tools)
    if (e.key === 'F12') {
        e.preventDefault();
        showAlert('Developer tools are disabled');
    }
 (Ctrl + U)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        showAlert('View source is disabled');
    }
  
  (Ctrl + Shift + I)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        showAlert('Inspect mode is disabled');
    }
  
    // Disable Ctrl + Shift + C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        showAlert('Inspect mode is disabled');
    }
  
    // Disable Ctrl + Shift + J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        showAlert('Console is disabled');
    }
  
    // Disable Ctrl + Shift + K (Console for Firefox)
    if (e.ctrlKey && e.shiftKey && e.key === 'K') {
        e.preventDefault();
        showAlert('Console is disabled');
    }
  
    // Disable Ctrl + Shift + S (Save As)
    if (e.ctrlKey && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        showAlert('Save as is disabled');
    }
  
    // Disable Ctrl + S (Save Page As)
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        e.preventDefault(); // Prevent the default save action
        showAlert('Saving this page is disabled.'); // Notify the user
    }
  
    // Disable common screenshot shortcuts
  
    // Windows: Ctrl + PrintScreen
    if (e.ctrlKey && e.key === 'PrintScreen') {
        e.preventDefault();
        showAlert('Screenshots are disabled.');
    }
  
    // Windows: Alt + PrintScreen
    if (e.altKey && e.key === 'PrintScreen') {
        e.preventDefault();
        showAlert('Screenshots are disabled.');
    }
  
    // Windows: Win + Shift + S (Snip & Sketch)
    if (e.key === 'S' && e.shiftKey && e.metaKey) { // 'metaKey' represents the Windows key
        e.preventDefault();
        showAlert('Screenshots are disabled.');
    }
  
    // Mac: Cmd + Shift + 3 (Full screen)
    if (e.key === '3' && e.shiftKey && e.metaKey) { // 'metaKey' is Cmd on Mac
        e.preventDefault();
        showAlert('Screenshots are disabled.');
    }
  
    // Mac: Cmd + Shift + 4 (Partial screen)
    if (e.key === '4' && e.shiftKey && e.metaKey) {
        e.preventDefault();
        showAlert('Screenshots are disabled.');
    }
  
    // Additional common shortcut: Ctrl + Shift + PrtSc
    if (e.ctrlKey && e.shiftKey && e.key === 'PrintScreen') {
        e.preventDefault();
        showAlert('Screenshots are disabled.');
    }
  });
  
  // Image Object Detection Method (reloads the page when DevTools are opened)
  (function() {
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function() {
            // Reload the page when DevTools are opened
            window.location.reload();
        }
    });
    console.log(element); // This triggers the detection mechanism
  })();
  
  // Function to show alert and automatically hide it after 1000 milliseconds
  function showAlert(message) {
    // Create alert div
    const alertDiv = document.createElement('div');
    alertDiv.textContent = message;
    alertDiv.classList.add('custom-alert');
    document.body.appendChild(alertDiv);
  
    // Automatically hide the alert after 1000 milliseconds
    setTimeout(() => {
        alertDiv.style.opacity = '0'; // Fade out
        setTimeout(() => {
            document.body.removeChild(alertDiv); // Remove from DOM
        }, 500); // Wait for fade-out transition to finish
    }, 1000); // Show for 1000 milliseconds
  }
  



var typed = new Typed(".typing", {
  strings: ["", "Web Developer", "Cyber Security Expert"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// Aside
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let k = 0; k < totalSection; k++) {
      allSection[k].classList.remove("back-section");
    }
    //Loop for removing active class
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    //Adding active class
    this.classList.add("active");
    showSection(this); //Function call
    //Nav click event - Hiding the nav menu
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function showSection(element) {
  //Loop for removing active class
  for (let k = 0; k < totalSection; k++) {
    allSection[k].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

//For Hire me section
document.querySelector(".hire-me").addEventListener("click", function () {
  showSection(this);
  updateNav(this);
});

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

//For Nav Toggler Button
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
}

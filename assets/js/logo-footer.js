//Keep logo in all main divs
const headerHTML = `
    <header id="logo" class= "container-fluid">
        <div class="row">
            <div class="col-6">
                <a class="logo" href="index.html">
                    <img src="assets/images/homepage/logo.webp" alt="The planet Earth" id="logoimage" srcset="assets/images/homepage/logo.webp">
                </a>
            </div>
        </div>
    </header>
`;

const headerDivs = document.querySelectorAll('.box-logo');

headerDivs.forEach(div => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = headerHTML;
  const headerElement = tempDiv.firstElementChild; 

  div.prepend(headerElement);
});

// Keep footer in all main divs
const footerHTML = `
    <footer class="container-fluid" id="footer">
        <div class="row">
            <div class="logo-link col-12">
                <a class="social-media-link" href="https://github.com/silviyahristova" aria-label="GitHub" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a class="social-media-link" href="https://www.linkedin.com/in/silviyahristova93/" aria-label="LinkedIn" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
            <div class="text-centre col-12">
                <span>Made by Silviya Hristova</span>
            </div>
        </div>
    </footer>
`;

const footerDivs = document.querySelectorAll('.box-footer');

footerDivs.forEach(div => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = footerHTML; 
  const footerElement = tempDiv.firstElementChild; 
  div.appendChild(footerElement);
});

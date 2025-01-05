//Keep logo in all main divs
const headerHTML = `
    <header id="logo">
        <div class="row">
            <div class="col-6">
                <a class="logo" href="index.html">
                    <img
                    src="assets/images/homepage/logo.webp"
                    alt="The planet Earth"
                    id="logoimage"
                    srcset="assets/images/homepage/logo.webp" />
                </a>
            </div>
        </div>
    </header>
`;

const divs = document.querySelectorAll('.box-logo');

divs.forEach(div => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = headerHTML;
  const headerElement = tempDiv.firstElementChild; 

  div.prepend(headerElement);
});

// Keep footer in all main divs
const footerHTML = `
    <footer class="container-fluid" id="footer">
        <div class="logo-link">
            <a
                class="social-media-link"
                href="https://github.com/silviyahristova"
                aria-label="GitHub"
                target="_blank"
                ><i class="fa-brands fa-github"></i>
            </a>
            <a
                class="social-media-link"
                href="https://www.linkedin.com/in/silviyahristova93/"
                aria-label="LinkedIn"
                target="_blank"
                ><i class="fa-brands fa-linkedin-in"></i>
            </a>
        </div>
        <div class="text-centre">
            <span>Made by Silviya Hristova</span>
        </div>
    </footer>
`;

const footerDiv = document.querySelectorAll('.box-footer');

divs.forEach(div => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = footerHTML; 
  const footerElement = tempDiv.firstElementChild; 
  div.appendChild(footerElement);
});

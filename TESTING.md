# Solar system Quiz Game Testing

## Table of content
* [**Manual Testing**](#manual-testing)
* [**Browser Compatibility**](#browser-compatibility)
* [**Responsiveness**](#responsiveness)
* [**Performance**](#performance)
* [**Code Validation**](#code-validation)
* [**Bugs**](#bugs)
* [**Accessibility**](#accessibility)

## Browser Compatibility

| **Browser tested** | **Intended appearance** | **Intended responsiveness** | 
|--------------------|-------------------------|-----------------------------|
| Google Chrome      |Very Good|Very Good|
| Mozzila            |Very Good|Very Good|
| Firefox            |Very Good|Very Good|
| Microsoft edge     |Good|Good|
| Safari*            |Good|Good|

* There was issue regarding Mozzila browser. More details can be found [here](#resolved-bugs).
* There were no issues found regarding the appearance and responsiveness on the rest of the browsers.

[Back to top](#table-of-content)

## Responsiveness

| **Device Tested** | **Site responsive** | **Renders as expected** | 
|-------------------|---------------------|-------------------------|
| Samsung Galaxy S21 Ultra|Very Good|Yes|
| Iphone 5s/6s      |Very Good|Yes|
| Ipad              |Very Good|Yes|
| Samsung Galaxy Tab 3|Very Good|Yes|
| Desktop           |Very Good|Yes|
| Laptop            |Very Good|Yes|
| Google Dev Tools  |Very Good|Yes|

* There were no issues found regarding the responsiveness.

[Back to top](#table-of-content)

## Performance

<details><summary>index.html</summary>

<img src="assets/images/testing/index-desktop-performance.png">, <img src="assets/images/testing/index-mobile-performance.png">
</details>

<details><summary>contact.html</summary>

<img src="assets/images/testing/contact-desktop-performance.png">, <img src="assets/images/testing/contact-mobile-performance.png">
</details>

<details><summary>404.html</summary>

<img src="assets/images/testing/404-desktop-performance.png">, <img src="assets/images/testing/404-mobile-performance.png">
</details>

* The site was tested through Google Chrome Dev Tools - Lighthouse to check each of the pages for performance, accessibility, best practices, and SEO.
* On mobile devices the site is loading a bit slower than on large screen devices. This is due to large layout shifts. Now no further action is taken, but improvements will be made in the future.

[Back to top](#table-of-content)

## Code Validation

### HTML Validation

<details><summary>Index.html</summary>

<img src="assets/images/testing/index-validation.png">
</details>

<details><summary>Contact.html</summary>

<img src="assets/images/testing/contact-validation.png">
</details>

<details><summary>404.html</summary>

<img src="assets/images/testing/404-validation.png">

</details>

* The validation site [W3C HTML Validator](https://validator.w3.org/nu/) was used to validate the HTML. 
* Some errors were found and resolved. More details can be found [here](#resolved-bugs).

### CSS Validation

<details><summary>CSS Test</summary>

<img src="assets/images/testing/css-validation.png">

<img src="assets/images/testing/css-warning-validation.png">

</details>

* The validation site [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) was used to validate the CSS.
* No errors were found. There were 7 warnings regarding vendor extensions and pointer-events. but doesn`t affect the website.

### JavaScript Validation

<details><summary>Game.js</summary>

<img src="assets/images/testing/gamejs-validation.png">

</details>

<details><summary>Email.js</summary>

<img src="assets/images/testing/emailjs-validation-bug.png">

</details>

<details><summary>Server.js</summary>

<img src="assets/images/testing/serverjs-validation.png">

</details>

<details><summary>Question-array.js</summary>

<img src="assets/images/testing/questionarray-validation.png">

</details>

<details><summary>Logo-footer.js</summary>

<img src="assets/images/testing/logofooterjs-validation.png">

</details>

* The validation site [JSHint](https://jshint.com/) was used to validate the JavaScript files.
* Some errors were found and resolved. More details can be found [here](#resolved-bugs).

### Link Checker

<details><summary>Link Test</summary>



</details>

* The validation site [W3C Link Checker](https://validator.w3.org/checklink) was used to check the website for broken links.
* Some errors were found and resolved. More details can be found [here](#resolved-bugs).

[Back to top](#table-of-content)

## Accessibility

### Color contrast

* The main colors, used for the website, have very good contrast. They were tested with [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/).

<img src="assets/images/testing/contrast1.png" width=250px>, <img src="assets/images/testing/contrast3.png" width=250px>, <img src="assets/images/testing/contrast5.png" width=250px>

### WAVE Web Accessibility Evaluation Tools

<details><summary>Home page</summary>

<img src="assets/images/testing/indexpage-wave.png">

</details>

<details><summary>Contact page</summary>

<img src="assets/images/testing/contactpage-wave.png">

</details>

<details><summary>404 page</summary>

<img src="assets/images/testing/404page-wave.png">

</details>

* On all pages same alert came up - that there is more than 1 redundant link. This is, because some links are navigating users to the same page, but was made to be user friendly and intuitive as possible for the user. No further action was taken.

Back to [**README.md**](README.md#testing)
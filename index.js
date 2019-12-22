// index.js

let paragraph = document.getElementById('paragraph');

console.log(paragraph); // <== <p id="paragraph">What is your name?</p>
// In the JavaScript above, to select the paragraph element, we will use the document.getElementById() method. This method returns the selected p node.

// We can also select an element by its className. But be careful with this method. It will always return an array of DOM nodes, no matter if it finds one or more elements in the code.

let links = document.getElementsByClassName('link');

console.log(links); // <== HTMLCollection [a#google-link.link, google-link: a#google-link.link]
                    // 0: a#google-link.link
                    // length: 1
                    // google-link: a#google-link.link
                    // __proto__: HTMLCollection

let link = document.querySelector('a'); 

link.setAttribute('href', 'http://www.google.com');                    
link.setAttribute('target', '_blank');


paragraph.removeAttribute('id');
paragraph.setAttribute('class', 'paragraph');
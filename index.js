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


// paragraph.removeAttribute('id');
// paragraph.setAttribute('class', 'paragraph');
// paragraph.removeAttribute('class');

let h2Tag = document.createElement('h2');
console.log(h2Tag); // <== <h2></h2>
h2Tag.innerHTML = "Elephant";
let parent = document.getElementsByTagName('body')[0];
parent.appendChild(h2Tag);

let text = document.createTextNode('This text is created dynamically 🏆 🎯');
parent.appendChild(text);

let text2 = document.createTextNode('Hi there! I am using JavaScript');
let p2 = document.createElement('p');
p2.appendChild(text2);
console.log(p2);
parent.appendChild(p2);

let h1Tag = document.createElement('h1');
h1Tag.innerHTML = "Heading 1 - comes before Heading 2";
parent.insertBefore(h1Tag, h2Tag);

let input1 = document.createElement('input');
let button1 = document.getElementById('add-item-button');
parent.insertBefore(input1, button1)

let theParagraph = document.getElementById("paragraph");
parent.removeChild(theParagraph);

parent.removeChild(h2Tag);
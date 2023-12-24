import "./index.css";
import JS_IMG from "./assets/javascript-logo.png";

console.log('Hello World!');

const img = document.createElement("img");
img.src = JS_IMG;
img.className = "javaScript";
const loveJavaScript = document.createElement("h1");
loveJavaScript.textContent = 'I love JavaScript';
document.body.append(loveJavaScript);
document.body.append(img);


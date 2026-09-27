/* =========================
   LESSON DATA
========================= */

const lessons = [
    {
        title: "01. HTML Structure",
        description: "Every HTML document follows a basic structure. These elements tell the browser how a webpage should be organized.",
        syntax: `<!DOCTYPE html>
<html>
<head>
    <title>Happy Birthday, Fatima</title>
</head>
<body>
    This is my birthday gift for you, please accept it with love. I hope you like it. Happy Birthday, Fatima! 
</body>
</html>`,
        html: `<h1>Hello World</h1>
<p>This is my first webpage.</p>`,
        css: `h1 {
    color: blue;
}

p {
    font-size: 18px;
}`,
        js: `console.log("Hello from JavaScript!");`
    },
    {
        title: "02. Headings & Paragraphs",
        description: "Headings are used for titles and subtitles, while paragraphs are used for blocks of text.",
        syntax: `<h1>Basahin mo 'yong</h1>
<h2>Mga nakalagay sa Syntax at Live Preview</h2>
<p>Kasi andito messages ko</p>`,
        html: `<h1>My Website</h1>
<h2>About Me</h2>
<p>Welcome to my webpage!</p>`,
        css: `h1 {
    color: darkblue;
}

h2 {
    color: gray;
}

p {
    font-size: 18px;
}`,
        js: `console.log("Headings and paragraphs");`
    },
    {
        title: "03. Text Formatting",
        description: "HTML provides elements that can make text bold or emphasize important words.",
        syntax: `<strong>Ikaw yung pinaparinggan ko palagi, hindi ko alam kung nahahalata mo</strong>
<em>Lahat ng dinescribe ko na nafefeel ko, patungkol sa'yo 'yon lahat. And yes it's you, and it has always been you</em>`,
        html: `<h1>Text Formatting</h1>

<p>
    This is <strong>important</strong> text.
</p>
<p>
    This is <em>emphasized</em> text.
</p>`,
        css: `strong {
    color: red;
}

em {
    color: green;
}`,
        js: `console.log("Text formatting");`
    },
    {
        title: "04. Lists",
        description: "Lists organize information into groups. HTML supports ordered and unordered lists.",
        syntax: `<ul>
    <li>Check mo sa baba</li>
</ul>

<ol>
    <li>yung list</li>
</ol>`,
        html: `<h1>I want to know more about you</h1>

<ul>
    <li>tungkol sa buhay mo</li>
    <li>sa mga likes & dislikes mo</li>
    <li>at kung ano ano pa, basta tungkol sa'yo</li>
</ul>

<h2>My Top 3 things that I love about you</h2>
<ol>
    <li>Your Pretty Face</li>
    <li>Ka-humor ko</li>
    <li>Masaya kausap, kahit medyo busy ka</li>
</ol>`,
        css: `li {
    margin: 8px;
    font-size: 18px;
}`,
        js: `console.log("Lists example");`
    },
    {
        title: "05. Page Structure",
        description: "Semantic elements describe the different parts of a webpage such as the header, navigation, main content, and footer.",
        syntax: `<header>
    Header content
</header>

<nav>
    Navigation
</nav>

<main>
    Main content
</main>

<footer>
    Footer
</footer>`,
        html: `<header>
    <h1>Wish ko sa'yo sana</h1>
</header>

<nav>
    Maging Successful | Mabawasan Problema mo sa Buhay | at Mas lalo ka pang Gumanda
</nav>

<main>
    <p>Tatlong wish kase I love you(WOWWWW)HAHAHAH</p>
</main>

<footer>
    <p>From: Shan</p>
</footer>`,
        css: `header {
    background: lightblue;
    padding: 20px;
}

nav {
    padding: 15px;
    background: lightgray;
}

main {
    padding: 20px;
}

footer {
    background: #222;
    color: white;
    padding: 15px;
}`,
        js: `console.log("Page structure");`
    },
    {
        title: "06. Sections",
        description: "Sections organize related content into meaningful parts of a webpage.",
        syntax: `<section>
    <h2>Title</h2>
    <p>Content</p>
</section>

<article>
    Article content
</article>

<aside>
    Related content
</aside>`,
        html: `<section>
    <h2>About Me</h2>
    <p>pogi(wrong), may pangarap sa buhay, makakasundo mo sa lahat</p>
</section>

<article>
    <h2>Mga kaya kong gawin</h2>
    <p>Ipagmalaki ka kahit anliit mo, dadamayan kita sa lahat baby</p>
</article>

<aside>
    <p>Related topic: CSS</p>
</aside>`,
        css: `section,
article,
aside {
    padding: 15px;
    margin-bottom: 10px;
    border: 1px solid gray;
}`,
        js: `console.log("Sections example");`
    },
    {
        title: "07. Containers",
        description: "The div element is a general-purpose container used to group and organize HTML elements.",
        syntax: `<div>
    Content inside the container
</div>`,
        html: `<div class="card">
    <div>
        <h2>Ito ay confession ko sa'yo</h2>
        <p>Na dinaan ko sa HTML tutorial na sinabi ko na ituturo ko sa'yo</p>
    </div>
</div>`,
        css: `.card {
    background: pink;
    padding: 25px;
    border-radius: 10px;
    text-align: center;
}`,
        js: `console.log("Div container");`
    },
    {
    title: "08. Links & Images",
    description: "Links allow users to navigate to other pages, while images display visual content.",
    syntax: `<a href="https://www.w3schools.com/">
    Visit W3Schools
</a>

<img src="ikaw.jpg" alt="Ikaw">

<img src="nic.jpg" alt="Nic">`,
    html: `<h1>Links and Images</h1>

<a href="https://www.instagram.com/shonrvei/" target="_blank">
    Visit my Profile
</a>

<br><br>

<img
    src="ikaw.jpg"
    alt="Ikaw">

<img
    src="nic.jpg"
    alt="Nic">`,
    css: `a {
    color: #ff1493;
    font-size: 18px;
}

img {
    display: block;
    width: 100%;
    height: auto;
    margin-top: 15px;
    border-radius: 8px;
}
}`,
    js: `console.log("Links and images");`
},
    {
        title: "09. Forms",
        description: "Forms allow users to enter information and interact with a webpage.",
        syntax: `<form>
    <label>Name</label>
    <input type="text">

    <button>Submit</button>
</form>`,
        html: `<h1>Simple Form</h1>

<form>

    <label>May chance ba ako:33 :</label>
    <input type="text" />

    <br><br>

    <label>Kung wala, bakit?</label>
    <input type="email" />

    <br><br>

    <button type="button">
        Submit
    </button>

</form>`,
        css: `input {
    padding: 8px;
    margin-left: 10px;
}

button {
    padding: 8px 15px;
    cursor: pointer;
}`,
        js: `console.log("Form example");`
    },
    {
        title: "10. Mini Project",
        description: "This final example combines several HTML elements to create a simple webpage.",
        syntax: `<header>
    <h1>My Website</h1>
</header>

<main>
    <section>
        <h2>About</h2>
        <p>Content</p>
    </section>
</main>

<footer>
    Footer
</footer>`,
        html: `<header>
    <h1>Lo Que Siento</h1>
    <p>Andito na ang final message</p>
</header>

<main>

    <section>
        <h2>Thank you for existing, Fatima</h2>

        <p>
            Hindi ko alam kung nahahalata mo e, pero hindi mo ba ramdam na ikaw pinaparinggan ko palagi kahit na madalas akong magbigay ng hint. Pero ito, nilahad ko na lahat ng nafefeel ko sa'yo. Sa ngayon may nahanap ka na ata kaya masaya ako para sa'yo, masaya ako kung masaya ka^^.
        </p>
    </section>

    <section>
        <h2>Aware naman ako na wala akong chance</h2>

        <ul>
            <li>Gusto ko lang maging honest sa'yo</li>
            <li>At nabanggit mo na noon na hindi ka pa ulit ready sa rs</li>
            <li>But who knows(CHARIZZZZ)</li>
        </ul>
    </section>

</main>

<footer>
    <p>From: Shan</p>
</footer>`,
        css: `body {
    font-family: Arial;
}

header {
    background: #1e293b;
    color: white;
    padding: 25px;
    text-align: center;
}

main {
    padding: 25px;
}

section {
    margin-bottom: 20px;
}

footer {
    background: #1e293b;
    color: white;
    padding: 15px;
    text-align: center;
}`,
        js: `console.log("Mini project loaded!");`
    }
];

/* =========================
   DOM REFERENCES
========================= */

const lessonButtons = document.querySelectorAll(".lesson");
const lessonTitle = document.getElementById("lessonTitle");
const lessonDescription = document.getElementById("lessonDescription");
const syntaxCode = document.getElementById("syntaxCode");
const htmlCode = document.getElementById("htmlCode");
const cssCode = document.getElementById("cssCode");
const jsCode = document.getElementById("jsCode");
const preview = document.getElementById("preview");
const runButton = document.getElementById("runButton");
const resetButton = document.getElementById("resetButton");
const tabs = document.querySelectorAll(".tab");

let currentLesson = 0;

function showEditor(tabName) {
    tabs.forEach(tab => {
        const isActive = tab.dataset.tab === tabName;
        tab.classList.toggle("active", isActive);
    });

    [htmlCode, cssCode, jsCode].forEach(textarea => {
        const isVisible = textarea.id === `${tabName}Code`;
        textarea.classList.toggle("active-editor", isVisible);
    });
}

function loadLesson(index) {
    currentLesson = index;
    const lesson = lessons[index];

    lessonTitle.textContent = lesson.title;
    lessonDescription.textContent = lesson.description;
    syntaxCode.textContent = lesson.syntax;
    htmlCode.value = lesson.html;
    cssCode.value = lesson.css;
    jsCode.value = lesson.js;

    lessonButtons.forEach((button, buttonIndex) => {
        button.classList.toggle("active", buttonIndex === index);
    });

    showEditor("html");
    runCode();
}

function runCode() {
    const html = htmlCode.value;
    const css = cssCode.value;
    const js = jsCode.value;

    const completePage = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                ${css}
            </style>
        </head>
        <body>
            ${html}
            <script>
                ${js}
            <\/script>
        </body>
        </html>
    `;

    preview.srcdoc = completePage;
}

function resetCode() {
    const lesson = lessons[currentLesson];
    htmlCode.value = lesson.html;
    cssCode.value = lesson.css;
    jsCode.value = lesson.js;
    runCode();
}

lessonButtons.forEach((button, index) => {
    button.addEventListener("click", () => loadLesson(index));
});

tabs.forEach(tab => {
    tab.addEventListener("click", () => showEditor(tab.dataset.tab));
});

runButton.addEventListener("click", runCode);
resetButton.addEventListener("click", resetCode);

showEditor("html");
loadLesson(0);

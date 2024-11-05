const nav = document.createElement('nav');
nav.className = 'navbar';
document.body.append(nav);

const navLogo = document.createElement('h1');
navLogo.textContent = "company";
nav.append(navLogo);

const ul = document.createElement("ul"); // Create ul outside the loop

const items = [
    { text: "Home", url: "/home" },
    { text: "About", url: "about.html" },
    { text: "Contact", url: "/contact" }
];

items.forEach(item => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = item.text;
    link.href = item.url;

    li.append(link);
    ul.appendChild(li); // Append each li to ul
});

nav.appendChild(ul); // Append ul to nav once

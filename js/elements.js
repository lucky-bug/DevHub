let elements = document.getElementsByTagName('element');
let reader = new FileReader();

for (let element of elements) {
    fetch(`elements/${element.getAttribute('name')}.html`)
        .then(response => response.text())
        .then(text => {
            element.outerHTML = text;
        });
}
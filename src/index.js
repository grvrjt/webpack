function helloWorld(){
    const element= document.createElement('div');
    element.innerHTML = 'Hello Gaurav Webpack';
    element.classList.add("header");
    return element;
}

document.body.appendChild(helloWorld());
function helloWorld(){
    const element= document.createElement('div');
    element.innerHTML = 'Hello Gaurav Webpack';
    return element;
}

document.body.appendChild(helloWorld());
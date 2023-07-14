//add function wrapping to reduce risks of using eval() directyly. it will minimize injection attacks.
function executeCode(code){
    try{
        return new function(code)();
    }catch(error){
        console.error(error);
    }

}
function run(){
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode

    //create a new <style> element and set its content to the CSS code
    let style = document.createElement("style");
    style.innerHTML = cssCode;
    
    //append the <style> element to the <head> of the iframe document
    output.contentDocument.appendChild(style);

    output.contentWindow.eval(jsCode);
    
}
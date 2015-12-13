// TODO:
// - accept multiple form inputs, modularity
// - modify inputs to account for all caps cases

var elements = document.getElementsByTagName('*');

var find = "Derek"
var nreplace = "WUTTTT!!!??!?!??!!"

for (var i = 0; i < elements.length; i++) {
    
    var element = elements[i];
    // var new_text = element.textContent.split("Derek").join("WUTTTT!!!??!?!??!!");

    // if (element.textContent !== text){
    //     element.textContent = element.text
    // }

    if (element.nodeType == 3) { // text node
        if (element.indexOf(find) != -1) {
            element.textContent = element.textContent.replace(find, nreplace);
        }
    }
}
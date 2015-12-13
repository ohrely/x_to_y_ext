// TODO:
// - accept multiple form inputs, modularity
// - modify inputs to account for all caps cases

var elements = document.getElementsByTagName('*');

var find = "Monty"
var nreplace = "I love"

for (var i = 0; i < elements.length; i++) {
    
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            if (node.textContent.indexOf(find) != -1) {
                newNode = node.textContent.replace(find, nreplace);
                element.replaceChild(document.createTextNode(newNode), node);
            }
        }
    }
}

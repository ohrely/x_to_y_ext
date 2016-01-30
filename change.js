/* Given text to change and new text, modify the DOM. */

/* Creates treeWalker just for text nodes, modifies text in those nodes. */
function walkTree(rootNode) {
    var treeWalker = document.createTreeWalker(
        rootNode,
        NodeFilter.SHOW_TEXT, // whatToShow
        null, // filter: further filtering of nodes that pass whatToShow check
        false // entityReferenceExpansion: discard subtree when node is discarded?   
    ),
    node;

    while (node = treeWalker.nextNode()) {
        modText(node);
    }
}


/*
Calls findReplace on individual nodes.
*/
function modText(textNode) {
    textNode.nodeValue = findReplace(textNode.nodeValue);
    console.log(textNode);
}


/*
Modifies text nodes. 

TODO: modularity - should be built with find & replace variables from external source.
TODO: handle cases (caps)
*/
function findReplace(text) {

    // Retrieve from storage
    var find = "Python";
    var replace = "LAMP";

    text = text.replace(find, replace);

    return text;
}


function doItAll(doc){
    walkTree(doc.body);
}

doItAll(document);

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

TODO: condensing - does this make sense as a seperate function, or should it be combined with replaceText?
*/
function modText(textnode) {
    textNode.nodeValue = findReplace(textnode.nodeValue);
}


/*
Modifies text nodes. 

TODO: modularity - should be built with find & replace variables from external source.
TODO: handle cases
*/
function findReplace(text) {
    var find = "Python";
    var replace = "Lamp";

    text = text.replace(find, replace);

    return text
}


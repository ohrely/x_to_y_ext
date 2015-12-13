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


/* Modifies text nodes.

TODO: modularity - should be built with find & replace variables from external source. */

function modText(textnode) {

}
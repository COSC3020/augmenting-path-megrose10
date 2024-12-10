function augmentingPath(graph, start, end) {
    let pathToEnd = [];
    pathToEnd.push(start);
    let nextNode;
    let notVisited = true;
    for(let node in graph) {
        for(let nodeElement in node) {
            for(let i = 0; i < pathToEnd.length; i++) {
                if(pathToEnd[i] == nodeElement){
                    break;
                }
                else{
                    notVisited = true;
                }
            }
            if(notVisited == true) {
                pathToEnd.push(node);
                nextNode = nodeElement;
            }

        }
        if(node == end) {
            return pathToEnd;
        }
        //console.log(node);
    }

    return [];
}

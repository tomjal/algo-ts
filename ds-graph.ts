interface IGraphNode {
    data: any;
    edges: Array<any>;
}

/**
 * DsGraphNode
 */
export class DsGraphNode implements IGraphNode {
    public data: any;
    public edges: Array<any>;
    constructor() {

    }
}

interface IGraph {
    vertices: Array<IGraphNode>;
}

/**
 * DsGraph
 */
export class DsGraph implements IGraph {
    public vertices: Array<IGraphNode>
    constructor() {

    }
}

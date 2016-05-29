interface IGraphVertex {
    id: number;
    data: any;
}

/**
 * DsGraphVertex
 */
export class DsGraphNode implements IGraphVertex {
    public id: number;
    public data: any;
    constructor() {

    }
}

interface IGraph {
    vertices: any;
    edges: any;
    numberOfEdges: number;
}

/**
 * DsGraphArray
 */
export class DsGraphArray implements IGraph {
    vertices: Array<IGraphVertex>;
    edges: Array<Array<number>>;
    numberOfEdges: number;
    constructor() {

    }
    addVertex(vertex: IGraphVertex) {
        this.vertices[vertex.id] = vertex;
        this.edges[vertex.id] = [];
    };
    addEdge(vertexStart: IGraphVertex, vertexEnd: IGraphVertex) {
        this.edges[vertexStart.id].push(vertexEnd.id);
        this.edges[vertexEnd.id].push(vertexStart.id);
        this.numberOfEdges++;
    };
}

/**
 * DsGraphMap
 */
export class DsGraphMap implements IGraph {
    vertices: Map<number, IGraphVertex> = new Map();
    edges: Map<number, Array<number>> = new Map();
    numberOfEdges: number = 0;
    constructor() {

    }
    addVertex(vertex: IGraphVertex) {
        this.vertices.set(vertex.id, vertex);
        this.edges.set(vertex.id, []);
    };
    addEdge(vertexStart: IGraphVertex, vertexEnd: IGraphVertex) {
        this.edges.set(vertexStart.id, this.edges.get(vertexStart.id).concat([vertexEnd.id]));
        this.edges.set(vertexEnd.id, this.edges.get(vertexEnd.id).concat([vertexStart.id]));
        this.numberOfEdges++;
    };
    printAllVertices() {
        for (let vertex of this.vertices) {
            console.log("\n Vertex: id = " + vertex[0] + ", data = " + vertex[1].data);
            console.log("Connected to: ");
            for (let edge of this.edges.get(vertex[0])) {
                console.log("vertex id = " + edge);
            }
        }
    }
}

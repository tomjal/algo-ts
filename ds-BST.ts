interface IBSTNode {
    value: number;
    leftLeaf: IBSTNode;
    rightLeaf: IBSTNode;
}

/**
 * DsBSTNode
 */
export class DsBSTNode implements IBSTNode {
    public value: number;
    public leftLeaf: IBSTNode = null;
    public rightLeaf: IBSTNode = null;
    constructor(val) {
        this.value = val;
    }
}

interface IBST {
    add(any);
    remove();
    hasValue();
    isValid();
    isBalanced();
    sort();
    traverse();
}

/**
 * DsBST
 */
export class DsBST implements IBST {

    root: IBSTNode = null;
    constructor() {

    }
    private insertLeaf(root: IBSTNode, elem: IBSTNode) {
        if (elem.value >= root.value) {
            if (root.rightLeaf == null) {
                root.rightLeaf = elem;
                return;
            } else
                this.insertLeaf(root.rightLeaf, elem);
        }
        else {
            if (root.leftLeaf == null) {
                root.leftLeaf = elem;
                return;
            } else
                this.insertLeaf(root.leftLeaf, elem);
        }
    }
    private rotate() {

    }
    private traverseInOrder(elem: IBSTNode) {
        if (elem == null) return;
        this.traverseInOrder(elem.leftLeaf);
        console.log(elem.value);
        this.traverseInOrder(elem.rightLeaf);
    }
    add(elem: IBSTNode) {
        if (this.root == null) {
            this.root = elem;
            return;
        }
        this.insertLeaf(this.root, elem);
    }
    remove() {

    }
    hasValue() {

    }
    isValid() {

    }
    isBalanced() {

    }
    sort() {

    }
    traverse() {
        this.traverseInOrder(this.root)
    }
}
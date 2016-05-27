interface ILinkedListNode {
    data: any;
    next: ILinkedListNode;
}

/**
 * DsLinkedListNode
 */
export class DsLinkedListNode implements ILinkedListNode {
    public data: any;
    public next: ILinkedListNode;
    constructor() {

    }
}

interface ILinkedList {
    addAtLast(any);
    removeAtLast(): any;
    addAtFirst(any);
    removeAtFirst(): any;
    getFirst(): any;
    getLast(): any;
    peekFirst(): any;
    peekLast(): any;
}

/**
 * DsLinkedList
 */
export class DsLinkedList implements ILinkedList {
    public head: ILinkedListNode;
    constructor(firstNode: ILinkedListNode) {
        this.head = firstNode;
    }
    addAtLast(any) {

    }
    removeAtLast() {

    }
    addAtFirst(any) {

    }
    removeAtFirst() {

    }
    getFirst() {

    }
    getLast() {

    }
    peekFirst() {

    }
    peekLast() {

    }
}

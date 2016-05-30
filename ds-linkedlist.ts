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
    constructor(data, next) {
        this.data = data;
        this.next = next;
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
    addAtLast(newNode: ILinkedListNode) {
        if (this.head == null) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next != null) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
    }
    removeAtLast() {

    }
    addAtFirst(newNode: ILinkedListNode) {
        if (this.head.data == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
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

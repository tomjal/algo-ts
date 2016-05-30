import { DsStack } from "./ds-stack"
import { DsQueue } from "./ds-queue"
import { DsLinkedListNode, DsLinkedList } from "./ds-linkedlist"
import { DsBSTNode, DsBST } from "./ds-bst"
import { DsGraphNode, DsGraphArray, DsGraphMap } from "./ds-graph"

import * as Algorithms from "./al-generic"

/**
 * StackQueue
 */
class StackQueue {
    private _data: DsStack
    private _helper: DsStack
    constructor() {

    }
    push() {

    }
    pop() {

    }
    isEmpty() {
        console.log("IsEmpty");
    }
}

let stackQueue1 = new StackQueue();
stackQueue1.push();
stackQueue1.isEmpty();

//let queue = new DsQueue();
//queue.enqueue(5);
//var checkVal = queue.dequeue();

let algosLinkedLists = new Algorithms.LinkedListProblems();

let firstNode = new DsLinkedListNode(1, null);
let secondNode = new DsLinkedListNode(2, null);
let thirdNode = new DsLinkedListNode(3, null);

let newll = new DsLinkedList(firstNode);
newll.addAtFirst(secondNode);
newll.addAtFirst(thirdNode);
//secondNode.next = thirdNode;
//firstNode.next = secondNode;

let firstNodeB = new DsLinkedListNode(4, null);
let secondNodeB = new DsLinkedListNode(5, null);
let thirdNodeB = new DsLinkedListNode(6, null);
let newllB = new DsLinkedList(firstNodeB);
newllB.addAtLast(secondNodeB);
newllB.addAtLast(thirdNodeB);

var isPalindrome = algosLinkedLists.isPalindrome(firstNode);
console.log(isPalindrome);

let arraysLinkedLists = new Algorithms.ArrayProblems();

let str1 = "boobassdfas";
let str2 = "abboossdafs";

var isPermutation = arraysLinkedLists.isPermutation(str1, str2);
console.log(isPermutation);

let arr1 = [-1, -2, 3, 4, -5, 6];

var maxSubArray = arraysLinkedLists.maximumSubArray(arr1);
console.log(maxSubArray);

let bst = new DsBST();
let rootBstNode = new DsBSTNode(5);
bst.root = rootBstNode;

let bstNode1 = new DsBSTNode(8);
let bstNode2 = new DsBSTNode(2);
let bstNode3 = new DsBSTNode(4);

bst.add(bstNode1);
bst.add(bstNode2);
bst.add(bstNode3);

bst.traverse();

let graph1 = new DsGraphMap();
let graphNode1 = new DsGraphNode();
graphNode1.id = 1;
graphNode1.data = 4545;
let graphNode2 = new DsGraphNode();
graphNode2.id = 2;
graphNode2.data = 6565;

graph1.addVertex(graphNode1);
graph1.addVertex(graphNode2);
graph1.addEdge(graphNode1, graphNode2);
graph1.printAllVertices();
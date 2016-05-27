import { DsStack } from "./ds-stack"
import { DsQueue } from "./ds-queue"
import { DsLinkedListNode, DsLinkedList } from "./ds-linkedlist"
import { DsBSTNode, DsBST } from "./ds-bst"
import { DsGraphNode, DsGraph } from "./ds-graph"

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

let queue = new DsQueue();
queue.enqueue(5);
var checkVal = queue.dequeue();

let algosLinkedLists = new Algorithms.LinkedListProblems();

let firstNode = new DsLinkedListNode();
firstNode.data = 1;
firstNode.next = null;
let secondNode = new DsLinkedListNode();
secondNode.data = 2;
secondNode.next = null;
let thirdNode = new DsLinkedListNode();
thirdNode.data = 1;
thirdNode.next = null;

secondNode.next = thirdNode;
firstNode.next = secondNode;

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

let graph1 = new DsGraph();
let graphNode1 = new DsGraphNode();
let graphNode2 = new DsGraphNode();
let graphNode3 = new DsGraphNode();
let graphNode4 = new DsGraphNode();
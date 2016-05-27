import { DsLinkedListNode, DsLinkedList } from "./ds-linkedlist"
import { DsStack } from "./ds-stack"

/**
 * LinkedListProblems
 */
export class LinkedListProblems {
    isPalindrome(linkedListHead: DsLinkedListNode) {
        let stack = new DsStack();
        let slowPointer: DsLinkedListNode = linkedListHead;
        let fastPointer: DsLinkedListNode = linkedListHead;

        //O(n)

        //go to the center of linkedlist
        while ((fastPointer !== null) && (fastPointer.next !== null)) {
            //push data
            stack.push(slowPointer.data);
            //move first pointer
            slowPointer = slowPointer.next;
            //move second pointer twice as fast
            fastPointer = fastPointer.next.next;
        }

        //this case covers an odd-numbered list
        if (fastPointer !== null) {
            slowPointer = slowPointer.next;
        }

        while (slowPointer !== null) {
            if (slowPointer.data !== stack.pop()) {
                return false;
            }
            slowPointer = slowPointer.next;
        }

        return true;
    }
}

/**
 * ArrayProblems
 */
export class ArrayProblems {
    isPalindrome(params: string | number) {

    }
    isPermutation(first: string, second: string) {

        //O(n)
        if (first.length !== second.length) { return false; }

        //building map
        //let letters = new Map();
        let letters = {};

        //loop first string
        for (let i = 0; i < first.length; i++) {
            letters[first.charCodeAt(i)] = (letters[first.charCodeAt(i)] || 0) + 1;
        }

        //loop second
        for (let i = 0; i < second.length; i++) {
            letters[second.charCodeAt(i)] = (letters[second.charCodeAt(i)] || 0) - 1;

            //if less then 0, means there was no match in map
            if (letters[second.charCodeAt(i)] < 0) {
                return false;
            }
        }

        return true;
    }
    maximumSubArray(arr: number[]): number {
        if (arr.length == 0)
            return 0;

        let maxCurr = arr[0];
        let maxResult = arr[0];

        for (let i = 1; i < arr.length; ++i) {
            maxCurr = Math.max(arr[i], arr[i] + maxCurr);
            maxResult = Math.max(maxResult, maxCurr);
        }

        return maxResult;
    }
}

/**
 * GraphProblems
 */
export class GraphProblems {
    DFS() {

    }
    BFS() {

    }
}

/**
 * SortProblems
 */
export class SortProblems {
}

/**
 * MatrixProblems
 */
export class MatrixProblems {
}



interface IQueue {
    enqueue(any);
    dequeue();
    isEmpty();
}

/**
 * DsQueue
 */
export class DsQueue implements IQueue {
    private _data: Array<any>;
    constructor() {

    }
    enqueue(elem: any) {
        if (elem)
            this._data.push(elem);
    }
    dequeue() {
        return this._data.shift();
    }
    isEmpty() {
        if (this._data.length === 0)
            return false;
        else return true;
    }
}
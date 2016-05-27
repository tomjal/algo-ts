interface IStack {
    push(any);
    pop();
    peek();
    size();
    isEmpty();
}

/**
 * DsStack
 */
export class DsStack implements IStack {
    private _data: Array<any>;
    constructor() {
        this._data = [];
    }
    push(elem: any) {
        if (elem)
            this._data.push(elem);
    }
    pop() {
        return this._data.pop();
    }
    peek() {
        return this._data[this._data.length - 1];
    }
    size() {
        return this._data.length;
    }
    isEmpty() {
        if (this._data.length === 0)
            return false;
        else return true;
    }
}
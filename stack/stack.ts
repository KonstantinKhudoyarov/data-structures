import {LinkedListNode} from "../linked-list/linked-list-node";

export class Stack<T> {
    private current: LinkedListNode<T> | null;

    constructor() {
        this.current = null;
    }

    public isEmpty() {
        return this.current === null;
    }
}
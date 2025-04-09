import {LinkedListNode} from "../linked-list/linked-list-node";

export class Stack<T> {
    private current: LinkedListNode<T> | null;

    constructor() {
        this.current = null;
    }

    public isEmpty() {
        return this.current === null;
    }

    public push(data: T): void {
        const newNode = new LinkedListNode(data);

        if(this.current === null) {
            this.current = newNode;
            return;
        }

        newNode.next = this.current;
        this.current = newNode;
    }

    public pop(): T | null {
        if(this.current === null) {
            return null;
        }

        const data = this.current.data;
        const previous = this.current;
        this.current = this.current.next;
        previous.next = null;

        return data;
    }
}
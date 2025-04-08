import {LinkedListNode} from "../linked-list/linked-list-node";

export class Queue<T> {
    private left: LinkedListNode<T> | null;
    private right: LinkedListNode<T> | null;

    constructor() {
        this.left = null;
        this.right = null;
    }

    public enqueue(data: T): void {
        const newNode = new LinkedListNode(data);

        if (this.left === null) {
            this.left = newNode;
            this.right = newNode;
            return;
        }

        this.right.next = newNode;
        this.right = newNode;
    }
}
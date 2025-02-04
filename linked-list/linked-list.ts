import {LinkedListNode} from './linked-list-node';

class LinkedList<T> {
    private head: LinkedListNode<T> | null;
    private size = 0;

    constructor() {
        this.head = null;
    }

    public addFirst(data: T): void {
        const node = new LinkedListNode(data);
        node.next = this.head;
        this.head = node;
        this.size++;
    }
}
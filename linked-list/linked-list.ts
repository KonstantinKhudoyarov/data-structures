import {LinkedListNode} from './linked-list-node';

class LinkedList<T> {
    private head: LinkedListNode<T> | null;
    private tail: LinkedListNode<T> | null;
    private size = 0;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    public addFirst(data: T): void {
        const node = new LinkedListNode(data);

        if (this.head === null) {
            this.head = this.tail = node;
            this.size++;
            return;
        }

        node.next = this.head;
        this.head = node;
        this.size++;
    }

    public addLast(data: T): void {
        const node = new LinkedListNode(data);

        if (this.head === null) {
            this.head = this.tail = node;
            this.size++;
            return;
        }

        if (this.tail !== null) {
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }

    public removeFirst(): T | null {
        if (this.head === null) {
            return null;
        }

        const tmpData = this.head.data;

        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.size--;
        return tmpData;
    }
}
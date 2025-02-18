import {DoublyLinkedListNode} from "./doubly-linked-list-node";
import {Comparator, CompareFunction} from "../utils";

export class DoublyLinkedList<T> {
    private head: DoublyLinkedListNode<T> | null = null;
    private tail: DoublyLinkedListNode<T> | null = null;
    private size = 0;
    private comparator: Comparator<T>;

    constructor(compareFn: CompareFunction) {
        this.comparator = new Comparator(compareFn);
    }

    public addFirst(data: T): void {
        const node = new DoublyLinkedListNode(data);

        if(this.head === null) {
            this.head = this.tail = node;
            this.size++;
            return;
        }

        node.next = this.head;
        this.head.previous = node;
        this.head = node;
        this.size++;
    }

    public addLast(data: T): void {
        const node = new DoublyLinkedListNode(data);

        if(this.head === null) {
            this.head = this.tail = node;
            this.size++;
            return;
        }

        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
        this.size++;
    }

    public removeFirst(): T | null {
        if(this.head === null) {
            return null;
        }

        const tmpData = this.head.data;

        if(this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.previous = null;
        }

        this.size--;
        return tmpData;
    }

    public removeLast(): T | null {
        if(this.head === null) {
            return null;
        }

        if (this.head === this.tail) {
            return this.removeFirst()
        }

        const tmpData = this.tail.data;

        this.tail = this.tail.previous;
        this.tail.next = null;
        this.size--;
        return tmpData;
    }

    public peakFirst(): T | null {
        if(this.head === null) {
            return null;
        }

        return this.head.data;
    }

    public peakLast(): T | null {
        if(this.tail === null) {
            return null;
        }

        return this.tail.data;
    }

    public contains(value: T): boolean {
        let current: DoublyLinkedListNode<T> | null = this.head;

        while(current !== null) {
            if(this.comparator.equal(value, current.data) === 0) {
                return true;
            }

            current = current.next;
        }

        return false;
    }
}
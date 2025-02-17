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
}
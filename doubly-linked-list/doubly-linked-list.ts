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
}
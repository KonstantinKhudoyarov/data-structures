export class DoublyLinkedListNode<T> {
    public data: T;
    public previous: DoublyLinkedListNode<T> | null;
    public next: DoublyLinkedListNode<T> | null;

    constructor(data: T, previous: DoublyLinkedListNode<T> | null = null,  next: DoublyLinkedListNode<T> | null = null) {
        this.data = data;
        this.previous = previous;
        this.next = next;
    }
}
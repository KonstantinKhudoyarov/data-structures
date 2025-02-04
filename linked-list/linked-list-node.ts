export class LinkedListNode<T> {
    public data: T;
    public next: LinkedListNode<T> | null;
    constructor(data: T, next: LinkedListNode<T> | null = null) {
        this.data = data;
        this.next = next;
    }
}
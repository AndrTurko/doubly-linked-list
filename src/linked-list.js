const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {

        let node = new Node(data);
        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;

        }

        this.length++;
        return this;
    }


    head() {
        if (this._head === null)
            return null;
        else
            return this._head.data;
    }

    tail() {
        if (this._tail === null)
            return null;
        else
            return this._tail.data;
    }

    at(index) {
        let i = 0, currentNode = this._head;
        while (i < index) {
            i++;
            currentNode = currentNode.next;
        }
        return currentNode.data;
    }



    insertAt(index, data) {
        let count = 0, currentNode = this._head;
        while (currentNode) {
            if (count === index) {
            if (count === index-1) {
                let node = new Node(data);
                node.next = currentNode.next;
                currentNode.next.prev = node;
                currentNode.next = node;
                node.prev = currentNode;
                currentNode = node;
                break;
            }
            currentNode = currentNode.next;
            count++;
        }
        return this;
    }

    isEmpty() {
        if (!this._head)
            return true;
        else return false;
    }

    clear() {

        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;

    }

    deleteAt(index) {
        let count = 0, currentNode = this._head;
        if (index === 0) {
            this._head = this._head.next;
        } else {
            while (currentNode) {
                if (count === index) {
                    if (currentNode.next) {
                        currentNode.next.prev = currentNode.prev;
                    }
                    if (currentNode.prev) {
                        currentNode.prev.next = currentNode.next;
                    }
                    this.length--;
                    break;
                };
                currentNode = currentNode.next;
                count++;
            }
        };
        return this;
    }

    reverse() {
        let cur = this._head;

        while (cur != null) {
            let next = cur.next;
            cur.next = cur.prev;
            cur = next
        }
        let temp = this._head;
        this._head = this._tail;
        this._tail = temp;
        return this
    }

    indexOf(data) {
        let currentNode = this._head;
        for (let i = 0; i < this.length; i++) {
            if (currentNode.data == data) {
                return i;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;

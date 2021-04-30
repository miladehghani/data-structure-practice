import { TreeNode } from "./TreeNode";

export class Queue {
  private queue: TreeNode[];
  private queueSize?: number;

  constructor(size?: number) {
    this.queue = [];
    this.queueSize = size;
  }

  enQueue(value: TreeNode): boolean {
    if (this.queueSize && this.queue.length === this.queueSize) return false;
    this.queue.push(value);
    return true;
  }

  find(node: TreeNode): boolean {
    return !!this.queue.find((q) => q === node);
  }

  deQueue(): TreeNode | undefined {
    return this.queue.shift();
  }

  Front(): TreeNode | null {
    if (this.queue.length === 0) return null;
    return this.queue[0];
  }

  Rear(): TreeNode | null {
    if (this.queue.length === 0) return null;
    return this.queue[this.queue.length - 1];
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  isFull(): boolean {
    return !!this.queueSize && this.queue.length === this.queueSize;
  }

  size(): number {
    return this.queue.length;
  }
}

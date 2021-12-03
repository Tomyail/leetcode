/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
class MinStack2 {
  private _min: number;
  private _stack: number[];
  private _minIndex: number;
  constructor() {
    this._stack = [];
    this._minIndex = 0;
    this._min = Number.MAX_SAFE_INTEGER;
  }

  updateMin() {
    this._min = Number.MAX_SAFE_INTEGER;
    this._stack.forEach((item, idx) => {
      if (this._min > item) {
        this._min = item;
        this._minIndex = idx;
      }
    });
  }
  push(val: number): void {
    if (val < this._min) {
      this._min = val;
      this._minIndex = this._stack.length;
    }
    this._stack.push(val);
  }

  pop(): void {
    const shouldUpdate = this._minIndex === this._stack.length - 1;

    this._stack.pop();
    if (shouldUpdate) this.updateMin();
  }

  top(): number {
    return this._stack[this._stack.length - 1];
  }

  getMin(): number {
    return this._min;
  }
}

/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
class MinStack {
  private _stack: number[];
  private _minStack: number[];
  constructor() {
    this._stack = [];
    this._minStack = [Number.MAX_SAFE_INTEGER];
  }

  push(val: number): void {
    if (val < this._minStack[this._minStack.length - 1]) {
      this._minStack.push(val);
    } else {
      this._minStack.push(this._minStack[this._minStack.length - 1]);
    }
    this._stack.push(val);
  }

  pop(): void {
    this._stack.pop();
    this._minStack.pop();
  }

  top(): number {
    return this._stack[this._stack.length - 1];
  }

  getMin(): number {
    return this._minStack[this._minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

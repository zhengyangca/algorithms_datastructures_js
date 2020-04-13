/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this._stack = [];
    // this._min;
};

/** 
 * @param {number}
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this._stack.push(x);
    this._min = this._min ? Math.min(x, this._min) : x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this._stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this._stack[this._stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return Math.min(...this._stack);
};

// main
var obj = new MinStack()
obj.push(-2);
obj.push(0);
obj.push(-3);
var param_4 = obj.getMin()
obj.pop()
var param_3 = obj.top()
var param_5 = obj.getMin()
obj.push(21);
obj.push(-25);

console.log(obj);
console.log(param_3);
console.log(param_4);
console.log(param_5);

console.log(obj);
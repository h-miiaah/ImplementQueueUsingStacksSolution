
var MyQueue = function() {
    this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.queue.shift()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.queue[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.queue.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


/**
 * The constructor function creates an empty array.
 * The push method adds an element to the end of the array.
 * The pop method removes the first element from the array and returns it.
 * The peek method returns the first element from the array but does not remove it.
 * The empty method returns a boolean indicating whether the array is empty.
 */

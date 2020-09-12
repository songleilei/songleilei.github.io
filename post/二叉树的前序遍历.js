/**
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 迭代算法
 * @param {TreeNode} root
 * @return {number[]}
 */

const preorderTraversal = function (root) {
  const nums = [];
  const stack = [];

  if (root) {
    stack.push(root);
  }

  while (stack.length) {
    const tpop = stack.pop();
    nums.push(tpop.val);
    if (tpop.right) {
      stack.push(tpop.right);
    }
    if (tpop.left) {
      stack.push(tpop.left);
    }
  }
  return nums;
};

/**
 * 递归算法
 * @param {TreeNode} root
 * @return {number[]}
 */

const preorderTraversalRecursive = function (root) {
  const nums = [];
  const fun = (root) => {
    nums.push(root.val);
    root.left && fun(root.left);
    root.right && fun(root.right);
  };
  root && fun(root);
  return nums;
};

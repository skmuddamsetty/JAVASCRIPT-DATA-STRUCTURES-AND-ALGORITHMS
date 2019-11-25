/**
 * Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

For example, 

Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2

You should return this subtree:

      2     
     / \   
    1   3

In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.

Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 *
 * https://leetcode.com/problems/search-in-a-binary-search-tree/
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

insertIntoBST = (root, val) => {
  if (!root) return new TreeNode(val);
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
};

searchBST = (root, val) => {
  if (!root) return null;
  if (root.val === val) return root;
  if (val < root.val) {
    root = searchBST(root.left, val);
  } else {
    root = searchBST(root.right, val);
  }
  return root;
};

searchBSTIteration = (root, val) => {
  while (root != null && root.val != val) {
    root = val < root.val ? root.left : root.right;
  }
  return root;
};

let root = insertIntoBST(null, 10);
root = insertIntoBST(root, 2);
root = insertIntoBST(root, 15);
root = insertIntoBST(root, 20);
root = insertIntoBST(root, 11);
root = insertIntoBST(root, 8);
let result = searchBST(root, 15);
let iterationResult = searchBSTIteration(root, 15);
console.log('\n Recursion Result: \n', result);
console.log('\n Iteration Result: \n', iterationResult);

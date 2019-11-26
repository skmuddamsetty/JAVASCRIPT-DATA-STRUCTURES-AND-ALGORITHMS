/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

let root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(1);
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
isValidBST = root => {
  if (root === null) return true;
  if (root && root.left && root.left.val >= root.val) return false;
  if (root && root.right && root.right.val <= root.val) return false;
  return isValidBST(root.left) && isValidBST(root.right);
};

console.log(isValidBST(root));

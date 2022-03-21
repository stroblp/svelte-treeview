<script>
	import Tree from "../lib/Tree.svelte";
	import tree from "./tree-data.js";
	import TreeItem from "./TreeItem.svelte";
	import TreeNode from "./TreeNode.svelte";
	import TreeRoot from "./TreeRoot.svelte";
</script>



<p>Custom componenet 1:</p>
<TreeRoot />
<p>Custom componenet 2:</p>
<TreeNode />
<p>Custom componenet 3:</p>
<TreeItem />
<Tree node={tree} treeName="test-tree" />

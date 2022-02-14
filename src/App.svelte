<script>
	import {writable} from "svelte/store"
		import Tree from "./Tree.svelte"
		import {tree} from "./tree-data.js"
</script>
<Tree {tree} nodeCollapsed={writable (false)} />
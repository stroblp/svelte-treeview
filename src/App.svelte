<script>
	import {writable} from "svelte/store"
		import Tree from "./Tree.svelte"
		import {tree} from "./tree.js"
</script>
<Tree {tree} nodeCollapsed={writable (false)} />
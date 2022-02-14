<script>
	import { writable } from "svelte/store";
	export let id;
	export let label = "No Label";
	export let parentNodeState;
	export let currentNodeState = writable(false);
	export let nodeExpanded = undefined;

	parentNodeState.subscribe((value) => {
		$currentNodeState = value;
		console.log(value);
	});
</script>

<div class="main">
	{#if nodeExpanded}
		<input type="checkbox" bind:checked={$nodeExpanded} />
	{/if}
	<input type="checkbox" {id} bind:checked={$currentNodeState} />
	<label for={id}>{label}</label>
</div>
<slot controlChecked={$currentNodeState} />

<style>
	label {
		display: flex;
		align-items: center;
		padding-left: 2px;
		padding-right: 4px;
	}
	.main {
		display: flex;
		justify-content: left;
		align-items: center;
	}
</style>

<script>
	import { writable } from "svelte/store";
export let props;
	export let parentNodeState;
	export let currentNodeState = writable(false);
	export let nodeExpanded = undefined;

	parentNodeState.subscribe((value) => {
		$currentNodeState = value;
	});
</script>

<span class="main">
	{#if nodeExpanded}
		<input type="checkbox" class ="expansion-control" id={"expansion-controls-"+props.id} bind:checked={$nodeExpanded} />
		<label for={"expansion-controls-"+props.id} class="l1 fas "></label>
	{/if}
	<input type="checkbox" id={props.id} bind:checked={$currentNodeState} />
	<label for={props.id}>{props.label}</label>
	<slot controlChecked={$currentNodeState} {props}/>
</span>


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
	.expansion-control{
		display:none;
	}
	.expansion-control +label:before{
		content: "\f0a9";
	}
	.expansion-control:checked +label:before{
		content: "\f0ab";
	}
</style>

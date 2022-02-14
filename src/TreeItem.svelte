<script>
	export let id;
	export let label = "Label Missing";
	export let itemState;
</script>

<span class="main">
	<input type="checkbox" {id} checked={$itemState} />
	<label for={id}>{label}</label>
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
</style>

<script>
	export let uuid;
	export let label="test";
	export let parentNodeState;
	export let currentNodeState;
	export let nodeCollapsed;


	console.log(parentNodeState)
	parentNodeState.subscribe((value)=>{
				$currentNodeState =value;
				console.log(value);
	})
</script>

<div class ="main">
			<input type="checkbox"   bind:checked={$nodeCollapsed}/>
		<input type="checkbox" id ={uuid}  bind:checked={$currentNodeState}/>
		<label for={uuid}>{label}</label>
</div>

<style>
	  label {
    display: flex;
    align-items: center;
    padding-left: 2px;
	  padding-right: 4px;
  }
	.main{
    display: flex;
    justify-content: left;
    align-items: center;
	
	}
</style>
<script>
	export let uuid;
	export let label="test";
	export let itemState;	
</script>

<span class ="main">
		<input type="checkbox" id ={uuid} checked={$itemState}/>
		<label for={uuid}>{label}</label>
</span>

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
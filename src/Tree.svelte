<script>
    import {writable} from "svelte/store"
        export let tree;
        let currentNodeState =writable (false);
        let nodeCollapsed = writable(false);
        export let parentNodeState=writable (false);
    </script>
    
    <ul>
        {#if tree.children}
        <li>
                <svelte:component uuid={tree.uuid} label={tree.label} {currentNodeState} {parentNodeState} {nodeCollapsed} this={tree.component}/>
        </li>
        <li class ="collapsable" class:collapsed ={$nodeCollapsed}>
            {#each tree.children as child}
                <svelte:self parent ={tree.uuid} tree={child} parentNodeState={currentNodeState}/>
            {/each}
        </li>
    
    {:else}
        <li>
    <!-- 		{$parentNodeState}
    {$currentNodeState} -->
                <svelte:component uuid={tree.uuid} label={tree.label} this={tree.component} itemState={parentNodeState}/>
        </li>
    {/if}
    </ul>
    
    <style>
        .collapsable{
            display:block;
        }
        .collapsable.collapsed{
            display:none;
        }	
      ul {
        list-style-type: none;
        padding-left: 20px;
        display: block;
      }
    </style>
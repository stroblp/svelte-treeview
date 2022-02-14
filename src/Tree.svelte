<script>
    import { writable } from "svelte/store";
    import TreeControls from "./TreeControls.svelte";
    import TestSlotted from "./TestSlotted.svelte";
    export let parentNodeState = writable(false);
    export let tree;
    export let level =0;
    let currentNodeState = writable(false);
    let nodeExpanded = writable(true);
</script>

<ul class:root = {level===0}>
    {#if tree.children}
        <li c>
            <TreeControls
                id={tree.id}
                label={tree.label}
                {currentNodeState}
                {parentNodeState}
                {nodeExpanded}
            />
        </li>
        <li class="expandable" class:expanded={$nodeExpanded}>
            {#each tree.children as child}
                <svelte:self
                    parent={tree.id}
                    tree={child}
                    parentNodeState={currentNodeState}
                    level={level+1}
                />
            {/each}
        </li>
    {:else}
        <li>
            <TreeControls id={tree.id} label={tree.label} {parentNodeState} let:controlChecked>
                <svelte:component {controlChecked} this={TestSlotted} />
            </TreeControls>
        </li>
    {/if}
</ul>

<style>
    .expandable.expanded {
        display: block;
    }
    .expandable {
        display: none;
    }
    ul {
        list-style-type: none;
        padding-left: 30px;
    }
    ul.root {
        list-style-type: none;
        padding-left: 0px;
    }
    
</style>

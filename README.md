# what is this

A Svelte collapsable treeview with custom components added to nodes. Tree state is persistant trough the usage of indexeddb/localstorage 

# example

https://stroblp.github.io/svelte-treeview/

https://stroblp.github.io/gh-pages-demo-app/#/building-floors/


# install

`npm i @stroblp/svelte-treeview`

Usage..

TreeItem.svelte,NodeItem.svelte,TreeRoot.svelte can be any valid svelte component

```
<script>
	import Tree from "svelte-treeview";
    import Item from "./TreeItem.svelte"
    import Node from "./TreeNode.svelte"
    import Root from "./TreeRoot.svelte"
    const tree =
    {
        props: { id: "root-node", label: "root" }, children: [
            {
                props: { id: "node1", label: "node1" }, children: [
                    { props: { id: "item1-1", label: "item1.1" } },
                    { props: { id: "item1-2", label: "item1.2"} },
                    {
                        props: { id: "node11", label: "node1" }, children: [
                            { props: { id: "item11-1", label: "item11.1"} },
                            { props: { id: "item11-2", label: "item11.2" } },
                        ]
                    },
                ]
            },
            {
                props: { id: "node2", label: "node2" }, children: [
                    { props: { id: "item2-1", label: "item2.1"} },
                    { props: { id: "item2-2", label: "item2.2" } },
                ]
            }
        ]
    }    
</script>



<Tree node={tree} treeName="test-tree" />
```
 


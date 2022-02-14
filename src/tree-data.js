import TreeItem from "./TreeItem.svelte"
import TreeNode from "./TreeNode.svelte"
export let tree =
{
    id: "root-node", label: "root", component: TreeNode, children: [
        {
            id: "node1", label: "node1", component: TreeNode, children: [
                { id: "item1-1", label: "item1.1", component: TreeItem },
                { id: "item1-2", label: "item1.2", component: TreeItem },
                {
                    id: "node11", label: "node1", component: TreeNode, children: [
                        { id: "item11-1", label: "item11.1", component: TreeItem },
                        { id: "item11-2", label: "item11.2", component: TreeItem },
                    ]
                },
            ]
        },
        {
            id: "node2", label: "node2", component: TreeNode, children: [
                { id: "item2-1", label: "item2.1", component: TreeItem },
                { id: "item2-2", label: "item2.2", component: TreeItem },
            ]
        }
    ]
}
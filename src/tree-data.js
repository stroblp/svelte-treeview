import Item from "./TreeItem.svelte"
import Node from "./TreeNode.svelte"
import Root from "./TreeRoot.svelte"

const treeData =
{
    props: { id: "root-node", label: "root", component: Root }, children: [
        {
            props: { id: "node1", label: "node1", component: Node }, children: [
                { props: { id: "item1-1", label: "item1.1", component: Item } },
                { props: { id: "item1-2", label: "item1.2", component: Item } },
                {
                    props: { id: "node11", label: "node1", component: Node }, children: [
                        { props: { id: "item11-1", label: "item11.1", component: Item } },
                        { props: { id: "item11-2", label: "item11.2", component: Item } },
                    ]
                },
            ]
        },
        {
            props: { id: "node2", label: "node2", component: Node }, children: [
                { props: { id: "item2-1", label: "item2.1", component: Item } },
                { props: { id: "item2-2", label: "item2.2", component: Item } },
            ]
        }
    ]
}

export default treeData;
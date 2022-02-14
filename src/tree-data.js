import TreeItem from "./TreeItem.svelte"
import TreeNode from "./TreeNode.svelte" 
export let tree =
{uuid:crypto.randomUUID(),label:"root",component:TreeNode,children:[
        {uuid:crypto.randomUUID(),label:"node1",component:TreeNode,children:[
    {uuid:crypto.randomUUID(),label:"item1.1",component:TreeItem},
    {uuid:crypto.randomUUID(),label:"item1.2",component:TreeItem},
                        {uuid:crypto.randomUUID(),label:"node11",component:TreeNode,children:[
    {uuid:crypto.randomUUID(),label:"item11.1",component:TreeItem},
    {uuid:crypto.randomUUID(),label:"item11.2",component:TreeItem}
]},
]},
        {uuid:crypto.randomUUID(),label:"node2",component:TreeNode,children:[
    {uuid:crypto.randomUUID(),label:"item2.1",component:TreeItem},
    {uuid:crypto.randomUUID(),label:"item2.2",component:TreeItem}
]}		
]
}
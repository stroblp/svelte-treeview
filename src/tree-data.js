import TestSlotted from "./TestSlotted.svelte"

export let tree =
{
    props: { id: "root-node", label: "root", component: TestSlotted }, children: [
        {
            props: { id: "node1", label: "node1", component: TestSlotted }, children: [
                { props: { id: "item1-1", label: "item1.1", component: TestSlotted } },
                { props: { id: "item1-2", label: "item1.2", component: TestSlotted } },
                {
                    props: { id: "node11", label: "node1", component: TestSlotted }, children: [
                        { props: { id: "item11-1", label: "item11.1", component: TestSlotted } },
                        { props: { id: "item11-2", label: "item11.2", component: TestSlotted } },
                    ]
                },
            ]
        },
        {
            props: { id: "node2", label: "node2", component: TestSlotted }, children: [
                { props: { id: "item2-1", label: "item2.1", component: TestSlotted } },
                { props: { id: "item2-2", label: "item2.2", component: TestSlotted } },
            ]
        }
    ]
}
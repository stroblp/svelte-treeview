import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, a as space, b as attr, t as toggle_class, c as append, d as insert, g as group_outros, f as transition_out, h as check_outros, j as transition_in, k as detach, l as subscribe, p as presistentStore, m as component_subscribe, n as set_store_value, o as noop, w as writable, q as empty, r as destroy_component, u as create_component, v as mount_component, x as text, y as add_render_callback, z as listen, A as set_data, B as destroy_each } from "./vendor.277c4925.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var Tree_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[17] = list[i];
  return child_ctx;
}
function create_else_block(ctx) {
  let li;
  let div2;
  let div1;
  let input;
  let input_id_value;
  let t0;
  let label;
  let t1_value = ctx[1].props.label + "";
  let t1;
  let label_for_value;
  let t2;
  let div0;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[1].props.component && create_if_block_3(ctx);
  return {
    c() {
      li = element("li");
      div2 = element("div");
      div1 = element("div");
      input = element("input");
      t0 = space();
      label = element("label");
      t1 = text(t1_value);
      t2 = space();
      div0 = element("div");
      if (if_block)
        if_block.c();
      attr(input, "type", "checkbox");
      attr(input, "id", input_id_value = "item-" + ctx[1].props.id);
      if (ctx[7] === void 0 || ctx[6] === void 0)
        add_render_callback(() => ctx[15].call(input));
      attr(label, "for", label_for_value = "item-" + ctx[1].props.id);
      attr(label, "class", "svelte-14950jg");
      attr(div1, "class", "main svelte-14950jg");
      attr(div2, "class", "container svelte-14950jg");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, div2);
      append(div2, div1);
      append(div1, input);
      input.checked = ctx[7];
      input.indeterminate = ctx[6];
      append(div1, t0);
      append(div1, label);
      append(label, t1);
      append(div1, t2);
      append(div1, div0);
      if (if_block)
        if_block.m(div0, null);
      current = true;
      if (!mounted) {
        dispose = listen(input, "change", ctx[15]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (!current || dirty & 2 && input_id_value !== (input_id_value = "item-" + ctx2[1].props.id)) {
        attr(input, "id", input_id_value);
      }
      if (dirty & 128) {
        input.checked = ctx2[7];
      }
      if (dirty & 64) {
        input.indeterminate = ctx2[6];
      }
      if ((!current || dirty & 2) && t1_value !== (t1_value = ctx2[1].props.label + ""))
        set_data(t1, t1_value);
      if (!current || dirty & 2 && label_for_value !== (label_for_value = "item-" + ctx2[1].props.id)) {
        attr(label, "for", label_for_value);
      }
      if (ctx2[1].props.component) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_3(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div0, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      if (if_block)
        if_block.d();
      mounted = false;
      dispose();
    }
  };
}
function create_if_block(ctx) {
  let li0;
  let div1;
  let div0;
  let t0;
  let input;
  let input_id_value;
  let t1;
  let label;
  let t2_value = ctx[1].props.label + "";
  let t2;
  let label_for_value;
  let t3;
  let t4;
  let li1;
  let current;
  let mounted;
  let dispose;
  let if_block0 = ctx[11] && create_if_block_2(ctx);
  let if_block1 = ctx[1].props.component && create_if_block_1(ctx);
  let each_value = ctx[1].children;
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      li0 = element("li");
      div1 = element("div");
      div0 = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      input = element("input");
      t1 = space();
      label = element("label");
      t2 = text(t2_value);
      t3 = space();
      if (if_block1)
        if_block1.c();
      t4 = space();
      li1 = element("li");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(input, "type", "checkbox");
      attr(input, "id", input_id_value = ctx[1].props.id);
      if (ctx[7] === void 0 || ctx[6] === void 0)
        add_render_callback(() => ctx[14].call(input));
      attr(label, "for", label_for_value = ctx[1].props.id);
      attr(label, "class", "svelte-14950jg");
      attr(div0, "class", "main svelte-14950jg");
      attr(div1, "class", "container svelte-14950jg");
      attr(li1, "class", "expandable svelte-14950jg");
      toggle_class(li1, "expanded", ctx[8]);
    },
    m(target, anchor) {
      insert(target, li0, anchor);
      append(li0, div1);
      append(div1, div0);
      if (if_block0)
        if_block0.m(div0, null);
      append(div0, t0);
      append(div0, input);
      input.checked = ctx[7];
      input.indeterminate = ctx[6];
      append(div0, t1);
      append(div0, label);
      append(label, t2);
      append(div0, t3);
      if (if_block1)
        if_block1.m(div0, null);
      insert(target, t4, anchor);
      insert(target, li1, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(li1, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(input, "change", ctx[14]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (ctx2[11])
        if_block0.p(ctx2, dirty);
      if (!current || dirty & 2 && input_id_value !== (input_id_value = ctx2[1].props.id)) {
        attr(input, "id", input_id_value);
      }
      if (dirty & 128) {
        input.checked = ctx2[7];
      }
      if (dirty & 64) {
        input.indeterminate = ctx2[6];
      }
      if ((!current || dirty & 2) && t2_value !== (t2_value = ctx2[1].props.label + ""))
        set_data(t2, t2_value);
      if (!current || dirty & 2 && label_for_value !== (label_for_value = ctx2[1].props.id)) {
        attr(label, "for", label_for_value);
      }
      if (ctx2[1].props.component) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div0, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (dirty & 1559) {
        each_value = ctx2[1].children;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(li1, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if (dirty & 256) {
        toggle_class(li1, "expanded", ctx2[8]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block1);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(if_block1);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li0);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (detaching)
        detach(t4);
      if (detaching)
        detach(li1);
      destroy_each(each_blocks, detaching);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_3(ctx) {
  let previous_key = ctx[1];
  let key_block_anchor;
  let current;
  let key_block = create_key_block(ctx);
  return {
    c() {
      key_block.c();
      key_block_anchor = empty();
    },
    m(target, anchor) {
      key_block.m(target, anchor);
      insert(target, key_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 2 && safe_not_equal(previous_key, previous_key = ctx2[1])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block(ctx2);
        key_block.c();
        transition_in(key_block);
        key_block.m(key_block_anchor.parentNode, key_block_anchor);
      } else {
        key_block.p(ctx2, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(key_block);
      current = true;
    },
    o(local) {
      transition_out(key_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(key_block_anchor);
      key_block.d(detaching);
    }
  };
}
function create_key_block(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = ctx[1].props.component;
  function switch_props(ctx2) {
    return {
      props: {
        controlChecked: ctx2[7],
        parent: ctx2[3],
        props: ctx2[1].props
      }
    };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const switch_instance_changes = {};
      if (dirty & 128)
        switch_instance_changes.controlChecked = ctx2[7];
      if (dirty & 8)
        switch_instance_changes.parent = ctx2[3];
      if (dirty & 2)
        switch_instance_changes.props = ctx2[1].props;
      if (switch_value !== (switch_value = ctx2[1].props.component)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block_2(ctx) {
  let input;
  let input_id_value;
  let t;
  let label;
  let label_for_value;
  let mounted;
  let dispose;
  return {
    c() {
      input = element("input");
      t = space();
      label = element("label");
      attr(input, "type", "checkbox");
      attr(input, "class", "expansion-control svelte-14950jg");
      attr(input, "id", input_id_value = "expansion-controls-" + ctx[1].props.id);
      attr(label, "for", label_for_value = "expansion-controls-" + ctx[1].props.id);
      attr(label, "class", "l1 fas  svelte-14950jg");
    },
    m(target, anchor) {
      insert(target, input, anchor);
      input.checked = ctx[8];
      insert(target, t, anchor);
      insert(target, label, anchor);
      if (!mounted) {
        dispose = listen(input, "change", ctx[13]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 2 && input_id_value !== (input_id_value = "expansion-controls-" + ctx2[1].props.id)) {
        attr(input, "id", input_id_value);
      }
      if (dirty & 256) {
        input.checked = ctx2[8];
      }
      if (dirty & 2 && label_for_value !== (label_for_value = "expansion-controls-" + ctx2[1].props.id)) {
        attr(label, "for", label_for_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(input);
      if (detaching)
        detach(t);
      if (detaching)
        detach(label);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_1(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = ctx[1].props.component;
  function switch_props(ctx2) {
    return {
      props: {
        controlChecked: ctx2[7],
        props: ctx2[1].props
      }
    };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const switch_instance_changes = {};
      if (dirty & 128)
        switch_instance_changes.controlChecked = ctx2[7];
      if (dirty & 2)
        switch_instance_changes.props = ctx2[1].props;
      if (switch_value !== (switch_value = ctx2[1].props.component)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_each_block(ctx) {
  let tree;
  let current;
  tree = new Tree({
    props: {
      parent: ctx[1].props.id,
      node: ctx[17],
      parentNodeState: ctx[10],
      level: ctx[2] + 1,
      childToParentList: ctx[9],
      treeName: ctx[0],
      driver: ctx[4]
    }
  });
  return {
    c() {
      create_component(tree.$$.fragment);
    },
    m(target, anchor) {
      mount_component(tree, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tree_changes = {};
      if (dirty & 2)
        tree_changes.parent = ctx2[1].props.id;
      if (dirty & 2)
        tree_changes.node = ctx2[17];
      if (dirty & 4)
        tree_changes.level = ctx2[2] + 1;
      if (dirty & 1)
        tree_changes.treeName = ctx2[0];
      if (dirty & 16)
        tree_changes.driver = ctx2[4];
      tree.$set(tree_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tree.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tree.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tree, detaching);
    }
  };
}
function create_fragment$4(ctx) {
  let link;
  let t;
  let ul;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[1].children)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      link = element("link");
      t = space();
      ul = element("ul");
      if_block.c();
      attr(link, "rel", "stylesheet");
      attr(link, "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
      attr(ul, "class", "svelte-14950jg");
      toggle_class(ul, "root", ctx[2] === 0);
    },
    m(target, anchor) {
      append(document.head, link);
      insert(target, t, anchor);
      insert(target, ul, anchor);
      if_blocks[current_block_type_index].m(ul, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(ul, null);
      }
      if (dirty & 4) {
        toggle_class(ul, "root", ctx2[2] === 0);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      detach(link);
      if (detaching)
        detach(t);
      if (detaching)
        detach(ul);
      if_blocks[current_block_type_index].d();
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let $currentNodeState;
  let $childToParentList, $$unsubscribe_childToParentList = noop, $$subscribe_childToParentList = () => ($$unsubscribe_childToParentList(), $$unsubscribe_childToParentList = subscribe(childToParentList, ($$value) => $$invalidate(16, $childToParentList = $$value)), childToParentList);
  let $nodeExpanded;
  $$self.$$.on_destroy.push(() => $$unsubscribe_childToParentList());
  let { treeName = "tree-view" } = $$props;
  let { parentNodeState = writable(false) } = $$props;
  let { node } = $$props;
  let { level = 0 } = $$props;
  let { parent = void 0 } = $$props;
  let { driver = "INDEXEDDB" } = $$props;
  let childNodeList = writable({
    checked: /* @__PURE__ */ new Set([]),
    indeterminate: /* @__PURE__ */ new Set([])
  });
  let { childToParentList = writable({
    checked: /* @__PURE__ */ new Set([]),
    indeterminate: /* @__PURE__ */ new Set([])
  }) } = $$props;
  $$subscribe_childToParentList();
  let currentNodeIndeterminate = false;
  let currentNodeState = presistentStore(node.props.id + "-current-node-state", node.props.defaultVisible, driver, treeName);
  component_subscribe($$self, currentNodeState, (value) => $$invalidate(7, $currentNodeState = value));
  let nodeExpanded = presistentStore(node.props.id + "-current-node-expansion-state", true, driver, treeName);
  component_subscribe($$self, nodeExpanded, (value) => $$invalidate(8, $nodeExpanded = value));
  console.log(node.props);
  if (node.children) {
    let childCount = node.children.length;
    childNodeList.subscribe((value) => {
      if (value.checked.size === 0) {
        set_store_value(currentNodeState, $currentNodeState = false, $currentNodeState);
        $$invalidate(6, currentNodeIndeterminate = false);
        $childToParentList.indeterminate.delete(node.props.id);
      } else if (value.checked.size === childCount) {
        set_store_value(currentNodeState, $currentNodeState = true, $currentNodeState);
        $$invalidate(6, currentNodeIndeterminate = false);
        $childToParentList.indeterminate.delete(node.props.id);
      } else {
        $$invalidate(6, currentNodeIndeterminate = true);
        $childToParentList.indeterminate.add(node.props.id);
      }
      if (value.indeterminate.size > 0) {
        $$invalidate(6, currentNodeIndeterminate = true);
        $childToParentList.indeterminate.add(node.props.id);
      }
      childToParentList.set($childToParentList);
    });
  }
  currentNodeState.subscribe((value) => {
    if (value) {
      $childToParentList.checked.add(node.props.id);
    } else {
      $childToParentList.checked.delete(node.props.id);
    }
    childToParentList.set($childToParentList);
  });
  parentNodeState.subscribe((value) => {
    set_store_value(currentNodeState, $currentNodeState = value, $currentNodeState);
  });
  function input_change_handler() {
    $nodeExpanded = this.checked;
    nodeExpanded.set($nodeExpanded);
  }
  function input_change_handler_1() {
    $currentNodeState = this.checked;
    currentNodeState.set($currentNodeState);
    currentNodeIndeterminate = this.indeterminate;
    $$invalidate(6, currentNodeIndeterminate);
  }
  function input_change_handler_2() {
    $currentNodeState = this.checked;
    currentNodeState.set($currentNodeState);
    currentNodeIndeterminate = this.indeterminate;
    $$invalidate(6, currentNodeIndeterminate);
  }
  $$self.$$set = ($$props2) => {
    if ("treeName" in $$props2)
      $$invalidate(0, treeName = $$props2.treeName);
    if ("parentNodeState" in $$props2)
      $$invalidate(12, parentNodeState = $$props2.parentNodeState);
    if ("node" in $$props2)
      $$invalidate(1, node = $$props2.node);
    if ("level" in $$props2)
      $$invalidate(2, level = $$props2.level);
    if ("parent" in $$props2)
      $$invalidate(3, parent = $$props2.parent);
    if ("driver" in $$props2)
      $$invalidate(4, driver = $$props2.driver);
    if ("childToParentList" in $$props2)
      $$subscribe_childToParentList($$invalidate(5, childToParentList = $$props2.childToParentList));
  };
  return [
    treeName,
    node,
    level,
    parent,
    driver,
    childToParentList,
    currentNodeIndeterminate,
    $currentNodeState,
    $nodeExpanded,
    childNodeList,
    currentNodeState,
    nodeExpanded,
    parentNodeState,
    input_change_handler,
    input_change_handler_1,
    input_change_handler_2
  ];
}
class Tree extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$4, safe_not_equal, {
      treeName: 0,
      parentNodeState: 12,
      node: 1,
      level: 2,
      parent: 3,
      driver: 4,
      childToParentList: 5
    });
  }
}
var TreeItem_svelte_svelte_type_style_lang = "";
function create_fragment$3(ctx) {
  let div;
  let label;
  let t1;
  let input;
  return {
    c() {
      div = element("div");
      label = element("label");
      label.textContent = "TreeItem Component";
      t1 = space();
      input = element("input");
      attr(label, "class", "svelte-1c6vds7");
      attr(input, "type", "checkbox");
      input.checked = ctx[0];
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, label);
      append(div, t1);
      append(div, input);
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        input.checked = ctx2[0];
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { controlChecked = false } = $$props;
  let { props } = $$props;
  $$self.$$set = ($$props2) => {
    if ("controlChecked" in $$props2)
      $$invalidate(0, controlChecked = $$props2.controlChecked);
    if ("props" in $$props2)
      $$invalidate(1, props = $$props2.props);
  };
  return [controlChecked, props];
}
class TreeItem extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$3, safe_not_equal, { controlChecked: 0, props: 1 });
  }
}
var TreeNode_svelte_svelte_type_style_lang = "";
function create_fragment$2(ctx) {
  let div;
  let label;
  let t1;
  let input;
  return {
    c() {
      div = element("div");
      label = element("label");
      label.textContent = "TreeNode Component";
      t1 = space();
      input = element("input");
      attr(label, "class", "svelte-q4osw6");
      attr(input, "type", "checkbox");
      input.checked = ctx[0];
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, label);
      append(div, t1);
      append(div, input);
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        input.checked = ctx2[0];
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { controlChecked = false } = $$props;
  let { props } = $$props;
  $$self.$$set = ($$props2) => {
    if ("controlChecked" in $$props2)
      $$invalidate(0, controlChecked = $$props2.controlChecked);
    if ("props" in $$props2)
      $$invalidate(1, props = $$props2.props);
  };
  return [controlChecked, props];
}
class TreeNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$2, safe_not_equal, { controlChecked: 0, props: 1 });
  }
}
var TreeRoot_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let div;
  let label;
  let t1;
  let input;
  return {
    c() {
      div = element("div");
      label = element("label");
      label.textContent = "TreeRoot Component";
      t1 = space();
      input = element("input");
      attr(label, "class", "svelte-1as1qw0");
      attr(input, "type", "checkbox");
      input.checked = ctx[0];
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, label);
      append(div, t1);
      append(div, input);
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        input.checked = ctx2[0];
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { controlChecked = false } = $$props;
  let { props } = $$props;
  $$self.$$set = ($$props2) => {
    if ("controlChecked" in $$props2)
      $$invalidate(0, controlChecked = $$props2.controlChecked);
    if ("props" in $$props2)
      $$invalidate(1, props = $$props2.props);
  };
  return [controlChecked, props];
}
class TreeRoot extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$1, safe_not_equal, { controlChecked: 0, props: 1 });
  }
}
const treeData = {
  props: { id: "root-node", label: "root", component: TreeRoot },
  children: [
    {
      props: { id: "node1", label: "node1", component: TreeNode },
      children: [
        { props: { id: "item1-1", label: "item1.1", component: TreeItem } },
        { props: { id: "item1-2", label: "item1.2", component: TreeItem } },
        {
          props: { id: "node11", label: "node1", component: TreeNode },
          children: [
            { props: { id: "item11-1", label: "item11.1", component: TreeItem } },
            { props: { id: "item11-2", label: "item11.2", component: TreeItem } }
          ]
        }
      ]
    },
    {
      props: { id: "node2", label: "node2", component: TreeNode },
      children: [
        { props: { id: "item2-1", label: "item2.1", component: TreeItem } },
        { props: { id: "item2-2", label: "item2.2", component: TreeItem } }
      ]
    }
  ]
};
function create_fragment(ctx) {
  let p0;
  let t1;
  let treeroot;
  let t2;
  let p1;
  let t4;
  let treenode;
  let t5;
  let p2;
  let t7;
  let treeitem;
  let t8;
  let tree_1;
  let current;
  treeroot = new TreeRoot({});
  treenode = new TreeNode({});
  treeitem = new TreeItem({});
  tree_1 = new Tree({
    props: { node: treeData, treeName: "test-tree" }
  });
  return {
    c() {
      p0 = element("p");
      p0.textContent = "Custom componenet 1:";
      t1 = space();
      create_component(treeroot.$$.fragment);
      t2 = space();
      p1 = element("p");
      p1.textContent = "Custom componenet 2:";
      t4 = space();
      create_component(treenode.$$.fragment);
      t5 = space();
      p2 = element("p");
      p2.textContent = "Custom componenet 3:";
      t7 = space();
      create_component(treeitem.$$.fragment);
      t8 = space();
      create_component(tree_1.$$.fragment);
    },
    m(target, anchor) {
      insert(target, p0, anchor);
      insert(target, t1, anchor);
      mount_component(treeroot, target, anchor);
      insert(target, t2, anchor);
      insert(target, p1, anchor);
      insert(target, t4, anchor);
      mount_component(treenode, target, anchor);
      insert(target, t5, anchor);
      insert(target, p2, anchor);
      insert(target, t7, anchor);
      mount_component(treeitem, target, anchor);
      insert(target, t8, anchor);
      mount_component(tree_1, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(treeroot.$$.fragment, local);
      transition_in(treenode.$$.fragment, local);
      transition_in(treeitem.$$.fragment, local);
      transition_in(tree_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(treeroot.$$.fragment, local);
      transition_out(treenode.$$.fragment, local);
      transition_out(treeitem.$$.fragment, local);
      transition_out(tree_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(p0);
      if (detaching)
        detach(t1);
      destroy_component(treeroot, detaching);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(p1);
      if (detaching)
        detach(t4);
      destroy_component(treenode, detaching);
      if (detaching)
        detach(t5);
      if (detaching)
        detach(p2);
      if (detaching)
        detach(t7);
      destroy_component(treeitem, detaching);
      if (detaching)
        detach(t8);
      destroy_component(tree_1, detaching);
    }
  };
}
class App extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
new App({
  target: document.body
});

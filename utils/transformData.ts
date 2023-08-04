// import { SearchIcon } from "tdesign-icons-vue-next";
// const { data: res } = await useAsyncData("res", () => queryContent("/").find());

import type { TreeNode } from '../types/TreeNode'

function transformData(res: { l1Class: string;l2Class: string }[]) {
  const ret = [] as TreeNode[]

  const l1ClassMap = new Map<string, TreeNode>()
  const l2ClassMap = new Map<string, TreeNode>()

  for (const { l1Class, l2Class } of res) {
    if (!l1ClassMap.has(l1Class)) {
      const node = {
        value: l1Class,
        label: l1Class,
        children: [] as TreeNode[],
      }
      l1ClassMap.set(l1Class, node)
      ret.push(node)
    }

    const l1ClassNode = l1ClassMap.get(l1Class)!

    if (!l2ClassMap.has(l2Class)) {
      const node = {
        value: l2Class,
        label: l2Class,
      }
      l2ClassMap.set(l2Class, node)
      l1ClassNode.children!.push(node)
    }
  }

  return ret
}

export default transformData

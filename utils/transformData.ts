// import { SearchIcon } from "tdesign-icons-vue-next";
// const { data: res } = await useAsyncData("res", () => queryContent("/").find());

interface TreeNode {
  value: string
  label: string
  children?: TreeNode[]
}

function transformData(res: any) {
  const fin = [] as {
    title: string
    target: string
    l1_title: string
    l2_title: string
  }[]
  const initMapping = {} as Record<string, string[]>
  res.forEach((item: any) => {
    const { _file } = item
    const [l1_title, l2_title] = _file
      .split('/')
      .map((a: string) => a.replace('.json', ''))

    if (initMapping[l1_title])
      initMapping[l1_title].push(l2_title)
    else
      initMapping[l1_title] = [l2_title]

    item.data.forEach((list_item: any) => {
      const { title, target } = list_item
      fin.push({
        title,
        target,
        l1_title,
        l2_title,
      })
    })
  })

  const treeList = [] as TreeNode[]
  for (const l1_title in initMapping) {
    const children = initMapping[l1_title].map(l2_title => ({
      value: l2_title,
      label: l2_title,
    }))
    treeList.push({
      value: l1_title,
      label: l1_title,
      children,
    })
  }

  return { treeList, fin }
}

export default transformData

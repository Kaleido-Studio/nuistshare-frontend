// import { SearchIcon } from "tdesign-icons-vue-next";
// const { data: res } = await useAsyncData("res", () => queryContent("/").find());

const transformData = (res) => {
  const fin = [];
  const initMapping = {};
  res.forEach((item) => {
    const { _file } = item;
    const [l1_title, l2_title] = _file
      .split("/")
      .map((a) => a.replace(".json", ""));

    if (initMapping[l1_title]) {
      initMapping[l1_title].push(l2_title);
    } else {
      initMapping[l1_title] = [l2_title];
    }

    item.body.forEach((list_item) => {
      const { title, target } = list_item;
      fin.push({
        title,
        target,
        l1_title,
        l2_title,
      });
    });
  });

  const treeList = [];
  for (const l1_title in initMapping) {
    const children = initMapping[l1_title].map((l2_title) => ({
      value: l2_title,
      label: l2_title,
    }));
    treeList.push({
      value: l1_title,
      label: l1_title,
      children,
    });
  }

  return { treeList, fin };
};

export default transformData;

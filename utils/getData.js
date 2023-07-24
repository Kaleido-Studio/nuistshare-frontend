const getData = () => {
  // @ts-ignore
  const res = queryContent("/").find();

  const fin = [];
  res.forEach((item) => {
    const { _file } = item;
    const [l1_title, l2_title] = _file
      .split("/")
      .map((a) => a.replace(".json", ""));

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
};

export default getData;

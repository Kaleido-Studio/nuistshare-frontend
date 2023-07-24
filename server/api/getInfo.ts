export default defineEventHandler(async (event) => {
  const meta = getQuery(event);
  let [link, type] = ["", ""];
  for (const q in meta) {
    switch (q) {
      case "link": {
        // @ts-expect-error
        link = decodeURIComponent(meta["link"]);
        break;
      }
      case "type": {
        // @ts-expect-error
        type = decodeURIComponent(meta["type"]);
        break;
      }
    }
  }
  if (type === "cloudreve") {
    const hash = link.split("/").pop();
    const res = await fetch(
      `https://imon.agentwei.cn/api/v3/share/info/${hash}`
    );
    return await res.json();
  }
  //   console.log(targetUrl);
  return "Hello World";
});

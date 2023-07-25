export default defineEventHandler(async (event) => {
  const meta = getQuery(event)
  let [link, type] = ['', '']
  for (const q in meta) {
    switch (q) {
      case 'link': {
        link = decodeURIComponent(meta.link as string)
        break
      }
      case 'type': {
        type = decodeURIComponent(meta.type as string)
        break
      }
    }
  }
  if (type === 'cloudreve') {
    const hash = link.split('/').pop()
    const res = await fetch(
      `https://imon.agentwei.cn/api/v3/share/download/${hash}`,
      {
        method: 'PUT',
      },
    )
    return await res.json()
  }
  //   console.log(targetUrl);
  return 'Hello World'
})

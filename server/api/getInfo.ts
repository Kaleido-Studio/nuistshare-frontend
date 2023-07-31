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
    const domainName = link.split('/')[2]
    const res = await fetch(
      `https://${domainName}/api/v3/share/info/${hash}`,
    )
    const { data } = await res.json()
    try {
      const {
        downloads: downloadCount,
        views: viewCount,
        createDate: lastUpdated,
        source: { size },
      } = data
      return {
        msg: 'success',
        data: { downloadCount, viewCount, lastUpdated, size },
      }
    }
    catch {
      return {
        msg: 'error',
        data: { downloadCount: undefined, viewCount: undefined, lastUpdated: undefined, size: undefined },
      }
    }
  }
  //   console.log(targetUrl);
  return {
    msg: 'error',
    data: { downloadCount: undefined, viewCount: undefined, lastUpdated: undefined, size: undefined },
  }
})

import { For, type Component } from 'solid-js'
import type { DataResource } from '../types/Res'
import ResCard from './ResCard'

const ResList: Component<{ list: DataResource[] }> = (props) => {
  const target = {} as {
    // index string
    [key: string]: {
      [key: string]: DataResource[]
    }
  }

  // eslint-disable-next-line solid/reactivity
  props.list.forEach((item) => {
    if (!target[item.l1_title]) {
      target[item.l1_title] = {}
    }
    if (!target[item.l1_title][item.l2_title]) {
      target[item.l1_title][item.l2_title] = []
    }
    target[item.l1_title][item.l2_title].push(item)
  })

  const res = (
    <div class="max-w-[1080px] mx-auto">
      <For each={Object.entries(target)}>
        {([l1title, line]) => {
          return (
            <>
              <h1 class="text-2xl font-bold my-6">{l1title}</h1>
              {Object.entries(line).map(([l2title, items]) => {
                return (
                  <>
                    <div class="w-[1080px]">
                      <h2 class="text-xl">{l2title}</h2>
                      <div class="flex  flex-wrap auto-cols-min container z-1 items-start relative  mx-auto">
                        <For each={items}>{(res) => <ResCard {...res} />}</For>
                      </div>
                    </div>
                  </>
                )
              })}
            </>
          )
        }}
      </For>
    </div>
  )
  return res
}

export default ResList

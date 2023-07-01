import { For, type Component } from 'solid-js'
import type { DataResource } from '../types/Res'
import ResCard from './ResCard'
import '../styles/section.css'

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
              <h1 class="divider text-3xl text-center font-bold my-6">
                {l1title}
              </h1>
              {Object.entries(line).map(([l2title, items]) => {
                return (
                  <>
                    <div class="w-auto mx-auto py-5">
                      <fieldset class="border-1 slight-shadow bg-[#fbfbfb]  sm:px-12 px-4 py-5">
                        <legend class="text-2xl  text-center">{l2title}</legend>
                        <div class="flex  flex-wrap auto-cols-min container z-1 items-start relative  mx-auto">
                          <For each={items}>
                            {(res) => <ResCard {...res} />}
                          </For>
                        </div>
                      </fieldset>
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

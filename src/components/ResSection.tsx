import { For, type Component } from 'solid-js'
import type { DataResource } from '../types/Res'
import ResCard from './ResCard'

const ResList: Component<{ list: DataResource[] }> = (props) => {
  const list = (
    <div class="flex flex-wrap container z-1 items-center relative  justify-between mx-auto">
      <For each={props.list}>{(res) => <ResCard {...res} />}</For>
    </div>
  )
  return list
}

export default ResList

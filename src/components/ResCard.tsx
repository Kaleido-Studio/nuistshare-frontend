import type { Component } from 'solid-js'
import type { DataResource } from '../types/Res'

const ResCard: Component<DataResource> = (props) => {
  const card = (
    <div class="border shadow-sm z-1 relative bg-white w-1/4 h-md m-4 p-4 hover:shadow-xl transition duration-300">
      <h2>{props.title}</h2>
      <p>{props.l1_title}</p>
      <a href={props.href}>Learn more</a>
    </div>
  )

  return card
}

export default ResCard

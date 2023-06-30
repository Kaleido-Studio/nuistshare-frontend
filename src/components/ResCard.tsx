import type { Component } from 'solid-js'
import type { DataResource } from '../types/Res'

const ResCard: Component<DataResource> = (props) => {
  const card = (
    <div class="border shadow-sm z-1 py-7 relative bg-white w-[330px] h-md  p-4 hover:shadow-xl transition duration-300">
      <h2 class="font-bold">{props.title}</h2>
      <p class="px-2 py-1 bg-gray-300 text-black inline-block text-sm my-2 rounded-xl">
        {props.l1_title}
      </p>
      <a
        href={props.href}
        target="_blank"
        class="transition duration-300 text-end absolute right-2 bottom-4 font-bold px-4 bg-[#171717] rounded-lg text-sm text-white py-2 border hover:bg-white hover:text-black hover:border-black"
      >
        下载
      </a>
    </div>
  )

  return card
}

export default ResCard

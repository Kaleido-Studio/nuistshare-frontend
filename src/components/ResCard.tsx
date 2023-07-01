import type { Component } from 'solid-js'
import type { DataResource } from '../types/Res'

const ResCard: Component<DataResource> = (props) => {
  const card = (
    <div class="sm:basis-1/2 basis-1/1 sm:px-2 py-2 w-full">
      <div class="slight-shadow rounded-xl   z-1 py-5 flex justify-between relative bg-[#ffffff] items-center h-auto  px-4 hover:shadow-xl transition duration-300">
        <h2 class="font-bold truncate max-w-[13rem]">{props.title}</h2>
        {/* <p class="px-2 py-1 bg-gray-300 text-black inline-block text-sm my-2 rounded-xl">
          {props.l1_title}
        </p> */}
        <a
          href={props.href}
          target="_blank"
          class="transition duration-300 font-bold  px-4  rounded-lg text-sm text-black py-2 border hover:bg-black hover:text-white border-gray-500"
        >
          下载
        </a>
      </div>
    </div>
  )

  return card
}

export default ResCard

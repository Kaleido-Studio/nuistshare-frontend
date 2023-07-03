import { createSignal, type Component, untrack } from 'solid-js'
import type { DataResource } from '../types/Res'
import { SolidBottomsheet } from 'solid-bottomsheet'

const ResCard: Component<DataResource> = (props) => {
  const [isSnapVariantOpen, setDownOpen] = createSignal(false)
  const url = untrack(() => props.href)
  const fileHash = url.substring(url.lastIndexOf('/') + 1)
  const downloadUri = ``
  const card = (
    <>
      <div class="xl:basis-1/2 basis-1/1 md:px-2 py-2 w-full">
        <div class="slight-shadow rounded-xl   z-1 py-5 flex justify-between relative bg-[#ffffff] items-center h-auto  px-4 hover:shadow-xl transition duration-300">
          <h2 class="font-bold truncate max-w-[13rem]">{props.title}</h2>

          <button
            onClick={() => setDownOpen(true)}
            class="transition duration-300 font-bold  px-4  rounded-lg text-sm text-black py-2 border hover:bg-black hover:text-white border-gray-500"
          >
            下载
          </button>
        </div>
      </div>

      {isSnapVariantOpen() && (
        <SolidBottomsheet
          variant="snap"
          defaultSnapPoint={({ maxHeight }) => maxHeight / 2}
          snapPoints={({ maxHeight }) => [
            maxHeight,
            maxHeight / 2,
            maxHeight / 1.5,
          ]}
          onClose={() => setDownOpen(false)}
        >
          <div class="flex flex-col items-center p-4">
            <h1 class="sm:text-2xl text-xl font-bold py-4">{props.title}</h1>
            <p>
              {props.l1_title}, {props.l2_title}
            </p>
            <button
              onClick={() => window.open(url)}
              class="px-4 mt-6 rounded-xl  py-2 m-3 sm:w-1/3 w-full border-[1px] border-gray-400
             transition-all duration-300 bg-white text-black hover:bg-black hover:text-white"
            >
              预览
            </button>
            <button
              onClick={() => window.open(url)}
              class="px-4  rounded-xl py-2 m-3 sm:w-1/3 w-full
             border-1  border-[1px] border-gray-400 bg-black text-white
             hover:text-black hover:bg-white transition-all duration-300"
            >
              直接下载
            </button>
          </div>
        </SolidBottomsheet>
      )}
    </>
  )

  return card
}

export default ResCard

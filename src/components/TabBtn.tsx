import { createSignal, For } from 'solid-js'

import 'solid-bottomsheet/styles.css'
import { SolidBottomsheet } from 'solid-bottomsheet'
import L1Nav from './L1Nav'
import sideBar from './SideBar'
import { currentL1Listing, setL1, currentL1Title } from '../data'
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const TabBtn = () => {
  const [isSnapVariantOpen, setSnapVariantOpen] = createSignal(false)
  const titles = currentL1Listing()

  return (
    <>
      <div
        class="search hover:cursor-pointer hover:opacity-60 inline-flex"
        onClick={() => setSnapVariantOpen(true)}
      >
        <img width="25" height="25" src="/menu.svg" alt="tab" />
      </div>
      {isSnapVariantOpen() && (
        <SolidBottomsheet
          variant="snap"
          defaultSnapPoint={({ maxHeight }) => maxHeight / 1.4}
          snapPoints={({ maxHeight }) => [maxHeight / 2, maxHeight / 1.4]}
          onClose={() => setSnapVariantOpen(false)}
        >
          <div class="text-center text-xl font-bold py-3">
            <h1>学科</h1>
          </div>
          <div class="text-center">
            {/* for each item in titles */}
            <ul>
              <For each={[...titles.values()]}>
                {(title) => {
                  return (
                    <li
                      class={
                        'py-2 transition-all duration-300 text-base ' +
                        (currentL1Title() == title ? 'text-shadow' : '')
                      }
                    >
                      <a href={`#${title}`}>{title}</a>
                    </li>
                  )
                }}
              </For>
            </ul>
          </div>
        </SolidBottomsheet>
      )}
    </>
  )
}

export default TabBtn

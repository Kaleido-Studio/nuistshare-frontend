import { For } from 'solid-js'
import sideBar from './SideBar'
import { currentL2Listing } from '../data'

const L1Nav = () => {
  return (
    <div class="sticky top-[10rem] p-6 slight-shadow m-5 w-[12rem] border-1 ">
      <div class="py-3 text-xl font-bold">
        <h1>课程</h1>
      </div>
      <div class="">
        {/* for each item in titles */}
        <ul>
          <For each={[...currentL2Listing().values()]}>
            {(title) => {
              return (
                <li class="py-1">
                  <a href={`#${title}`}>{title}</a>
                </li>
              )
            }}
          </For>
        </ul>
      </div>
    </div>
  )
}

export default L1Nav

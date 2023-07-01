import { For, onMount } from 'solid-js'
import sideBar from './SideBar'
import { currentL1Listing } from '../data'

const L1Nav = () => {
  const titles = currentL1Listing()

  onMount(() => {
    const observer = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) {
        console.log('is entering' + e[0].target.id)
      } else {
        console.log('is leaving' + e[0].target.id)
      }
    })
    titles.forEach((title) => {
      observer.observe(document.getElementById(title)!)
    })
  })

  return (
    <div class="sticky top-[10rem] p-6">
      <div class="text-right text-xl font-bold py-10">
        <h1>学科</h1>
      </div>
      <div class="text-right">
        {/* for each item in titles */}
        <ul>
          <For each={[...titles.values()]}>
            {(title) => {
              return (
                <li class="py-2 text-base">
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

import { untrack, type Component, For } from 'solid-js'

const sideBar: Component<{ titles: Set<string>; lefthand: Boolean }> = (
  props,
) => {
  return (
    <div class="sticky  top-[10rem] p-6">
      <div class="">
        <h1>SideBar</h1>
      </div>
      <div class={'mx-auto' + props.lefthand ? 'text-left' : 'text-right'}>
        <ul>
          <For each={[...props.titles.values()]}>
            {(title) => {
              return (
                <li>
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

export default sideBar

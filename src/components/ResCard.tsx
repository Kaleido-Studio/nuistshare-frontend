import type { Component } from 'solid-js'

const ResCard: Component = () => {
  const props = {
    name: 'name',
    description: 'description',
    link: 'link',
  }
  const card = (
    <div class="b-1 shadow-xl">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <a href={props.link}>Learn more</a>
    </div>
  )

  return card
}

export default ResCard

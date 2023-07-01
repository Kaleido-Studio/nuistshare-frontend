import data from './resourse.json'
import { createMemo, createSignal } from 'solid-js'

const [currentL1Title, setL1] = createSignal('数学类')
const [currentL2Title, setL2] = createSignal('JavaScript')

export const currentL1Listing = createMemo(() => {
  const l1_title_set = new Set<string>()

  data.forEach((item: any) => {
    l1_title_set.add(item.l1_title)
  })
  return l1_title_set
})

export const currentL2Listing = createMemo(() => {
  const l2_title_set = new Set<string>()

  data.forEach((item: any) => {
    if (item.l1_title === currentL1Title()) {
      l2_title_set.add(item.l2_title)
    }
  })
  return l2_title_set
})

export const getTitles = () => {
  const l1_title_set = new Set<string>()
  const l2_title_set = new Set<string>()

  data.forEach((item: any) => {
    l1_title_set.add(item.l1_title)
    l2_title_set.add(item.l2_title)
  })

  return { l1_title_set, l2_title_set }
}
const dummyInnner = <T>(data: T) => data

const dummyFun = <Z, M>(data: typeof dummyInnner<Z>) => dummyInnner(data)

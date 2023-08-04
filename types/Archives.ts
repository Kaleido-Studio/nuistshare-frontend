export interface Archive<> {
  id: number
  name: string
  l1Class: string
  l2Class: string
  type: string
  downloadCount: number
  viewCount: number
  favCount: number
  public: true
  uploader: string
  uploadTime: string
  metadata: Metadata[]
}

export interface Metadata {
  id: number
  label: string
}

import { PhotoURL } from '~/models/photo_url'

export const thumbSizes: number[] = [128, 256, 512, 1024, 2048]

export type GalleryImage = {
  file: string
  fileName: string // To identify /banners/[id]/fileName
  mimeType: string
  urls: PhotoURL
  status: boolean
}

export const imageSrcset = (urls: PhotoURL): string => {
  const res: string[] = []

  for (const size of Object.keys(urls)) {
    if (urls[size]) {
      res.push(`${urls[size]} ${size.substring(1)}w`)
    }
  }
  return res.join(', ')
}

export const galleryMimeTypes = [
  'image/jpeg', 'image/png', 'image/gif', 'image/webp',
  'video/mp4',
]

export const imageMimeTypes = [
  'image/webp',
  'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/pipeg', 'image/tiff'
]

export const imageExtensions = [
  '.webp',
  '.jpeg', '.jpg', '.png', '.gif', '.pipeg', '.tiff'
]

export const videoMimeTypes = [
  "video/x-flv",
  "video/mp4",
  "application/x-mpegURL",
  "video/MP2T",
  "video/3gpp",
  "video/quicktime",
  "video/x-msvideo",
  "video/x-ms-wmv"
]

export const isImage = (mimeType: string, filePath?: string): boolean => {
  if (mimeType) {
    return imageMimeTypes.includes(mimeType);
  }
  for (let c = 0; c < imageExtensions.length; c++) {
    if (filePath && filePath.endsWith(imageExtensions[c])) {
      return true
    }
  }
  return false
}

export const isVideo = (mimeType: string, path?: string): boolean => {
  return videoMimeTypes.includes(mimeType);
}
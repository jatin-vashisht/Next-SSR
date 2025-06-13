import Image from "next/image"

interface ImageItem {
  id: number
  src: string
  alt: string
  width: number
  height: number
}

interface ImageGalleryProps {
  images: ImageItem[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
      {images.map((image, index) => (
        <div key={image.id} className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="w-full h-auto"
            // Use priority for the first image (likely LCP)
            priority={index === 0}
            // Only lazy load non-LCP images
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  )
}

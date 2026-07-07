import Image from "next/image"

export default function PageBanner({
  title,
  focusY = "50%",
}: {
  title: string
  focusY?: string
}) {
  return (
    <div className="relative mb-8 h-40 overflow-hidden rounded-lg border border-zinc-800 sm:h-48">
      <Image
        src="/bookshelf.jpg"
        alt=""
        fill
        style={{ objectPosition: `50% ${focusY}` }}
        className="object-cover grayscale"
      />
      <div className="absolute inset-0 bg-zinc-950/70" />
      <div className="absolute inset-0 flex items-center px-6 sm:px-8">
        <h1 className="text-2xl font-bold text-zinc-100 sm:text-3xl">
          {title}
        </h1>
      </div>
    </div>
  )
}

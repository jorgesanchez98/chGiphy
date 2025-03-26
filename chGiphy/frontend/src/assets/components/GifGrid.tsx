// src/components/GifGrid.tsx
type Gif = {
    id: string
    title: string
    images: {
        fixed_height: {
            url: string
        }
    }
}

type GifGridProps = {
    gifs: Gif[]
}

export default function GifGrid({ gifs }: GifGridProps) {
    return (
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                {gifs.length === 0 ? (
                    <p className="text-center text-gray-500 col-span-full">No GIFs to display</p>
                ) : (

                    gifs.map((gif) => (

                        <div className="relative ">
                            <div className="relative flex h-full flex-col overflow-hidden">
                                <div className="@container relative w-full max-lg:mx-auto max-lg:max-w-sm">
                                        <img
                                            className="size-full object-cover object-top"
                                            src={gif.images.fixed_height.url}
                                            alt={gif.title} />
                                </div>
                            </div>
                        </div>

                    ))

                )}
                </div>
    )
}

// src/components/GifGrid.tsx
type GifGridProps = {
    gifs: any[] // We'll type this properly in later phases
}

export default function GifGrid({ gifs }: GifGridProps) {
    return (
        <div className="gif-grid">
            {gifs.length === 0 ? (
                <p>No GIFs to display</p>
            ) : (
                gifs.map((gif, idx) => (
                    <div key={idx} className="gif-item">
                        {/* Placeholder */}
                        <p>GIF {idx + 1}</p>
                    </div>
                ))
            )}
        </div>
    )
}

// src/App.tsx
import { useState } from 'react'
import './App.css'
import SearchBar from './assets/components/SearchBar'
import GifGrid from './assets/components/GifGrid'
import Pagination from './assets/components/Pagination'

function App() {
    const [gifs, setGifs] = useState<never[]>([])

    const [currentPage, setCurrentPage] = useState(1);
    const [gifsPerPage] = useState(12);

    const indexOfLastGif = currentPage * gifsPerPage;
    const indexOfFirstGif = indexOfLastGif - gifsPerPage;
    const currentGifs = gifs.slice(indexOfFirstGif, indexOfLastGif);

    const handleSearch =  async (query: string, rating: string) => {
        try {
            const res = await fetch(`http://localhost:3000/api/giphy/search?query=${query}&rating=${rating}`)
            const data = await res.json()
            console.log(data)
            setGifs(data)
        } catch (err) {
            console.error('Error fetching GIFs:', err)
        }
    }

    return (
        <div className="max-w-1xl mx-auto p-4">
            <div className="container mx-auto">
                <header className="text-center mb-8 text-lg font-medium">
                    <h1>GIF Search</h1>
                </header>
                <SearchBar onSearch={handleSearch} />
                <GifGrid gifs={currentGifs} />

                <Pagination
                    gifsPerPage={gifsPerPage}
                    totalGifs={gifs.length}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default App

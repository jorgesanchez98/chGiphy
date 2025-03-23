// src/App.tsx
import { useState } from 'react'
import './App.css'
import SearchBar from './assets/components/SearchBar'
import GifGrid from './assets/components/GifGrid'

function App() {
    const [searchTerm, setSearchTerm] = useState('')
    const [gifs, setGifs] = useState<any[]>([])

    const handleSearch = (query: string) => {
        console.log('Searching for:', query)
        setSearchTerm(query)
        setGifs([]) // Will be replaced later with API results
    }

    return (
        <div className="app-container">
            <h1>GIF Search</h1>
            <SearchBar onSearch={handleSearch} />
            <GifGrid gifs={gifs} />
        </div>
    )
}

export default App

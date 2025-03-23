// src/components/SearchBar.tsx
import { useState } from 'react'

type SearchBarProps = {
    onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [input, setInput] = useState('')

    const handleSubmit = () => {
        if (input.trim()) {
            onSearch(input.trim())
        }
    }

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for a GIF..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Search</button>
        </div>
    )
}

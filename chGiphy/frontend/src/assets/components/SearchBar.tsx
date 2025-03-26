// src/components/SearchBar.tsx
import { useState } from 'react'

type SearchBarProps = {
    onSearch: (query: string, rating: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [input, setInput] = useState('')
    const [rating, setRating] = useState('g');


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (input.trim()) {
            onSearch(input.trim(), rating)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-full">
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input
                                        type="text"
                                        placeholder="Search for a GIF..."
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 md:text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label htmlFor="rating" className="block text-lg  leading-6 text-gray-900">
                                    Rating
                                </label>
                                <div className="mt-2 grid grid-cols-1 relative">
                                    <select
                                        id="rating"
                                        name="rating"
                                        value={rating}
                                        onChange={(e) => setRating(e.target.value)}
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 md:text-lg text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    >
                                        <option value="g">G</option>
                                        <option value="pg">PG</option>
                                        <option value="pg-13">PG-13</option>
                                        <option value="r">R</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-center gap-x-6">
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-10 py-2 text-lg font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Buscar
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

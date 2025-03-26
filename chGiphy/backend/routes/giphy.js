// server/routes/giphy.js
const express = require('express')
const axios = require('axios')
const router = express.Router()

router.get('/search', async (req, res) => {
    const { query, rating } = req.query
    const apiKey = process.env.GIPHY_API_KEY

    if (!query) return res.status(400).json({ error: 'Missing search query' })

    try {
        const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
            params: {
                api_key: apiKey,
                q: query,
                limit: 100,
                rating: rating,
            },
        })

        res.json(response.data.data)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to fetch from Giphy API' })
    }
})

module.exports = router

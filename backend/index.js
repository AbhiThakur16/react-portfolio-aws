require('dotenv').config()

const express = require('express')
const { Pool } = require('pg')

const app = express()

app.disable('x-powered-by')

app.use(express.json())

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
})

app.get('/', (req, res) => {
  res.json({
    message: 'React Portfolio API is running',
  })
})

app.get('/api/visitors', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM visitors ORDER BY id DESC'
    )

    res.json(result.rows)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      error: 'Database error',
    })
  }
})

const PORT = process.env.PORT || 3001

app.listen(PORT, '127.0.0.1', () => {
  console.log(`API running on port ${PORT}`)
})

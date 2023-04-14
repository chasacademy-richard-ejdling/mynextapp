import mysql from 'serverless-mysql'

const db = mysql({
    config: {
        host: process.env.DB_HOST,
        database: process.env.DB,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    }
})

export default async function executeQuery({ query, values }) {
    try {
        const results = await db.query(query, values)
        await db.end()
        return results
    } catch (error) {
        return { error }
    }
}
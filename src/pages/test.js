import { useEffect, useState } from "react"

export default function Testing() {
    const [username, setUsername] = useState('')

    function getHello() {
        fetch('http://localhost:3000/api/hello')
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => setUsername(data.name))
    }

    useEffect(() => {
        getHello()
    }, [])

    return (
        <div className="min-h-screen">
            <h1>Hello!</h1>
            <h2>Username: {username}</h2>
        </div>
    )
}
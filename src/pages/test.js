import { useEffect, useState } from "react"

export default function Testing() {
    const [usernames, setUsernames] = useState([])

    function getHello() {
        fetch('http://localhost:3000/api/users', {
            mode: 'no-cors'
        })
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => {
                console.log(data)
                setUsernames(data.map(user => user.username))
            })
    }

    useEffect(() => {
        getHello()
    }, [])

    return (
        <div className="min-h-screen">
            <h1>Hello!</h1>
            <h2>Usernames: {usernames.join(', ')}</h2>
        </div>
    )
}
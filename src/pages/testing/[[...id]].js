import { useRouter } from "next/router"

export default function RouterTest() {

    const router = useRouter()
    const { id } = router.query
    console.log(router.query)

    return <div className="flex min-h-screen">
        <h1>hej! This is {id ? id[0].split('-').join(' ') : ''}</h1>
    </div>
}
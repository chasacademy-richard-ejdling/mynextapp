const list = []

export default function handler(req, res) {
    if(req.method === 'POST'){
        list.push(req.body)
        console.log(list)
        res.send('ok')
    } else {
        res.status(400).send('only POST on this api')
    }
}
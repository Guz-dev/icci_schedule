import { useRouter } from "next/router"
import {Home} from '../crud'

const Entrada = () => {
    const router =useRouter()
    const {id} = router.query

    return (
        <div>
            <h1>Valor de parametro {id}</h1>
        </div>
    )
}

export default Entrada
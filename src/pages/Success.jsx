import { useEffect, useState } from "react"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import {Link, useNavigate} from "react-router-dom";


function Succes() {
    const [countdown, setCountdown] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {

        const timeOutId = setInterval(() => {
            setCountdown(preCount => {
                if(preCount === 1) {
                    clearInterval(timeOutId)
                    navigate("/")
                }
                return preCount -1;
            }
        )},1000)
        return () => clearInterval(timeOutId);
    }, [navigate])

    return (

        <>
           <section className="notFound">
            <div className="container">
                <img src="/sandwich.png" alt="success" />
                <h1>Volviendo al inicio en {countdown} segundos...</h1>
                <Link to={"/"}>
                    Volviendo al inicio <HiOutlineArrowNarrowRight/></Link>
            </div>
           </section>
        </>

    )

}

export default Succes
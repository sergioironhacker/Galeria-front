import { Link } from "react-router-dom"
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

function NotFound() {
  return (
    
    <>
    <section className="notFound">
    <div className="container">
      <img src="/notFound.svg" alt="notFound" />
      <h1>Sorry</h1>
      <p>689195597</p>
      <Link to={'/'}>Back to Home</Link>
      <span>
        <HiOutlineArrowNarrowRight />
      </span>
    </div>

    </section>
    </>
  )
}

export default NotFound
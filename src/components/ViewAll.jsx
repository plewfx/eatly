import { Link } from "react-router-dom"

const ViewAll = () => {
    return (
        <Link className="view-all" to='/menu'>View All
            <svg xmlns="http:/www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M2 9.90234H17.8041" stroke="#ACADB9" strokeWidth="2.25773" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.90234 2L17.8044 9.90206L9.90234 17.8041" stroke="#ACADB9" strokeWidth="2.25773" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </Link>
    )
}

export default ViewAll
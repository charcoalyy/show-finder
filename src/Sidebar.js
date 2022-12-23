import { Link } from 'react-router-dom';

const Sidebar = () => {
    return(
        <section className="sidebar">
            <Link to="/"> <h3>DISCOVER</h3> </Link>
            <Link to="/forum"> <h3>FORUM</h3> </Link>
        </section>
    )
}

export default Sidebar;
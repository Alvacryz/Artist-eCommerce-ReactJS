import ContainerItem from '../components/ItemListContainer';
import '../styles/Commission.css'
import { Link } from 'react-router-dom';

function Commission(){
    return(
        <main className = "commissionMain">
            <h2>¿Interested in requesting a commission?</h2>
            <ul className = "commissionMenu">
                <Link to="/commission/category/head">
                    <li>Face Portrait</li>
                </Link>
                <Link to="/commission/category/half">
                    <li>Half-Body</li>
                </Link>
                <Link to="/commission/category/full">
                    <li>Full-Body</li>                
                </Link>
                <Link to="/commission/category/other">
                    <li>Others</li>
                </Link>
                <Link to="/commission">
                    <li>All</li>
                </Link>
            </ul>
            <ContainerItem/>
        </main>
    );
}export default Commission;
import './Card.css';
import 'bootstrap/dist/css/bootstrap.css';
import CatFact from './CatFacts';
const Card = () => {
    return (
        <div class="card">
            <div class="card-body">
                <CatFact />
            </div>
        </div>
      );
};
export default Card;
import "./explore.css";
import Rhino from "/src/assets/rhino.jpg";

function Explore() {
    return (
        <div className="explore-container">
            <h1>Game Parks and Reserves</h1>
            <p>This subsection showcases well-known game parks and reserves, particularly in Kenya. Each of these parks is recognized for its unique species, ecological significance, and conservation efforts.</p>
            <br />
            <b>Highlights:</b>
            <div className="gamepark-grid">
            <div className="gamePark-card">
                <img src={Rhino} alt="rhino" />
                <h3>Masai Mara National Reserve (Kenya)</h3>
                <p> Known for hosting the annual Great Migration, Masai Mara is home to Africa's "Big Five" animals (lion, elephant, buffalo, leopard, and rhinoceros). Its rich biodiversity makes it a symbol of wildlife conservation in Africa.</p>

            </div>
            </div>
    </div>
        

    )
};
export default Explore;
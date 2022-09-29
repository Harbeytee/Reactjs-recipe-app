export default function Recipe(prop) {
    return (
       
        <div className="recipe">
            <div className="image">
                <h1>{prop.title}</h1>
        
                <img className="food" src={prop.image} alt="" />
            </div>
            
            <h3>Calories: {prop.calories}</h3>
            <ul>
                {
                    prop.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.text}</li>))
                }
            </ul>
            
        </div>
        
       
        
    )
}
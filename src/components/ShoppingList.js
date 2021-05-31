import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import Categories from "./Categories";
import {useState} from "react";

function ShoppingList({ cart, updateCart }) {

    const [selectedCat, updateSelectedCat] = useState('')
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    function addToCart(name, price){
        const currentPlantAdded =  cart.find((plant) => plant.name === name)
        if (currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                {name, price, amount: currentPlantAdded.amount + 1 }
            ])
        } else {
            updateCart([...cart, {name, price, amount : 1}])
        }
    }

    return (
        <div className='lmj-shopping-list'>
            <Categories
                selectedCat={selectedCat}
                updateSelectedCat={updateSelectedCat}
                categories={categories}
            />

            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light , price, category }) => (
                    (!selectedCat || selectedCat === category) ?
                        <div key={id}>
                        <PlantItem cover={cover} name={name} water={water} light={light} category={category} price={price}/>
                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                     </div> : null
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList
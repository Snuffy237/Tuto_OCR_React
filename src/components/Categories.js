import '../styles/Categories.css'

function Categories( { selectedCat, categories, updateSelectedCat }){

    return (
        <div className='lmj-categories'>
            <select
                value={selectedCat}
                onChange={(e) => updateSelectedCat(e.target.value)}
                className='lmj-categories-select'
            >
                <option value=''>---</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button onClick={() => updateSelectedCat('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories
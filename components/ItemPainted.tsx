const ItemPainted = ({label, span}) => {
    return (
        <div>
            <div className="flex flex-col">
                <label htmlFor="" className="pl-2 mb-1">{label}</label>
                <span className="shadow-lg p-2 rounded-full bg-gray-500 text-white">{span}</span>
            </div>
        </div>
    )
}

export default ItemPainted;
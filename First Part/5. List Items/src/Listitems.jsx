function Listitem() {
    let foodItems = ["dal", "Green", "milk", "ghee", "tamato"];
    return (
        <>
            <h1>Health food</h1>
            <ul className="list-group">
                {foodItems.map((item) => (
                    <li key={item} className="list-group">
                        {item}
                    </li>
                ))}</ul>
        </>
    )
}

export default Listitem;
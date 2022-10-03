export default function ContactList ({ items, removeContact }) {
    console.log(items);
    const elements = items.map(({ name, id, number }) => {
        return <li className="contacts-item" key={id}>
            {name}: {number}
            <button type="button" onClick={() => removeContact(id)}>Remove</button>
        </li>
    })

    return (
        <ul className="contact=list">{elements}</ul>
    )
}
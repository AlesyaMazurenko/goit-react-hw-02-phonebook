export default function ContactList ({ items }) {
    console.log(items);
    const elements = items.map(({ name, id, number }) => {
        return <li className="contacts-item" key={id}>
            {name}: {number}
        </li>
    })

    return (
        <ul className="contact=list">{elements}</ul>
    )
}
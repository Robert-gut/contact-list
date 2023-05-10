import './ContactItem.css'


const ContactItem = ({ stor }) => {
    return(
        <div>
            {stor.map((contact) => (
                <div key={contact.id}>
                    <img src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`} alt="avatar" />
                    <div>
                        <h3>{contact.name}</h3>
                        <p>{contact.email}</p>
                        <p>{contact.phone}</p>
                        <p>{contact.status}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContactItem
// css
import './ContactList.css'

//import components
import Sidebar from '../../Componets/Sidebar/Sidebar'
import ContactItem from '../../Componets/ContactItem/ContactItem'


const ContactList = ({ stor }) => {
    return(
      <main className='container rounded'>
      <div className='row'>
        <div className='p-0 col-3'>
          <Sidebar />
        </div>
        <div className='p-0 col-9'>
          <ContactItem  stor={stor}/>
        </div>
      </div>
    </main>
    )
}

export default ContactList
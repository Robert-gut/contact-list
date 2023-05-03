// css
import './ContactList.css'

//import components
import Sidebar from '../../Componets/Sidebar/Sidebar'
import ContactItem from '../../Componets/ContactItem/ContactItem'


const ContactList = () => {
    return(
      <main className='container rounded'>
      <div className='row'>
        <div className='col-4'>
          <Sidebar/>
        </div>
        <div className='col-8'>
          <ContactItem/>
        </div>
      </div>
    </main>
    )
}

export default ContactList
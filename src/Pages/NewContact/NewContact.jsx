import './NewContact.css'


const NewContact = () => {
    return(

      <div className='container'>
          <div className="modal-content rounded addPage shadow-sm">
            <div className="modal-header">
              <h1 className="text-center">Add new contact</h1>
            </div>
            <div className="modal-body">
              
              <button className="btn btn-primary btn-lg">
                Add
              </button>
            </div>
          </div>
      </div>


    )
}

export default NewContact
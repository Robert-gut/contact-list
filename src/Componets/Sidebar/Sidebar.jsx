import './Sidebar.css'


const Sidebar = ({ stor }) => {
  const statusCounts = {
    Work: 0,
    Family: 0,
    Private: 0,
    Friends: 0,
  };

  stor.forEach((contact) => {
    statusCounts[contact.status] += 1;
  });
  const totalContacts = stor.length;

    return(
      <aside className='container border-end'>
        <div className='row'>
          <div className='col-12'>
          
            <div className="contacts-labels">
              <div className="title">
                All contacts<span>{totalContacts}</span>
              </div>
              <div className="list">
                <div className="unit">
                  <div className="lab lab-success">Work</div>
                  <span>{statusCounts.Work}</span>
                </div>
                <div className="unit">
                  <div className="lab lab-primary">Family</div>
                  <span>{statusCounts.Family}</span>
                </div>
                <div className="unit">
                  <div className="lab lab-danger">Private</div>
                  <span>{statusCounts.Private}</span>
                </div>
                <div className="unit">
                  <div className="lab lab-warning">Friends</div>
                  <span>{statusCounts.Friends}</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </aside>
    )
}

export default Sidebar
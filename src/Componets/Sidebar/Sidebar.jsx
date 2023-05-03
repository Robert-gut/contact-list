import './Sidebar.css'


const Sidebar = () => {
    return(
      <aside className='container border-end'>
        <div className='row'>
          <div className='col-12'>
          
            <div className="contacts-labels">
              <div className="title">
                All contacts<span>10</span>
              </div>
              <div className="list">
                <div className="unit">
                  <div className="lab lab-success">Work</div>
                  <span>2</span>
                </div>
                <div className="unit">
                  <div className="lab lab-primary">Family</div>
                  <span>3</span>
                </div>
                <div className="unit">
                  <div className="lab lab-danger">Private</div>
                  <span>4</span>
                </div>
                <div className="unit">
                  <div className="lab lab-warning">Friends</div>
                  <span>6</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </aside>
    )
}

export default Sidebar
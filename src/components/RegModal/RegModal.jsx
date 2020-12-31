import React from 'react';
import './_RegModal.scss';

export default class RagModal extends React.Component {
  state = {
    isOpen: false
  }

  render() {
    return(
      <React.Fragment>
        <button className="reg-btn" onClick={() => this.state.isOpen = !this.state.isOpen}/>

        {
          this.state.isOpen && <div className="reg-modal">
            
          </div>
        }
      </React.Fragment>
    );
  }
}
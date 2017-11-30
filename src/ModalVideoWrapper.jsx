import React from 'react'
import ModalVideo from 'react-modal-video'
 
class ModalVideoWrapper extends React.Component {
 
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this);
  }
 
  openModal (e) {
    e.preventDefault();
    this.setState({isOpen: true})
  }
 
  render () {
    return (
      <div className="youtube-link">
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.videoId} onClose={() => this.setState({isOpen: false})} />
        <a href="#" onClick={this.openModal}><i className="fa fa-youtube-play fa-2" aria-hidden={true}></i>Watch a demo</a>
      </div>
    )
  }
}
 
module.exports = ModalVideoWrapper;
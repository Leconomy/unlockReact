import ReactDom, {createPortal} from 'react-dom'
import React from 'react';
const modalRoot = document.createElement('div');
modalRoot.id = 'modal';
document.body.appendChild(modalRoot);

class Modal extends React.Component {
  constructor(props) {
    super(props);
    // this.el = document.createElement('div');
  }

  componentDidMount() {
    // modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    // modalRoot.removeChild(this.el);
  }
  
  render() {
    return createPortal(
      this.props.children,
      modalRoot,
    );
  }
}

export default Modal;

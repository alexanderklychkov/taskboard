import React from 'react';

const Modal = ({
  title, isOpen, onCancel, onSubmit, children
}) => {
  return (
    <>
      { isOpen &&
        <div className="modalOverlay">
            <div className="modalWindow">
                <div className="modalHeader">
                    <div className="modalTitle">{title}</div>
                    <i onClick={onCancel} className="fa fa-times" aria-hidden="true"></i>
                </div>
                <div className="modalBody">
                    {children}
                </div>
            </div>
        </div>
      }
    </>
  );
};

Modal.defaultProps = {
  title: 'Modal title',
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null
}

export default Modal;
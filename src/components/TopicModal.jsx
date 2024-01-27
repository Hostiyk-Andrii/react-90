import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export const TopicModal = ({ isOpen, topic, toggleModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <p>
        <b>{topic}</b>
      </p>
      <button onClick={toggleModal}>Close</button>
    </Modal>
  );
};

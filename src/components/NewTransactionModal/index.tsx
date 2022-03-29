import Modal from "react-modal";

interface NewTransitionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewTransitionModal({
  isOpen,
  onRequestClose,
}: NewTransitionModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Cadastrar transação</h2>
    </Modal>
  );
}

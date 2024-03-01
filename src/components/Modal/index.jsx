import PropTypes from "prop-types";

import styles from "./Modal.module.scss";

/**
 * Modal component that displays a message and provides a close button.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.message - The message to be displayed in the modal.
 * @param {boolean} props.isOpen - Whether the modal is open or not.
 * @param {Function} props.onClose - The function to be called when the modal is closed.
 * @returns {JSX.Element} The rendered Modal component.
 */
const Modal = ({ message, isOpen, onClose }) => (
	<div className={styles.modal} style={{ display: isOpen ? "block" : "none" }}>
		<div className={styles.content}>
			<button className={styles.close} onClick={onClose}>
				X
			</button>
			<p className={styles.message}>{message}</p>
		</div>
	</div>
);

export default Modal;

Modal.propTypes = {
	message: PropTypes.node.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
	message: "",
	isOpen: false,
	onClose: () => {},
};

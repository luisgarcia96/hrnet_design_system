import PropTypes from "prop-types";

import styles from "./Modal.module.scss";

/**
 * Modal component that displays a message and provides a close button.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.message - The message to be displayed in the modal.
 * @param {Function} props.onClose - The function to be called when the modal is closed.
 * @returns {JSX.Element} The rendered Modal component.
 */
export const Modal = ({ message, onClose }) => (
	<div className={styles.modal}>
		<div className={styles.content}>
			<button className={styles.close} onClick={onClose}>
				X
			</button>
			<p className={styles.message}>{message}</p>
		</div>
	</div>
);

Modal.propTypes = {
	message: PropTypes.node.isRequired,
	onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
	message: "",
	onClose: () => {},
};

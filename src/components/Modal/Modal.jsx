import React from "react";
import PropTypes from "prop-types";

import styles from "./Modal.module.scss";

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

export default Modal;

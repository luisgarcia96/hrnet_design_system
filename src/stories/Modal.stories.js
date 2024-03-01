import Modal from "../components/Modal";

export default {
	title: "Example/Modal",
	component: Modal,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
};

export const ModalExample = {
	args: {
		message: "Example of the modal content",
		onClose: () => {
			console.log("Modal closed");
		},
	},
};

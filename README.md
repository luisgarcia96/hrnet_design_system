# HRnet Design System

This package was created as part of the last project of the OpenClassrooms's React Developer path. It contains the Modal UI component of the project.

## Table of contents

- [Description](#description)
  - [Scenario](#scenario)
- [How to use](#how-to-use)
  - [Use the plugin in your project](#use-the-plugin-in-your-project)
- [Available properties](#available-properties)

## Description

### Scenario

**@luisgarcia96/hrnet_design_system** is a custom Modal component made for my [HRnet OpenClassrooms project](https://github.com/luisgarcia96/hrnet). For this project I had to convert an old JQuery app into a React app.

The old app was relying on several JQuery plugins and I had to convert one into a React component library and host It as an npm package. Iselected the Modal component.

## How to use

### Use the plugin in your project

If you want to use this library in your React project, you can run the following command from the command line :

```
npm install @luisgarcia96/hrnet_design_system
```

Then, import the Modal from the library and start using it :

```jsx
import React, { useState } from "react";
import { Modal } from "@luisgarcia96/hrnet_design_system";

function CustomComponent() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => {
		setIsOpen(false);
		console.log("ModalClosed");
	};

	return (
		<div className="customComponent">
			<button></button>
			<button onClick={() => setIsOpen(true)}>Open Modal</button>
			<Modal message={"Hello World!"} onClose={handleClose} isOpen={isOpen} />
		</div>
	);
}

export default CustomComponent;
```

## Available properties for Modal component

| Name    | Type     | Default | Description                                                  |
| ------- | -------- | ------- | ------------------------------------------------------------ |
| message | string   | ""      | The message to be displayed inside the modal.                |
| isOpen  | boolean  | false   | Determines whether the modal is open or not.                 |
| onClose | function | null    | The function to be called when the modal needs to be closed. |

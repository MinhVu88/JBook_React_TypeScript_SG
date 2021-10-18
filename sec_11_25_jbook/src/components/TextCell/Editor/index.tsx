import React, { useState, useEffect, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";
import "./editor.css";

export const Editor: React.FC = () => {
	const [editMode, setEditMode] = useState(false);
	const [text, setText] = useState("# Header");

	const editModeRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const callback = (event: MouseEvent) => {
			if (
				editModeRef.current &&
				event.target &&
				editModeRef.current.contains(event.target as Node)
			) {
				console.log("TextCell | Editor | The clicked element is inside the editor");

				return;
			}

			console.log("TextCell | Editor | The clicked element is outside the editor");

			setEditMode(false);
		};

		window.addEventListener("click", callback, { capture: true });

		return () => {
			window.removeEventListener("click", callback, { capture: true });
		};
	}, []);

	// TextCell's editor mode
	if (editMode) {
		return (
			<div className="text-editor" ref={editModeRef}>
				<MDEditor value={text} onChange={t => setText(t || "")} />
			</div>
		);
	}

	// TextCell's preview mode
	return (
		<div className="text-editor card" onClick={() => setEditMode(true)}>
			<div className="card-content">
				<MDEditor.Markdown source={text} />
			</div>
		</div>
	);
};

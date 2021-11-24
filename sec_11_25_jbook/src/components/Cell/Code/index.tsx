import { useState, useEffect } from "react";
import { Editor } from "./Editor";
import { Preview } from "./Preview";
import { startService } from "../../../bundler/esbuild/index";
import { Resizable } from "../../Resizable";
import { Cell } from "../../../redux";
import { useActions } from "../../../hooks/useActions";

interface CodeCellProps {
	cell: Cell;
}

export const Code: React.FC<CodeCellProps> = ({ cell }): JSX.Element => {
	const { updateCell } = useActions();

	const [output, setOutput] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		const timer = setTimeout(async () => {
			const transpiredBundledOutput = await startService(cell.content);

			setOutput(transpiredBundledOutput.code);

			setError(transpiredBundledOutput.error);
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	}, [cell.content]);

	return (
		<Resizable direction="vertical">
			<div 
				style={{ 
					display: "flex", 
					flexDirection: "row", 
					height: "calc(100% - 10px)" 
				}}
			>
				<Resizable direction="horizontal">
					<Editor 
						initialValue={cell.content} 
						onChange={value => updateCell(cell.id, value)} 
					/>
				</Resizable>
				<Preview bundledCode={output} status={error} />
			</div>
		</Resizable>
	);
};

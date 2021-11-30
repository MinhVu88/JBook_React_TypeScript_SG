import { useEffect } from "react";
import { Editor } from "./Editor";
import { Preview } from "./Preview";
import { Resizable } from "../../Resizable";
import { Cell } from "../../../redux";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import './codeCell.css';

interface CodeCellProps {
	cell: Cell;
}

export const Code: React.FC<CodeCellProps> = ({ cell }): JSX.Element => {
	const { updateCell, bundle } = useActions();

	const bundledOutput = useTypedSelector(state => state.bundledOutput[cell.id]);

	useEffect(() => {
		// vids 232 & 233
		if(!bundledOutput) {
			bundle(cell.id, cell.content);

			return;
		}

		const timer = setTimeout(async () => {
			bundle(cell.id, cell.content);
		}, 750);

		return () => {
			clearTimeout(timer);
		};

		 // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [bundle, cell.id, cell.content]);

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
				<div className="progress-wrapper-1">
					{
						!bundledOutput || bundledOutput.isBundling ? 
						(
							<div className='progress-wrapper-0'>
								<progress 
									max='100' 
									className='progress is-primary is-small'
								>
									Loading
								</progress>
							</div>
						) : 
						<Preview 
							bundledCode={bundledOutput.code} 
							status={bundledOutput.error} 
						/>
					}
				</div>
			</div>
		</Resizable>
	);
};

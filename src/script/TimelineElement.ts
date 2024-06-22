import { MarkdownRenderer } from "obsidian";

export default class TimelineElement {
	private root: HTMLElement;
	private sourcePath: string;

	constructor(root: HTMLElement, sourcePath: string) {
		this.root = root.createDiv({ cls: "timeline" });
		this.sourcePath = sourcePath;
	}

	public addEvent = (info: TimelineEventInfo) => {
		Object.entries(info).map(([key, val]) => {
			const element = this.root.createDiv({ cls: key });
			const text = val;
			MarkdownRenderer.renderMarkdown(
				text,
				element,
				this.sourcePath,
				null
			);

			return [key, element];
		});
	};

	public getElement = () => this.root;
}

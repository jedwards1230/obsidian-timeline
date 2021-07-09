/*
THIS IS A GENERATED/BUNDLED FILE BY ROLLUP
if you want to view the source visit the plugins github repository
*/

'use strict';

var obsidian = require('obsidian');

//string to array of classes
const arrayToClasses = (input) => {
    input = input.trim();
    if (input[0] != "[" || input[input.length - 1] != "]")
        return [];
    return input
        .substring(1, input.length - 1)
        .trim()
        .split(/\s*,\s*/);
};
class EventFactory {
    constructor(root, sourcePath) {
        this.root = root;
        this.sourcePath = sourcePath;
    }
    create(time, title, description) {
        this.root.createDiv({ cls: "time", text: time });
        let infoEl = this.root.createDiv({ cls: "info" });
        infoEl.createDiv({ cls: "title", text: title });
        let descriptionEl = infoEl.createDiv({ cls: "description" });
        obsidian.MarkdownRenderer.renderMarkdown(description, descriptionEl, this.sourcePath, null);
        let lastChildOfDescription = descriptionEl.lastChild;
        lastChildOfDescription.style.marginBottom = "0";
    }
}
const codeBlockHandler = (source, el, ctx) => {
    //Initial State
    el.addClass("timeline");
    let ef = new EventFactory(el, ctx.sourcePath);
    //source to events
    const events = source
        .split(/^\s*\+ ?/gm)
        .map((event) => (event.trim().length != 0 ? event : "\u200B"));
    for (let elClass of arrayToClasses(events[0]))
        el.addClass(elClass);
    const incompleteCounter = (events.length - 1) % 3;
    const completeCounter = events.length - 1 - incompleteCounter;
    //build it
    el.createDiv({
        cls: "main-line",
        attr: {
            style: `grid-row-end: ${completeCounter / 3 + 1 + (incompleteCounter != 0 ? 1 : 0)}`,
        },
    });
    for (let i = 1; i < completeCounter; i += 3) {
        ef.create(events[i], events[i + 1], events[i + 2]);
    }
    switch (incompleteCounter) {
        case 1:
            ef.create(events[completeCounter + 1], "", "");
            return;
        case 2:
            ef.create(events[completeCounter + 1], events[completeCounter + 2], "");
            return;
        default:
            return;
    }
};
class MyPlugin extends obsidian.Plugin {
    onload() {
        this.registerMarkdownCodeBlockProcessor("timeline", codeBlockHandler);
    }
}

module.exports = MyPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdFBsdWdpbixcclxuXHRNYXJrZG93blBvc3RQcm9jZXNzb3JDb250ZXh0LFxyXG5cdE1hcmtkb3duUmVuZGVyZXIsXHJcbn0gZnJvbSBcIm9ic2lkaWFuXCI7XHJcblxyXG4vL3N0cmluZyB0byBhcnJheSBvZiBjbGFzc2VzXHJcbmNvbnN0IGFycmF5VG9DbGFzc2VzID0gKGlucHV0OiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XHJcblx0aW5wdXQgPSBpbnB1dC50cmltKCk7XHJcblx0aWYgKGlucHV0WzBdICE9IFwiW1wiIHx8IGlucHV0W2lucHV0Lmxlbmd0aCAtIDFdICE9IFwiXVwiKSByZXR1cm4gW107XHJcblxyXG5cdHJldHVybiBpbnB1dFxyXG5cdFx0LnN1YnN0cmluZygxLCBpbnB1dC5sZW5ndGggLSAxKVxyXG5cdFx0LnRyaW0oKVxyXG5cdFx0LnNwbGl0KC9cXHMqLFxccyovKTtcclxufTtcclxuXHJcbmNsYXNzIEV2ZW50RmFjdG9yeSB7XHJcblx0cm9vdDogSFRNTEVsZW1lbnQ7XHJcblx0c291cmNlUGF0aDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihyb290OiBIVE1MRWxlbWVudCwgc291cmNlUGF0aDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnJvb3QgPSByb290O1xyXG5cdFx0dGhpcy5zb3VyY2VQYXRoID0gc291cmNlUGF0aDtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZSh0aW1lOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMucm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwidGltZVwiLCB0ZXh0OiB0aW1lIH0pO1xyXG5cdFx0bGV0IGluZm9FbCA9IHRoaXMucm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwiaW5mb1wiIH0pO1xyXG5cdFx0aW5mb0VsLmNyZWF0ZURpdih7IGNsczogXCJ0aXRsZVwiLCB0ZXh0OiB0aXRsZSB9KTtcclxuXHRcdGxldCBkZXNjcmlwdGlvbkVsID0gaW5mb0VsLmNyZWF0ZURpdih7IGNsczogXCJkZXNjcmlwdGlvblwiIH0pO1xyXG5cclxuXHRcdE1hcmtkb3duUmVuZGVyZXIucmVuZGVyTWFya2Rvd24oXHJcblx0XHRcdGRlc2NyaXB0aW9uLFxyXG5cdFx0XHRkZXNjcmlwdGlvbkVsLFxyXG5cdFx0XHR0aGlzLnNvdXJjZVBhdGgsXHJcblx0XHRcdG51bGxcclxuXHRcdCk7XHJcblx0XHRsZXQgbGFzdENoaWxkT2ZEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uRWwubGFzdENoaWxkIGFzIEhUTUxFbGVtZW50O1xyXG5cdFx0bGFzdENoaWxkT2ZEZXNjcmlwdGlvbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjBcIjtcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGNvZGVCbG9ja0hhbmRsZXIgPSAoXHJcblx0c291cmNlOiBzdHJpbmcsXHJcblx0ZWw6IEhUTUxFbGVtZW50LFxyXG5cdGN0eDogTWFya2Rvd25Qb3N0UHJvY2Vzc29yQ29udGV4dFxyXG4pID0+IHtcclxuXHQvL0luaXRpYWwgU3RhdGVcclxuXHRlbC5hZGRDbGFzcyhcInRpbWVsaW5lXCIpO1xyXG5cdGxldCBlZiA9IG5ldyBFdmVudEZhY3RvcnkoZWwsIGN0eC5zb3VyY2VQYXRoKTtcclxuXHJcblx0Ly9zb3VyY2UgdG8gZXZlbnRzXHJcblx0Y29uc3QgZXZlbnRzOiBzdHJpbmdbXSA9IHNvdXJjZVxyXG5cdFx0LnNwbGl0KC9eXFxzKlxcKyA/L2dtKVxyXG5cdFx0Lm1hcCgoZXZlbnQpID0+IChldmVudC50cmltKCkubGVuZ3RoICE9IDAgPyBldmVudCA6IFwiXFx1MjAwQlwiKSk7XHJcblx0Zm9yIChsZXQgZWxDbGFzcyBvZiBhcnJheVRvQ2xhc3NlcyhldmVudHNbMF0pKSBlbC5hZGRDbGFzcyhlbENsYXNzKTtcclxuXHJcblx0Y29uc3QgaW5jb21wbGV0ZUNvdW50ZXIgPSAoZXZlbnRzLmxlbmd0aCAtIDEpICUgMztcclxuXHRjb25zdCBjb21wbGV0ZUNvdW50ZXIgPSBldmVudHMubGVuZ3RoIC0gMSAtIGluY29tcGxldGVDb3VudGVyO1xyXG5cclxuXHQvL2J1aWxkIGl0XHJcblx0ZWwuY3JlYXRlRGl2KHtcclxuXHRcdGNsczogXCJtYWluLWxpbmVcIixcclxuXHRcdGF0dHI6IHtcclxuXHRcdFx0c3R5bGU6IGBncmlkLXJvdy1lbmQ6ICR7XHJcblx0XHRcdFx0Y29tcGxldGVDb3VudGVyIC8gMyArIDEgKyAoaW5jb21wbGV0ZUNvdW50ZXIgIT0gMCA/IDEgOiAwKVxyXG5cdFx0XHR9YCxcclxuXHRcdH0sXHJcblx0fSk7XHJcblx0Zm9yIChsZXQgaSA9IDE7IGkgPCBjb21wbGV0ZUNvdW50ZXI7IGkgKz0gMykge1xyXG5cdFx0ZWYuY3JlYXRlKGV2ZW50c1tpXSwgZXZlbnRzW2kgKyAxXSwgZXZlbnRzW2kgKyAyXSk7XHJcblx0fVxyXG5cclxuXHRzd2l0Y2ggKGluY29tcGxldGVDb3VudGVyKSB7XHJcblx0XHRjYXNlIDE6XHJcblx0XHRcdGVmLmNyZWF0ZShldmVudHNbY29tcGxldGVDb3VudGVyICsgMV0sIFwiXCIsIFwiXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHRjYXNlIDI6XHJcblx0XHRcdGVmLmNyZWF0ZShldmVudHNbY29tcGxldGVDb3VudGVyICsgMV0sIGV2ZW50c1tjb21wbGV0ZUNvdW50ZXIgKyAyXSwgXCJcIik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybjtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XHJcblx0b25sb2FkKCkge1xyXG5cdFx0dGhpcy5yZWdpc3Rlck1hcmtkb3duQ29kZUJsb2NrUHJvY2Vzc29yKFwidGltZWxpbmVcIiwgY29kZUJsb2NrSGFuZGxlcik7XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJN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

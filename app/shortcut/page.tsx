import { ExternalLink } from "lucide-react";

export default function ShortcutPage() {
    return (
        <main className="flex flex-1 flex-col items-center gap-14 overflow-y-auto p-6">
            <div className="flex w-[800px] flex-col gap-4">
                <h2 className="text-xl font-bold">
                    <a
                        className="flex flex-row gap-2"
                        target="_blank"
                        href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf"
                    >
                        Default VS Code Shortcuts
                        <ExternalLink className="inline" />
                    </a>
                </h2>
                <hr />
                <Shortcut shortcut={["Ctrl", "P"]} action="Search a file" />
                <Shortcut shortcut={["Ctrl", "Shift", "P"]} action="Open command palette" />
                <hr />
                <Shortcut shortcut={["Ctrl", "X"]} action="Cut a line" />
                <Shortcut shortcut={["Ctrl", "C"]} action="Copy a line" />
                <Shortcut shortcut={["Ctrl", "X"]} action="Paste a line" />
                <hr />
                <Shortcut shortcut={["← or →"]} action="Move cursor left or right" />
                <Shortcut shortcut={["Ctrl", "← or →"]} action="Jump a word left or right" />
                <Shortcut shortcut={["PageUp or PageDown"]} action="Move start or end of a line" />
                <hr />
                <Shortcut shortcut={["Alt", "Clic"]} action="Add a multi-cursor with mouse" />
                <Shortcut shortcut={["Shift", "Move cursor"]} action="Create a selection during the cursor movement" />
                <Shortcut shortcut={["Alt", "Z"]} action="Toggle auto-line-returns to adjust window size" />
                <Shortcut shortcut={["Ctrl", "/"]} action="Toggle comment a line or selection" />
                <hr />
                <Shortcut shortcut={["Ctrl", "F"]} action="Find word" />
                <Shortcut shortcut={["Ctrl", "Shift", "F"]} action="Find word into the workspace" />
                <Shortcut shortcut={["Ctrl", "H"]} action="Replace word" />
                <Shortcut shortcut={["Ctrl", "Shift", "H"]} action="Replace word into the workspace" />
                <hr />
                <Shortcut shortcut={["Ctrl", "D"]} action="Select a word, select the next same word" />
                <Shortcut shortcut={["Ctrl", "Shift", "L"]} action="Select all matching selections" />
                <Shortcut shortcut={["Shift", "Alt", "← or →"]} action="Select next or previous word wrapping node" />
                <hr />
                <Shortcut shortcut={["Alt", "↑ or ↓"]} action="Move a line up or down" />
                <Shortcut shortcut={["Shift", "Alt", "↑ or ↓"]} action="Duplicate a line up or down" />
                <Shortcut shortcut={["Ctrl", "Alt", "↑ or ↓"]} action="Add multi-line cursor above or below" />
            </div>
            <div className="flex w-[800px] flex-col gap-4">
                <h2 className="text-xl font-bold">Custom Shortcuts</h2>
                <hr />
                <Shortcut shortcut={["Alt", "F"]} action="Format the document" />
                <Shortcut shortcut={["Ctrl", "Alt", "A"]} action="Add a word to the user dictionary" />
                <Shortcut shortcut={["Ctrl", "Alt", "L"]} action="Lowercase the current string" />
                <Shortcut shortcut={["Ctrl", "Alt", "U"]} action="Uppercase the current string" />
                <Shortcut shortcut={["Alt", "T"]} action="Open the terminal" />
                <Shortcut shortcut={["Alt", "W"]} action="Wrap a tag with another" />
                <Shortcut shortcut={["Ctrl", "N"]} action="Create a new file" />
                <Shortcut shortcut={["Ctrl", "Shift", "N"]} action="Create a new folder" />
            </div>
        </main>
    );
}

const Shortcut = ({ shortcut, action }: { shortcut: string[]; action: string }) => {
    return (
        <div className="flex w-full items-center justify-between gap-20">
            <span className="">{action}</span>
            <div className="flex select-none gap-2">
                {shortcut.map((key, index) => (
                    <div key={index} className="flex gap-2 font-mono">
                        <span
                            className="rounded-md border px-2 py-1 shadow transition-all duration-200 hover:scale-105 hover:shadow-md hover:shadow-gray-300"
                            key={index}
                        >
                            {key}
                        </span>
                        {index !== shortcut.length - 1 && (
                            <span key={index} className="py-1 text-gray-500">
                                +
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

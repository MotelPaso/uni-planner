import { useState } from "react";

function QuickAdd({ onAdd }) {
	const [open, setOpen] = useState(false);
	const [text, setText] = useState("");

	function submit() {
		if (!text.trim()) return;
		onAdd(text.trim());
		setText("");
		setOpen(false);
	}

	if (!open) {
		return (
			<button
				onClick={() => setOpen(true)}
				className="fixed bottom-6 right-6 bg-amber-400 hover:bg-amber-500 text-white rounded-2xl px-5 py-3 font-bold shadow-lg flex items-center gap-2 transition-all active:scale-95"
			>
				<span className="text-lg">+</span> Nueva tarea
			</button>
		);
	}

	return (
		<div className="fixed bottom-6 right-6 left-6 bg-white rounded-2xl shadow-xl border border-amber-100 p-4 flex gap-3">
			<input
				autoFocus
				value={text}
				onChange={(e) => setText(e.target.value)}
				onKeyDown={(e) => e.key === "Enter" && submit()}
				placeholder="Agregar tarea rápida..."
				className="flex-1 text-sm outline-none text-stone-800 placeholder-stone-300"
			/>
			<button
				onClick={submit}
				className="bg-amber-400 text-white px-4 py-2 rounded-xl font-semibold text-sm"
			>
				Agregar
			</button>
			<button
				onClick={() => setOpen(false)}
				className="text-stone-300 hover:text-stone-500 px-2"
			>
				✕
			</button>
		</div>
	);
}
export default QuickAdd;

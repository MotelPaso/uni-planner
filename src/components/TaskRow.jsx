function TaskRow({ task, onToggle }) {
	return (
		<div
			className={`flex items-center gap-3 p-3 rounded-xl transition-all ${task.done ? "opacity-40" : ""}`}
		>
			<button
				onClick={() => onToggle(task.id)}
				className="w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-all"
				style={{
					borderColor: task.done ? "#D1D5DB" : task.color,
					backgroundColor: task.done ? "#D1D5DB" : "transparent",
				}}
			>
				{task.done && <span className="text-white text-xs">✓</span>}
			</button>
			<div className="flex-1 min-w-0">
				<p
					className={`text-sm font-medium text-stone-800 truncate ${task.done ? "line-through" : ""}`}
				>
					{task.title}
				</p>
				<div className="flex items-center gap-2 mt-0.5">
					<span
						className="text-xs font-semibold px-2 py-0.5 rounded-full"
						style={{
							backgroundColor: task.color + "30",
							color: task.color,
						}}
					>
						{task.course}
					</span>
					<span className="text-xs text-stone-400">
						Vence: {task.due}
					</span>
				</div>
			</div>
		</div>
	);
}
export default TaskRow;

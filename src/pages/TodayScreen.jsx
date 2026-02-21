import ClassCard from "../components/ClassCard";
import TaskRow from "../components/TaskRow";
import QuickAdd from "../components/QuickAdd";
import { useState } from "react";

function TodayScreen({ taskList, classList }) {
	const [tasks, setTasks] = useState(taskList);

	function toggleTask(id) {
		setTasks((prev) =>
			prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
		);
	}

	function addTask(title) {
		setTasks((prev) => [
			...prev,
			{
				id: Date.now(),
				title,
				course: "General",
				color: "#F59E0B",
				due: "Sin fecha",
				done: false,
			},
		]);
	}

	const pending = tasks.filter((t) => !t.done);
	const done = tasks.filter((t) => t.done);

	const today = new Date().toLocaleDateString("es-CL", {
		weekday: "long",
		day: "numeric",
		month: "long",
	});

	return (
		<div className="px-4 py-5 pb-24 space-y-6">
			{/* Date heading */}
			<div>
				<p className="text-xs font-semibold text-stone-400 uppercase tracking-widest">
					{today}
				</p>
				<h2
					style={{ fontFamily: "Nunito, sans-serif" }}
					className="text-2xl font-extrabold text-stone-800 mt-0.5"
				>
					Buenos días 👋
				</h2>
			</div>

			{/* Classes */}
			<section>
				<h3 className="text-s font-bold text-stone-400 uppercase tracking-widest mb-3">
					Clases de hoy
				</h3>
				<div className="space-y-3">
					{classList.map((cls) => (
						<ClassCard key={cls.id} cls={cls} />
					))}
				</div>
			</section>

			{/* Tasks */}
			<section>
				<div className="flex items-center justify-between mb-3">
					<h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest">
						Tareas pendientes
					</h3>
					<span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
						{pending.length} pendientes
					</span>
				</div>
				<div className="bg-white rounded-2xl border border-stone-100 shadow-sm divide-y divide-stone-50">
					{pending.map((t) => (
						<TaskRow key={t.id} task={t} onToggle={toggleTask} />
					))}
					{done.map((t) => (
						<TaskRow key={t.id} task={t} onToggle={toggleTask} />
					))}
				</div>
			</section>

			<QuickAdd onAdd={addTask} />
		</div>
	);
}
export default TodayScreen;

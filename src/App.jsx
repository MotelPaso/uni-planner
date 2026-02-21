import { useState } from "react";
import Header from "./components/Header";
import TabBar from "./components/TabBar";
import TodayScreen from "./pages/TodayScreen";
import CourseScreen from "./pages/CourseScreen";
// ── Mock Data ────────────────────────────────────────────────────────────────
const TODAY_CLASSES = [
	{
		id: 1,
		code: "CC3001",
		name: "Estructuras de Datos",
		room: "B-22",
		start: "19:00",
		end: "20:00",
		color: "#F59E0B",
	},
	{
		id: 2,
		code: "MA3402",
		name: "Probabilidades",
		room: "A-11",
		start: "10:15",
		end: "11:45",
		color: "#6EE7B7",
	},
	{
		id: 3,
		code: "CC4301",
		name: "Redes",
		room: "Lab 3",
		start: "14:00",
		end: "15:30",
		color: "#93C5FD",
	},
];

const TASKS = [
	{
		id: 1,
		title: "Tarea 2 - Árboles AVL",
		course: "CC3001",
		color: "#F59E0B",
		due: "20/02",
		done: false,
	},
	{
		id: 2,
		title: "Leer capítulo 4",
		course: "MA3402",
		color: "#6EE7B7",
		due: "22/02",
		done: false,
	},
	{
		id: 3,
		title: "Informe laboratorio",
		course: "CC4301",
		color: "#93C5FD",
		due: "23/02",
		done: true,
	},
];
export default function App() {
	const [tab, setTab] = useState("today");

	const tabs = [
		{ id: "today", label: "Hoy", icon: "☀️" },
		{ id: "tasks", label: "Tareas", icon: "✅" },
		{ id: "notes", label: "Notas", icon: "📝" },
		{ id: "courses", label: "Ramos", icon: "🎓" },
	];

	return (
		<>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=DM+Sans:wght@400;500;600&display=swap');
        body { background-color: #FFFBF5; font-family: 'DM Sans', sans-serif; }
      `}</style>

			<div className="max-w-lg mx-auto min-h-screen">
				<Header />
				<TabBar tabs={tabs} active={tab} onChange={setTab} />
				<main>
					{tab === "today" && (
						<TodayScreen taskList={TASKS} classList={TODAY_CLASSES} />
					)}
					{tab === "courses" && <CourseScreen />}
					{(tab === "tasks" || tab === "notes") && (
						<div className="flex items-center justify-center h-64 text-stone-300 text-sm">
							Próximamente...
						</div>
					)}
				</main>
			</div>
		</>
	);
}

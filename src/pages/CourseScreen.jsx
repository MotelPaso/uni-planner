import CourseCard from "../components/CourseCard";

export default function CourseScreen() {
	const COURSES = [
		{
			id: 1,
			code: "CC3001",
			name: "Estructuras de Datos",
			professor: "Juan Nilo",
			color: "#F59E0B",
		},
		{
			id: 2,
			code: "CC3001",
			name: "Fundamentos de la Computacion",
			professor: "Juan Nilo",
			color: "#FFFFFF",
		},
	];

	const addCourse = () => {
		console.log("ashdka");
	};
	return (
		<div className="px-4 py-5 pb-24 space-y-6">
			<p className="text-2xl font-semibold text-stone-800 ">Ramos</p>
			<section className="space-y-3">
				{COURSES.map((c) => (
					<CourseCard key={c.id} course={c} />
				))}
			</section>
			<button className="p-3 rounded-2xl border" onClick={() => addCourse()}>
				Añadir Ramo
			</button>
		</div>
	);
}

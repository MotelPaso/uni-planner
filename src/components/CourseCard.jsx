export default function CourseCard({ course }) {
	return (
		<div className="relative rounded-2xl p-4 border transition-all bg-white border-amber-200 shadow-md">
			<div className="flex items-align gap-3">
				<div
					className="w-1 rounded-full self-stretch min-h-10"
					style={{ backgroundColor: course.color }}
				/>
				<div>
					<p className="">{course.name}</p>
					<p>{course.professor}</p>
				</div>
			</div>
		</div>
	);
}

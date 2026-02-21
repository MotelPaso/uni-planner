function getNow() {
	const now = new Date();
	return now.getHours() * 60 + now.getMinutes();
}

function timeToMin(t) {
	const [h, m] = t.split(":").map(Number);
	return h * 60 + m;
}

function classStatus(start, end) {
	const now = getNow();
	const s = timeToMin(start);
	const e = timeToMin(end);
	if (now >= s && now <= e) return "ongoing";
	if (now < s) return "upcoming";
	return "done";
}
function ClassCard({ cls }) {
	const status = classStatus(cls.start, cls.end);
	return (
		<div
			className={`relative rounded-2xl p-4 border transition-all ${
				status === "ongoing"
					? "bg-white border-amber-200 shadow-md"
					: status === "done"
						? "bg-stone-50 border-stone-100 opacity-50"
						: "bg-white border-stone-100 shadow-sm"
			}`}
		>
			{status === "ongoing" && (
				<span className="absolute top-3 right-3 flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
					<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse inline-block" />
					En curso
				</span>
			)}
			<div className="flex items-start gap-3">
				<div
					className="w-1 rounded-full self-stretch min-h-10"
					style={{ backgroundColor: cls.color }}
				/>
				<div className="flex-1">
					<p className="text-xs font-semibold text-stone-400 uppercase tracking-wide">
						{cls.code}
					</p>
					<p className="font-bold text-stone-800 leading-tight">
						{cls.name}
					</p>
					<div className="flex items-center gap-3 mt-1.5 text-sm text-stone-500">
						<span>
							🕐 {cls.start} – {cls.end}
						</span>
						<span>📍 {cls.room}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ClassCard;

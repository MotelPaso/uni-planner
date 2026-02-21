function TabBar({ tabs, active, onChange }) {
	return (
		<nav className="sticky top-13.25 z-10 bg-[#FFFBF5] border-b border-amber-100 px-4 flex gap-1">
			{tabs.map((t) => (
				<button
					key={t.id}
					onClick={() => onChange(t.id)}
					className={`flex items-center gap-1.5 px-4 py-3 text-sm font-semibold border-b-2 transition-all ${
						active === t.id
							? "border-amber-400 text-amber-700"
							: "border-transparent text-stone-400 hover:text-stone-600"
					}`}
				>
					<span>{t.icon}</span>
					<span>{t.label}</span>
				</button>
			))}
		</nav>
	);
}

export default TabBar;

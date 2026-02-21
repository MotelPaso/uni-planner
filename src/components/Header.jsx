function Header() {
	return (
		<header className="sticky top-0 z-10 bg-[#FFFBF5] border-b border-amber-100 px-5 py-3 flex items-center justify-between">
			<div className="flex items-center gap-2">
				<span className="text-2xl">📚</span>
				<span
					style={{ fontFamily: "Nunito, sans-serif" }}
					className="text-lg font-800 text-stone-800 font-bold"
				>
					UniPlanner
				</span>
			</div>
			<span className="text-xs font-medium bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
				1er Sem 2025
			</span>
		</header>
	);
}

export default Header;

import { useEffect, useState } from "react";
import { db } from "./database/db";

function App() {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		db.open().then(() => setReady(true));
	}, []);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="text-center">
				<h1 className="text-3xl font-bold text-gray-800">
					Uni Planner
				</h1>
				<p className="mt-2 text-gray-500">
					{ready ? "✅ Database ready" : "⏳ Loading..."}
				</p>
			</div>
		</div>
	);
}

export default App;

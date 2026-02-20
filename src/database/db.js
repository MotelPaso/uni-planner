import Dexie from "dexie";

export const db = new Dexie("UniPlanner");

db.version(1).stores({
	semesters: "++id, name, start_date, end_date, is_active",
	courses: "++id, semester_id, name, color",
	schedules: "++id, course_id, day_of_week, start_time, end_time, room",
	tasks: "++id, course_id, title, due_date, is_done, created_at",
	notes: "++id, course_id, content, created_at",
});

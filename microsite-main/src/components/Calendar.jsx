import {
  Gantt,
  Task,
  EventOption,
  StylingOption,
  ViewMode,
  DisplayOption,
} from "gantt-task-react";
import "gantt-task-react/dist/index.css";

let tasks = [
  {
    start: new Date(2025, 3, 12),
    end: new Date(2025, 5, 26),
    name: "WebUI",
    id: "Task 0",
    type: "task",
    progress: 100,
    isDisabled: true,
    styles: { progressColor: "#28A745", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2025, 3, 12),
    end: new Date(2025, 4, 16),
    name: "Admin Interface",
    id: "Task 1",
    type: "task",
    progress: 100,
    isDisabled: true,
    styles: { progressColor: "#28A745", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2025, 4, 16),
    end: new Date(2025, 4, 23),
    name: "Project Owner",
    id: "Task 2",
    type: "task",
    progress: 100,
    isDisabled: true,
    styles: { progressColor: "#28A745", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2025, 4, 23),
    end: new Date(2025, 5, 1),
    name: "Implementers",
    id: "Task 3",
    type: "task",
    progress: 100,
    isDisabled: true,
    styles: { progressColor: "#28A745", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2025, 5, 1),
    end: new Date(2025, 5, 15),
    name: "Intern Auditor",
    id: "Task 4",
    type: "task",
    progress: 100,
    isDisabled: true,
    styles: { progressColor: "#28A745", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2025, 5, 15),
    end: new Date(2025, 5, 22),
    name: "Extern Auditor",
    id: "Task 5",
    type: "task",
    progress: 100,
    isDisabled: true,
    styles: { progressColor: "#28A745", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2025, 5, 22),
    end: new Date(2025, 5, 26),
    name: "Final Improvements",
    id: "Task 6",
    type: "task",
    progress: 100,
    isDisabled: true,
    styles: { progressColor: "#28A745", progressSelectedColor: "#ff9e0d" },
  },
];

const Calendar = () => {
  return <Gantt tasks={tasks} viewMode={ViewMode.Day} />;
};

export default Calendar;

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
    start: new Date(2024, 2, 12),
    end: new Date(2024, 4, 28),
    name: "WebUI",
    id: "Task 0",
    type: "task",
    progress: 100,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2024, 2, 12),
    end: new Date(2024, 3, 16),
    name: "User Microservice",
    id: "Task 1",
    type: "task",
    progress: 100,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2024, 2, 20),
    end: new Date(2024, 3, 16),
    name: "Offer Microservice",
    id: "Task 2",
    type: "task",
    progress: 100,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2024, 2, 20),
    end: new Date(2024, 3, 16),
    name: "Recommender Microservice",
    id: "Task 3",
    type: "task",
    progress: 100,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2024, 3, 16),
    end: new Date(2024, 4, 28),
    name: "Payment Microservice",
    id: "Task 4",
    type: "task",
    progress: 100,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2024, 3, 16),
    end: new Date(2024, 4, 28),
    name: "Monitoring Microservice",
    id: "Task 5",
    type: "task",
    progress: 100,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
];

const Calendar = () => {
  return <Gantt tasks={tasks} viewMode={ViewMode.Day} />;
};

export default Calendar;

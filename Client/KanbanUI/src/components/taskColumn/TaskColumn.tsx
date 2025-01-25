import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { DataCardModel } from "../../interfaces/DataCardModel";
import TaskCard from "../taskCard/TaskCard";

interface TaskColumnProps {
  toDoData: DataCardModel[];
  title: string;
}
export const TaskColumn: React.FC<TaskColumnProps> = ({ toDoData, title }) => {
  return (
    <section className="">
      <p className="text-lg pl-2">{title}</p>
      <SortableContext items={toDoData} strategy={verticalListSortingStrategy}>
        {toDoData.map((card) => (
          <div key={card.id}>
            <TaskCard card={card} key={card.id} />
          </div>
        ))}
      </SortableContext>
    </section>
  );
};

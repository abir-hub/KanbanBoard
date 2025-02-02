import { DataCardModel } from "../../interfaces/DataCardModel";
import TaskCard from "../taskCard/TaskCard";

interface TaskColumnProps {
  key: string;
  data: DataCardModel[];
  title: string;
  column: {
    id: string;
    title: string;
    taskIds: string[];
  };
}
export const TaskColumn: React.FC<TaskColumnProps> = ({ data, title }) => {
  return (
    <section className="">
      <p className="text-lg pl-2">{title}</p>
      {data.map((card) => (
        <div key={card.id}>
          <TaskCard card={card} key={card.id} />
        </div>
      ))}
    </section>
  );
};

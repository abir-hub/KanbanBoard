import { Droppable } from "@hello-pangea/dnd";
import { DataCardModel } from "../../interfaces/DataCardModel";
import TaskCard from "../taskCard/TaskCard";
import "./TaskColumn.scss";

interface TaskColumnProps {
  key: string;
  tasks: DataCardModel[];
  title: string;
  column: {
    id: string;
    title: string;
    taskIds: string[];
  };
}
export const TaskColumn: React.FC<TaskColumnProps> = ({
  key,
  tasks,
  title,
  column,
}) => {
  return (
    <section className="w-80 p-2 column">
      <p className="text-lg pl-2">{title}</p>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => {
          return (
            <div
              className="task-list"
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                backgroundColor: snapshot.isDraggingOver
                  ? "lightblue"
                  : "white",
              }}
            >
              {tasks.map((task, index) => {
                return <TaskCard key={task.id} card={task} index={index} />;
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
      {/* {data.map((card) => (
        <div key={card.id}>
          <TaskCard card={card} key={card.id} />
        </div>
      ))} */}
    </section>
  );
};

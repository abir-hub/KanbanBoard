import { MdAssignment } from "react-icons/md";
import { DataCardModel } from "../../interfaces/DataCardModel";
import "./TaskCard.scss";
import { Draggable } from "@hello-pangea/dnd";

interface TaskCardProps {
  key: number;
  card: DataCardModel;
  index: number;
}

const TaskCard: React.FC<TaskCardProps> = ({ key, card, index }) => {
  return (
    <Draggable draggableId={card.id.toString()} index={index}>
      {(provided, snapshot) => {
        //snapshot is used to style the task when it is being dragged
        return (
          <div
            className="task"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            style={{
              backgroundColor: snapshot.isDragging ? "lightgreen" : "white",
              ...provided.draggableProps.style,
            }}
          >
            <div className="mb-1 task-card">
              <div className="max-w-xs rounded overflow-hidden shadow-lg to-do-card border-2">
                <div className="px-6 py-2">
                  <p className="text-gray-700 text-base text-wrap">
                    {card.text}
                  </p>
                </div>
                <div className="assigned-to flex flex-row justify-end gap-2">
                  <MdAssignment className="text-lg" />
                  <p className="text-sm mr-12">{card.assigned}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {card.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default TaskCard;

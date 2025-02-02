import { MdAssignment } from "react-icons/md";
import { DataCardModel } from "../../interfaces/DataCardModel";
import "./TaskCard.scss";

interface TaskCardProps {
  card: DataCardModel;
}

const TaskCard: React.FC<TaskCardProps> = ({ card }) => {
  return (
    <div key={card.id} className="mb-1 task-card">
      <div className="max-w-xs rounded overflow-hidden shadow-lg to-do-card border-2">
        <div className="px-6 py-2">
          <p className="text-gray-700 text-base text-wrap">{card.text}</p>
        </div>
        <div className="assigned-to flex flex-row justify-end gap-2">
          <MdAssignment className="text-lg" />
          <p className="text-sm mr-12">{card.assigned}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {card.tags?.map((tag: any, index: any) => (
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
  );
};

export default TaskCard;

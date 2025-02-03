import { useState } from "react";

import "./Content.scss";

import { LuPlusCircle } from "react-icons/lu";
import { AddEditCardModal } from "../../scenes/addEditCard/AddEditCardModal";
import { TaskColumn } from "../taskColumn/TaskColumn";
import initialData from "../../data/initial-data";
import { DragDropContext } from "@hello-pangea/dnd";

export const Content = () => {
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [state, handleState] = useState<any>(initialData);
  const handleDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    //If there is no destination
    if (!destination) {
      return;
    }

    //If the destination and source are the same
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    //Find the column
    const startColumn: any = state.columns[source.droppableId];
    const finishColumn: any = state.columns[destination.droppableId];

    if (startColumn === finishColumn) {
      const newTaskIds: any = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      //Set the state
      handleState(newState);
      //After the handleState, I will call the server to inform the server that the column has been reordered
      return;
    }

    //Moving from one list to another
    const startTaskIds: any = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);

    const newStartColumn = {
      ...startColumn,
      taskIds: startTaskIds,
    };

    const finishTaskIds: any = Array.from(finishColumn.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinishColumn = {
      ...finishColumn,
      taskIds: finishTaskIds,
    };

    //Set the state
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      },
    };

    handleState(newState);
  };
  // const [toDoTasks, setToDoTasks] = useState<DataCardModel[]>(toDoData);
  // const [onProgressTasks, setOnProgressTasks] =
  //   useState<DataCardModel[]>(OnProgressData);
  // const [testingTasks, setTestingTasks] =
  //   useState<DataCardModel[]>(TestingData);
  // const [doneTasks, setDoneTasks] = useState<DataCardModel[]>(DoneData);

  const handleModalOpen = () => {
    setIsAddEditModalOpen(true);
  };
  const handleModalClose = () => {
    setIsAddEditModalOpen(false);
  };
  return (
    <>
      {isAddEditModalOpen && (
        <AddEditCardModal handleModalClose={handleModalClose} />
      )}
      <p className="text-3xl mx-6 mt-4 mb-1">Tasks</p>
      <section className="flex justify-end mr-12 mb-12">
        <button
          onClick={handleModalOpen}
          className="flex flex-row gap-1 create-button p-1 rounded-md border-2"
        >
          <LuPlusCircle className="text-lg font-bold" />
          <p className="text-lg">Create</p>
        </button>
      </section>
      <DragDropContext onDragEnd={handleDragEnd}>
        {/* //onDragEnd is required props for DragDropContext */}
        <div className="flex flex-row justify-center gap-2.5 mx-2">
          {state.columnOrder.map((columnId: string) => {
            const column: any = state.columns[columnId];
            const tasks: any = column.taskIds.map(
              (taskId: string) => state.tasks[taskId]
            );
            // console.log(tasks);
            return (
              <TaskColumn
                key={column.id}
                column={column}
                tasks={tasks}
                title={column.title}
              />
            );
          })}
        </div>
      </DragDropContext>
      {/* <div className="flex flex-row justify-center gap-2.5 mx-2">
        {/* To-do  */}

      {/* <TaskColumn toDoData={toDoTasks} title={TaskTitle.TO_DO} /> */}

      {/* On Progress  */}

      {/* <TaskColumn toDoData={onProgressTasks} title={TaskTitle.ON_PROGRESS} /> */}

      {/* Testing  */}

      {/* <TaskColumn toDoData={testingTasks} title={TaskTitle.TESTING} /> */}

      {/* Finished  */}

      {/* <TaskColumn toDoData={doneTasks} title={TaskTitle.DONE} /> */}
      {/* </div> */}
    </>
  );
};

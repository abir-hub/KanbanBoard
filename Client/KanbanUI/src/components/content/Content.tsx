import { useState } from "react";

import "./Content.scss";

import { LuPlusCircle } from "react-icons/lu";
import { AddEditCardModal } from "../../scenes/addEditCard/AddEditCardModal";
import { TaskColumn } from "../taskColumn/TaskColumn";
import {
  DoneData,
  OnProgressData,
  TaskTitle,
  TestingData,
  toDoData,
} from "../../data/constant";
import { DataCardModel } from "../../interfaces/DataCardModel";
import initialData from "../../data/initial-data";
import { DragDropContext } from "@hello-pangea/dnd";

export const Content = () => {
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [state, handleState] = useState<any>(initialData);
  const handleDragEnd = (result: any) => {
    return;
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
                data={tasks}
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

import { DataCardModel } from "../interfaces/DataCardModel";

const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maioresetperf erendiseaque, exercitationem praesentium nihil.";
const tags = ["Photography", "travel", "Winter"];

export const TaskTitle = {
    TO_DO: "To Do",
    ON_PROGRESS: "On Progress",
    TESTING: "Testing",
    DONE: "Done",
}

export const toDoData: DataCardModel[] = [
    {
      id: 1,
      text: text.length < 40 ? text : text.slice(0, 61) + `...`,
      assigned: "Abir Basumatary",
      tags: tags,
    },
    {
      id: 2,
      text: text.length < 40 ? text : text.slice(0, 61) + `...`,
      assigned: "Riba Ba",
      tags: tags,
    },
    {
      id: 3,
      text: text.length < 40 ? text : text.slice(0, 61) + `...`,
      assigned: "Gita Rani",
      tags: tags,
    },
];

export const OnProgressData: DataCardModel[] = [
    {
      id: 3,
      text: text.length < 40 ? text : text.slice(0, 61) + `...`,
      assigned: "Abir Basumatary",
      tags: tags,
    },
    {
      id: 4,
      text: text.length < 40 ? text : text.slice(0, 61) + `...`,
      assigned: "Riba Ba",
      tags: tags,
    },
];

export const TestingData: DataCardModel[] = [
    {
      id: 5,
      text: text.length < 40 ? text : text.slice(0, 61) + `...`,
      assigned: "Abir Basumatary",
      tags: tags,
    },
    {
      id: 6,
      text: text.length < 40 ? text : text.slice(0, 61) + `...`,
      assigned: "Riba Ba",
      tags: tags,
    },
];

export const DoneData: DataCardModel[] = [
    {
      id: 7,
      text: text.length < 40 ? text : text.slice(0, 61) + `...`,
      assigned: "Abir Basumatary",
      tags: tags,
    },
    {
      id: 8,
      text: text.length < 40 ? text : text.slice(0, 61) + `...`,
      assigned: "Riba Ba",
      tags: tags,
    },
];
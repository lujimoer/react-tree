import { TreeProps } from "./type";

export const fakeData: TreeProps[] = [
  {
    key: "0",
    content: "文件1",
    children: [
      {
        key: "0-1",
        content: "文件child - 1",
        children: [],
      },
      {
        key: "0-2",
        content: "文件child - 2",
        children: [],
      },
    ],
  },
  {
    key: "1",
    content: "文件2",
    children: [
      {
        key: "1-1",
        content: "文件child - 1 - 1",
        children: [],
      },
      {
        key: "1-2",
        content: "文件child - 2 - 1",
        children: [],
      },
    ],
  },
  {
    key: "2",
    content: "文件3",
    children: [],
  },
];

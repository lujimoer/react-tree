export type TreeProps = {
  key: string;
  content: React.ReactNode;
  children: TreeProps[];
};

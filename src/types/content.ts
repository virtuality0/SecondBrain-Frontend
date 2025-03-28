export type Content = {
  _id: string;
  type: "tweet" | "youtube" | "link";
  link: string;
  tags: string[];
  title: string;
};

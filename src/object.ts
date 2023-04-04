const employee: {
  readonly id: number; //id can not be changed
  name: string;
  phone?: string; //optional to avoid error

  retire: () => number;
} = {
  id: 1,
  name: "Joy",
  retire: () => {
    return 5;
  },
};

console.log(employee);

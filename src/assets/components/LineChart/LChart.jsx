import { Line } from "recharts";

const LChart = () => {

const studentMarks = [
  { id: 1, name: 'John', bangla: 75, english: 80 },
  { id: 2, name: 'Alice', bangla: 80, english: 85 },
  { id: 3, name: 'Bob', bangla: 65, english: 70 },
  { id: 4, name: 'Emily', bangla: 90, english: 95 },
  { id: 5, name: 'Michael', bangla: 85, english: 90 },
  { id: 6, name: 'Sophia', bangla: 70, english: 75 },
  { id: 7, name: 'Daniel', bangla: 78, english: 83 },
  { id: 8, name: 'Emma', bangla: 88, english: 93 },
  { id: 9, name: 'James', bangla: 92, english: 97 },
  { id: 10, name: 'Olivia', bangla: 79, english: 84 },
];


  return (
    <div>
      <LChart width={500} height={400} data={studentMarks}>
        <Line type="monotone" dataKey={'bangla'}></Line>
        <Line type="monotone" dataKey={'english'}></Line>
      </LChart>
    </div>
  );
};

export default LChart;
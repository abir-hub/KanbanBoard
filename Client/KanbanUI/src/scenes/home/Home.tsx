import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Home.scss";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Home = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <>
      <h1>Home Page</h1>
      <Calendar onChange={onChange} value={value} />
    </>
  );
};
export default Home;

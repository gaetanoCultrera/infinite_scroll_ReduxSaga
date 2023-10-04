import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { ListCards, RenderOption } from "./components";

export const App = () => {
  const { isLoading, error } = useSelector(
    ({ dataCards }: RootState) => dataCards
  );
  return (
    <div className="container">
      <h1 className="headingTitle">Infinite Scroll</h1>
      <div className="content">
        <ListCards />
        <RenderOption isLoading={isLoading} error={error} />
      </div>
    </div>
  );
};

import "./style.css";
import { FC, memo } from "react";
import { CustomContentCard } from "../../interfaces/IApiResponse";
export const MainCard: FC<CustomContentCard> = memo(({ username, content }) => {
  return (
    <div className="card">
      <div className="cardTitle">{username}</div>
      <div className="cardBody">{content}</div>
    </div>
  );
});

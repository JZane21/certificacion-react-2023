import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export const ProgressCircle = ({porcentaje}) => {
  return (
    <div className="basis-1/2 p-5 min-w-max">
      <CircularProgressbar
        styles={buildStyles({
          pathColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
          trailColor: "#F5F5F5",
          textColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
          textSize: '12px'
        })}
        value={porcentaje}
        text={`${porcentaje}% Gastado`}
      />
    </div>
  );
};

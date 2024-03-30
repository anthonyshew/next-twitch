export const randomNumberInRange = ({
  min,
  max,
}: {
  min: number;
  max: number;
}) => Math.floor(Math.random() * (max - min) + min);

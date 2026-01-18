type SpacerProps = {
  height: number;
};

export const Spacer = ({ height }: SpacerProps) => {
  return <div style={{ height: `${height}svh` }}></div>;
};

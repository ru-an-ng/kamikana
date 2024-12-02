interface DocProps {
  title: string;
  children: React.ReactNode;
  mxAuto?: boolean;
}

export const Doc = ({ title, children, mxAuto = false }: DocProps) => {
  return (
    <div
      className={`space-y-4 flex flex-col h-full ${
        mxAuto && "mx-auto max-w-2xl"
      }`}
    >
      <h2 className="pl-0.5 font-medium mx-auto max-w-2xl">{title}</h2>
      <div className="space-y-4 flex-1 flex flex-col">{children}</div>
    </div>
  );
};
interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div className={` rounded-[14px] bg-white border ${className}`}>
      {children}
    </div>
  );
};

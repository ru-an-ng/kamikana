interface DocDescProps {
  title: string;
  children: React.ReactNode;
}

export default function DocDesc({ title, children }: DocDescProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg leading-none">{title}</h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-5">
      <h2 className="text-2xl font-semibold text-museum-navy">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-3xl leading-7 text-museum-stone">{subtitle}</p> : null}
    </div>
  );
}

interface TitleProps {
  title: string;
  subTitle?: string;
}

const Title: React.FC<TitleProps> = ({ title, subTitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      {subTitle && <h2>{subTitle}</h2>}
    </div>
  );
};
export interface ContentProps {
  url?: string;
}

export default function Content(props: ContentProps) {
  const { url } = props;
  return (
    <div className="flex-1 w-full h-full bg-green-200 flex items-center justify-center">
      {url ? (
        <img src={url} className="" />
      ) : (
        <div className="w-full h-full"></div>
      )}
    </div>
  );
}

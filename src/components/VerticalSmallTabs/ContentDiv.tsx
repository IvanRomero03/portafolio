interface Props {
  Company: string;
  Proyects: string[];
  position: string;
  content: string;
  techs: string[];
}

const ContentDiv = ({ Company, Proyects, position, content, techs }: Props) => {
  return (
    <div className={"flex-col justify-center items-center m-4"}>
      <h1 className="text-white text-2xl">{Company}</h1>
      <h2 className="text-green-200 text-xl">
        {Proyects.map((Proyect) => Proyect + ". ")}
      </h2>
      <p className="text-white text-lg">{position}</p>
      <p className="text-white text-lg">{content}</p>
      <div className="flex flex-wrap justify-center items-center">
        {techs.map((tech) => (
          <div
            className="flex justify-center items-center m-2"
            key={"tech:" + tech}
          >
            <img src={"https://img.shields.io/badge/" + tech + "-blue"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentDiv;

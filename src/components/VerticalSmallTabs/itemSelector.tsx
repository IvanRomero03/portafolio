interface Props {
  title: string;
  selected: boolean;
}

const ItemSelector = ({ title, selected }: Props) => {
  return (
    <div
      className={
        "flex border-opacity-10 border-white flex-grow h-max align-middle justify-center hover:bg-blue-300 hover:bg-opacity-40 " +
        (selected
          ? " bg-blue-300 bg-opacity-40 border-l-4 "
          : " bg-transparent border-l-2 ")
      }
    >
      <p className="text-white m-2">{title}</p>
    </div>
  );
};

export default ItemSelector;

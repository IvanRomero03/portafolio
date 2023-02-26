export interface Props {
  section: string;
  title: string;
}

const Item = ({ section, title }: Props) => {
  return (
    <li className="text-white m-5 font-mono hover:underline">
      <a href={"#" + section}>{title}</a>
    </li>
  );
};

export default Item;

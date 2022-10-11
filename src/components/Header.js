import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

// this deafult prop is used when the Header tag is called without one
Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;

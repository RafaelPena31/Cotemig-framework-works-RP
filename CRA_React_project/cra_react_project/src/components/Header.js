import "../App.css";

export default function Header(props) {
  const { children, title, subtitle, onClick } = props;

  return (
    <header className="App-header">
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>

      {children}

      <button onClick={onClick}>login</button>
    </header>
  );
}

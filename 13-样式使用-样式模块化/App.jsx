import A from "./views/A/A";
import B from "./views/B/B";
import styles from "./App.module.css";
const App = () => {
  return (
    <>
      <h3>App-css</h3>
      <div className={styles.box1}>box1-className</div>
      <div
        className={styles.box1}
        style={{
          color: "#ccc",
          width: 200,
          borderLeft: "5px solid #000",
          background: "red",
        }}
      >
        box2-style
      </div>

      <A></A>
      <B></B>
    </>
  );
};
export default App;

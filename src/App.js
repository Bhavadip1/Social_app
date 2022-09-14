import "./App.css";
import Navbar from "./Components/Navbar";
import Leftbar from "./Components/Leftbar";
import Rightbar from "./Components/Rightbar";
import Feed from "./Components/Feed";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Add from "./Components/Add";

const useStyle = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function App() {
  const classes = useStyle();

  return (
    <div className="App">
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
}

export default App;

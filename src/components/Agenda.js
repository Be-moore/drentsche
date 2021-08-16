import Header from "./common/Header";
import { useGenericWrapper } from "../styles/overRides";
import { Grid } from "@material-ui/core";
const Agenda = () => {
    const generics = useGenericWrapper()
    return <div className={generics.root}>
          <Grid  container >
              <Grid item xs={12}>
                  <Header title={`Agenda`} />
              </Grid>      
          </Grid>
    </div>
}

export default Agenda;
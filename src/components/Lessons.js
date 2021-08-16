import Header from "./common/Header";
import { useGenericWrapper } from "../styles/overRides";
import { Grid } from "@material-ui/core";
const Lessen = () => {
    const generics = useGenericWrapper()
    return <div className={generics.root}>
          <Grid  container >
              <Grid item xs={12}>
                  <Header title={`Lessen`} />
              </Grid>      
          </Grid>
    </div>
}

export default Lessen;
import Header from "./common/Header";
import { useGenericWrapper } from "../styles/overRides";
import { Grid } from "@material-ui/core";
const Rules = () => {
    const generics = useGenericWrapper()
    return <div className={generics.root}>
          <Grid  container >
              <Grid item xs={12}>
                  <Header title={`Reglement`} />
              </Grid>      
          </Grid>
    </div>
}

export default Rules;
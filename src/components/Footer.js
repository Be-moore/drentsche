import { Grid } from '@material-ui/core'
import { useFooterStyles } from "../styles/overRides";
import EXPERT from '../images/expert.png';
import ST from '../images/st.jpg';
import TR from '../images/tr.png';
const Footer = () => {
  const classes = useFooterStyles()
return(
    <div className={ classes.footerWrapper } >
       <Grid  alignItems="center" justifyContent="space-around" container spacing={3}>
          <Grid item>
              <div className={classes.imgHolder} >
                  <img alt="sponsor" className={classes.img} src={ST} />
              </div>
          </Grid>
          <Grid  item>
              <div className={classes.imgHolder} >
                  <img alt="sponsor" className={classes.img} src={EXPERT} />
              </div>
          </Grid>
          <Grid  item>
              <div className={classes.imgHolder} >
                  <img alt="sponsor" className={classes.img} src={TR} />
              </div>
          </Grid>
       </Grid>
    </div>
)} 

export default Footer;
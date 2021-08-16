import { useHomeStyles } from '../styles/overRides'
import { Grid, Typography, Avatar,IconButton } from '@material-ui/core'
import HORSE from '../images/video/horse.mp4';
import FACEBOOK from '../images/SVG/facebook.svg';
import INSTAGRAM from '../images/SVG/instagram.svg';

const Home = () => {
    const classes = useHomeStyles()
    return (
        <div className={classes.homeWrapper}>
            <div className={classes.videoHolder}>
                <video className={classes.videoContent} autoPlay muted loop>
                    <source src={HORSE} type='video/mp4'></source>
                    Your browser is not supported to show this video
                </video>
            </div>
            <div className={classes.gridWrapper}>
                <Grid justifyContent='center' container>
                    <Grid className={classes.homeGrid} item>
                        <Typography className={classes.homeHeader} variant="h2">Welcom bij</Typography>
                    </Grid>
                    <Grid className={classes.homeGrid}>
                        <div className={classes.banner} >
                          <Typography className={classes.homeHeader} variant="h2">RV De Drentsche AA</Typography>
                          <div className={classes.avatarHolder}>
                              <IconButton>
                                 <Avatar className={classes.avatar} src={INSTAGRAM} />
                              </IconButton>
                              <IconButton>
                                  <Avatar className={classes.avatar} src={FACEBOOK} />
                              </IconButton>
                          </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Home;
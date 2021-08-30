import { useHomeStyles } from '../styles/overRides'
import { Grid, Typography, Avatar,IconButton } from '@material-ui/core'
import FACEBOOK from '../images/SVG/facebook.svg';
import INSTAGRAM from '../images/SVG/instagram.svg';
import { lazy,Suspense } from 'react';


const Video = lazy(()=> import('./common/Video'));

const Home = () => {
    console.log("Home Loaded")
    const classes = useHomeStyles()
    return (
        <div className={classes.homeWrapper}>
            <Suspense fallback={<p>Video Loading....</p>} >
                <Video></Video>
            </Suspense>
            <div className={classes.gridWrapper}>
                <Grid justifyContent='center' container>
                    <Grid className={classes.homeGrid} item>
                        <Typography className={classes.homeHeader} variant="h2">Welkom bij</Typography>
                    </Grid>
                    <Grid className={classes.homeGrid}>
                        <div className={classes.banner} >
                          <Typography className={classes.homeHeader} variant="h2">RV De Drentsche Aa</Typography>
                          <div className={classes.avatarHolder}>
                              <IconButton>
                                 <Avatar alt="instagram" name="instagram" className={classes.avatar} src={INSTAGRAM} />
                              </IconButton>
                              <IconButton>
                                  <Avatar alt="facebook" name="facebook" className={classes.avatar} src={FACEBOOK} />
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
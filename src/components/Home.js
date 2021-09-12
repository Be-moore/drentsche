import { useHomeStyles } from '../styles/overRides'
import { Grid, Typography, Avatar,IconButton } from '@material-ui/core'
import FACEBOOK from '../images/SVG/facebook.svg';
import INSTAGRAM from '../images/SVG/instagram.svg';
import { lazy,Suspense } from 'react';


const Video = lazy(()=> import('./common/Video'));

const Home = () => {
    console.log("Home Loaded")
    const classes = useHomeStyles()
    const goToPage = (page) => {
        switch (page) {
            case 'instagram':
                window.open('https://www.instagram.com/rijvereniging_de_drentsche_aa','_blank') 
                break;
            case 'facebook':
                window.open('https://www.facebook.com/Rijvereniging-De-Drentsche-Aa-101992618870348','_blank');break;
            default:
                break;
        }
    }
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
                              <IconButton onClick={()=> goToPage('instagram')} >
                                 <Avatar alt="instagram" name="instagram" className={classes.avatar} src={INSTAGRAM} />
                              </IconButton>
                              <IconButton onClick={()=> goToPage('facebook')}>
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
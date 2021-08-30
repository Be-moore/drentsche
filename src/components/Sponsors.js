import Header from "./common/Header";
import { useGenericWrapper, useAboutStyles } from "../styles/overRides";
import { Grid, Typography, Paper } from "@material-ui/core";
const Sponsors = () => {
    console.log("Sponsors Loaded");
    const generics = useGenericWrapper()
    const classes = useAboutStyles();
    return (
        <div className={generics.root}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Header title={`Sponsoren`} />
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.paragraph}>
                        <Paper className={classes.paper} elevation={2} square >
                            <Typography gutterBottom className={classes.text} variant='body1' >
                                Een vereniging kan niet bestaan en floreren zonder hulp van sponsoren. Wij bedanken de volgende sponsoren voor hun ondersteuning van onze vereniging:
                            </Typography>
                            <Typography className={classes.text} variant='body1' >
                                Stal Hulzebos: <a target='_blank' rel="noreferrer" href="https://www.stal-hulzebos.nl">www.stal-hulzebos.nl</a>
                            </Typography>
                            <Typography className={classes.text} variant='body1' >
                                Trainingsstal Koolen: <a target='_blank' rel="noreferrer" href="https://www.stalkoolen.nl">www.stalkoolen.nl</a>
                            </Typography>
                            <Typography className={classes.text} variant='body1' >
                                Expert Zuidlaren/Haren: <a target='_blank' rel="noreferrer" href="https://www.expert.nl/winkels/zuidlaren">Expert Zuidlaren | Expert.nl</a> & <a target='_blank' rel="noreferrer" href="https://www.expert.nl/winkels/haren">Expert Haren</a>
                            </Typography>
                            <Typography className={classes.text} variant='body1' >
                                Loonbedrijf Peter Ziel
                            </Typography>
                            <Typography className={classes.text} variant='body1' >
                                Bootsman Medisch Advies Bureau
                            </Typography>
                        </Paper>
                    </div>
                    <div className={classes.paragraph}>
                        <Paper className={classes.paper} elevation={2} square >
                            <Typography gutterBottom className={classes.text} variant='body1' >
                            Wilt u ook sponsor worden van de vereniging? Wie bieden diverse pakketten aan. Neem hiervoor vrijblijvend contact op met Marcel Hulzebos. 
                            </Typography>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Sponsors;
import Header from "./common/Header";
import { useGenericWrapper, useAboutStyles,useContactStyles } from "../styles/overRides";
import { Grid, Paper, Typography } from "@material-ui/core";
import FRONT from '../images/location/front.jpg'
import SIDE from '../images/location/side.jpg';
const Contact = () => {
  

console.log("Contact Loaded");

    const generics = useGenericWrapper()
    const classes = useAboutStyles();
    const contactClasses = useContactStyles();
    return <div className={generics.root}>
        <Grid container>
            <Grid item xs={12}>
                <Header title={`Contact`} />
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper} elevation={2} square >
                    <div className={contactClasses.grid} >
                    <Grid alignItems="flex-start" container>
                        <Grid item lg={6} md={12} sm={12} xs={12} >
                            <div className={contactClasses.imageHolder}>
                               <img  alt="front side of the stables" className={contactClasses.image} src={FRONT} />
                            </div>
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <div className={contactClasses.contact}>
                                <Typography className={contactClasses.header} gutterBottom variant='h4'>Leden Contact</Typography>
                                <div className={contactClasses.member}>
                                  <Typography className={contactClasses.name} gutterBottom variant='body1' >Voorzitter Nancy Bootsma</Typography>
                                  <Typography className={contactClasses.name} >e-mail@.nl</Typography> 
                                </div>
                                <div className={contactClasses.member}>
                                  <Typography className={contactClasses.name} gutterBottom variant='body1' >Secretaris Marije de Vries</Typography>
                                  <Typography className={contactClasses.name} >e-mail@.nl</Typography> 
                                </div>
                                <div className={contactClasses.member}>
                                  <Typography className={contactClasses.name} gutterBottom variant='body1' >Penningmeester Rolf Boer</Typography>
                                  <Typography className={contactClasses.name}>e-mail@.nl</Typography> 
                                </div>
                                <div className={contactClasses.member}>
                                  <Typography className={contactClasses.name} gutterBottom variant='body1' >Algemeen bestuurslid Marcel hulzebos</Typography>
                                  <Typography className={contactClasses.name} >e-mail@.nl</Typography> 
                                </div>
                                <div className={contactClasses.member}>
                                  <Typography className={contactClasses.name} gutterBottom variant='body1' >Algemeen bestuurslid Miranda Trip</Typography>
                                  <Typography className={contactClasses.name} >e-mail@.nl</Typography> 
                                </div>
                                <div className={contactClasses.member}>
                                  <Typography className={contactClasses.name} gutterBottom variant='body1' >Algemeen bestuurslid Chanal Wieringa</Typography>
                                  <Typography className={contactClasses.name} >e-mail@.nl</Typography> 
                                </div>
                            </div>
                            
                        </Grid>
                    </Grid>
                    </div>
                    <div className={contactClasses.grid}>
                    <Grid alignItems="flex-start" container>
                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <div className={contactClasses.contact}>
                                <Typography className={contactClasses.header} gutterBottom variant='h4'>Locatie Sunrise Stables</Typography>
                                <div className={contactClasses.location}>
                                  <Typography gutterBottom variant='body1'>Baggelhuizen 2</Typography>
                                  <Typography>9405 VD Assen</Typography> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs={12} >
                            <div className={contactClasses.imageHolder}>
                               <img  alt="side of the stables" className={contactClasses.image} src={SIDE} />
                            </div>
                        </Grid>
                    </Grid>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    </div>
}

export default Contact;
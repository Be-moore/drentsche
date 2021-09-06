import Header from "./common/Header";
import { useGenericWrapper,useAboutStyles } from "../styles/overRides";
import { Grid, Typography,Paper } from "@material-ui/core";
const About = () => {
    console.log("ABOUT lOADED")
    const generics = useGenericWrapper()
    const classes = useAboutStyles();
    return (
        <div className={generics.root}>
          <Grid container spacing={4}>
              <Grid item xs={12}>
                  <Header title={`Over ons`} />
              </Grid>
              <Grid item xs={12}>
                  <div className={classes.paragraph}>
                      <Paper className={classes.paper} elevation={2} square >
                            <Typography className={classes.text} variant='body1' >
                               Landelijke rijvereniging & ponyclub De Drentsche Aa is ontstaan uit de behoefte aan een ouderwetse rijvereniging van weleer. Een vereniging waar onderlinge verbondenheid en saamhorigheid de boventoon voeren. Waar de verenigingslessen een avondje uit zijn en in de kantine de sfeer hangt van een bruin café. Vanuit die gedachte heeft op woensdag 17 maart 2021 de eerste verkennende bespreking plaatsgevonden tussen de bestuursleden en vele vergaderingen later zag landelijke rijverenging & ponyclub De Drentsche Aa op 1 augustus het levenslicht. 
                           </Typography> 
                        </Paper>
                  </div>
                  <div className={classes.paragraph}>
                      <Paper className={classes.paper} elevation={2} square >
                            <Typography className={classes.text} variant='body1' >
                            Wij willen een actieve vereniging zijn waar de verenigingslessen en -activiteiten een plaats van ontmoeting en gezelligheid zijn. Naast gezelligheid is het aanbieden van kwaliteitsvolle lessen een belangrijk speerpunt. Gedreven en deskundige instructeurs geven les aan combinaties van alle leeftijden en niveaus in de disciplines dressuur en springen. Zowel de wedstrijdruiters als de recreanten zijn van harte welkom.  
                           </Typography> 
                        </Paper>
                  </div>
                  <div className={classes.paragraph}>
                      <Paper className={classes.paper} elevation={2} square >
                            <Typography className={classes.text} variant='body1' >
                            Ons voornemen is een actieve vereniging te worden als het gaat om het organiseren van wedstrijden en activiteiten.
                            Passend bij onze ambities hebben wij als uitvalsbasis de prachtige locatie van Sunrise Stables in Assen. Hier vinden onze verenigingslessen en overige activiteiten plaats.  
                           </Typography> 
                        </Paper>
                  </div>
             </Grid>      
          </Grid>
    </div>
    )
}

export default About;
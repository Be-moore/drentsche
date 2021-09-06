import Header from "./common/Header";
import { useGenericWrapper,useCardStyle } from "../styles/overRides";
import { Grid } from "@material-ui/core";
import CustomCard from './common/CustomCard';
import PRESIDENT from '../images/members/president.jpg';
import VICE from '../images/members/vice.png';
import MARCEL from '../images/members/marcel.png';
import MARIJKE from '../images/members/marijke.png';
import NANCY from '../images/members/nancy.png';
const Management = () => {
    console.log("Management Loaded");
    const generics = useGenericWrapper()
    const  classes =  useCardStyle()
    return <div className={generics.root}>
        <Grid container spacing={4} >
            <Grid item xs={12}>
                <Header title={`Bestuur`} />
            </Grid>
            <Grid className={classes.grid} item lg={6} md={12} sm={12}>
                <CustomCard
                    title={`Voorzitter`}
                    name={`Nancy Bootsman`}
                    photo={NANCY}
                    description1={`Mijn hele leven ben ik al gepassioneerd door alles wat met paarden te maken heeft. Zelf was ik vanaf mijn zesde zo vaak mogelijk te vinden op de ponymanege de Wroetende Mol in Bedum. De wedstrijdsport heb ik gestaakt na de geboorte van mijn tweede dochter. Zij rijden nu beiden fanatiek paard en pony en de liefde voor de dieren zie ik bij hen terug.`} 
                    description2={`Wij proberen met De Drentsche Aa een vereniging op te bouwen waarin we op een plezierige manier met elkaar van de paardensport kunnen genieten. Met de ervaring die we meenemen in het bestuur, hopen we een kwalitatief goed aanbod te doen in instructie en activiteiten. We hopen het verenigingsgevoel aan te wakkeren en leden te enthousiasmeren voor vrijwilligerstaken.`}
                    description3={`Bij vragen over algemene zaken kun je contact met mij opnemen.`}
                />
                
            </Grid>
            <Grid className={classes.grid} item lg={6} md={12} sm={12}>
                <CustomCard 
                 title={`Secretaris en vice-voorzitter`}
                 name={`Marije de Vries`}
                 photo={MARIJKE}
                 description1={`Mijn naam is Marije de Vries. Van jongs af aan rijd ik paard. Begonnen bij de Eswal manege in Vries en later op eigen pony’s en paarden waar ik ook geregeld een dressuurwedstrijd mee reed. Op een gegeven moment kwam ik bij Miranda Trip terecht en heb ik haar jarenlang geholpen met het verzorgen van de paarden. Het was Miranda die ruim acht jaar geleden het paard Tiësto in mijn leven bracht. Met hem ben ik een tijd lang fanatiek geweest in de wedstrijdsport. Hij is nu op een leeftijd dat dat niet meer kan en vanwege mijn werkzaamheden als jurist en promovenda is dat ook niet meer zo goed te combineren. Wij zijn nu alleen nog af en toe in het bos te vinden. `} 
                 description2={undefined}
                 description3={`Bij vragen over je lidmaatschap kun je contact met mij opnemen.`}
                />
            </Grid>
            <Grid className={classes.grid} item lg={6} md={12} sm={12}>
                <CustomCard 
                 title={`Penningmeester`}
                 name={`Rolf Boer`}
                 photo={VICE}
                 description1={`Ik ben Rolf. Van oorsprong heb ik niets met de paardensport te maken, maar door mijn vrouw ben ik ermee in aanraking gekomen. In het dagelijks leven ben ik werkzaam als salesmanager voor een software ontwikkelaar.`} 
                 description2={undefined}
                 description3={`Bij vragen over je contributie kun je contact met mij opnemen.`}
                />
            </Grid>
            <Grid className={classes.grid} item lg={6} md={12} sm={12}>
                <CustomCard
                   title={`Algemeen bestuurslid`}
                   name={`Marcel Hulzebos`}
                   photo={MARCEL}
                   description1={`Ik ben Marcel Hulzebos. De hele dag staat bij mij in het teken van de paarden(sport). Samen met mijn vriendin Kim Koolen van trainingsstal Koolen, run ik Stal Hulzebos in Lieveren. Een pension- en handelsstal die zich bezighoudt met de fokkerij, het opleiden van paarden en de verkoop van zowel dressuur- als springpaarden. De fokkerij is het onderdeel waar mijn interesse het meeste naar uitgaat. Ieder jaar fokken wij meerdere veulens met als ultieme doel een goedgekeurde dekhengst. Daarnaast ben ik werkzaam bij een bedrijf in paardensportbodems en ben ik leverancier van alles wat ruiter, paard en accommodatie nodig hebben.`} 
                   description2={undefined}
                   description3={`Bij vragen over sponsoring, het actief worden als vrijwilliger of ideeën voor activiteiten kun je contact met mij opnemen.`}
                
                />
            </Grid>
            <Grid className={classes.grid} item lg={6} md={12} sm={12}>
                <CustomCard
                  title={`Algemeen bestuurslid`}
                  name={`Miranda Trip`}
                  photo={PRESIDENT}
                  description1={`Mijn naam is Miranda Trip en ik ben professioneel dressuurinstructrice. In 1995 heb ik mijn opleiding aan het NHB Deurne succesvol afgerond. Vervolgens heb ik een aantal jaren als amazone gewerkt op een hengstenhouderij en dressuurstal in Duitsland. Hier heb ik vele paarden opgeleid en veel ervaring opgedaan als spring- en dressuurruiter. Terug in Nederland ben ik mijn eigen dressuurstal begonnen in Oosterhesselen. Ook hier stond het opleiden van paarden centraal. In 2008 ben ik met mijn gezin naar Tynaarlo verhuisd en startte ik mijn dressuurstal Tynaarlo Dressage, een kleinschalige en exclusieve dressuurstal waar kwaliteitsvolle dressuurpaarden deskundig worden opgeleid. Ik ben in mijn hele loopbaan heel actief geweest in de sport als spring- en dressuurruiter. Diverse paarden heb ik op hoog niveau tot aan de Lichte Tour mogen uitbrengen, waarbij ik successen heb behaald op regionale en nationale kampioenschappen. Ik geef dressuurlessen aan privéklanten en praktijklessen aan het Terra College in Assen. Ook heb ik met Chantal Wieringa en nog een collega een ponyopleiding genaamd ‘Equikidz’ waarbij we kinderen zowel praktijk- als theorielessen geven. De eerste periode zal ik de ponylessen bij de vereniging voor mijn rekening nemen. Na verloop van tijd hoop ik zelf mee te rijden met de verenigingslessen.`} 
                  description2={undefined}
                  description3={`Bij vragen over de verenigingslessen kun je contact met mij opnemen.`}
                
                />
            </Grid>
            <Grid className={classes.grid} item lg={6} md={12} sm={12}>
                <CustomCard
                  title={`Algemeen bestuurslid`}
                  name={`Chantal Wieringa`}
                  photo={PRESIDENT}
                  description1={`Mijn naam is Chantal Wieringa. Al van jongs af aan ben ik bezig in de paardenwereld. Ik ben in het bezit van een kwpn ruin Glenn v. Up to Date, die ik als veulen gekocht heb. Samen mogen wij nu M2 dressuur starten. Onder begeleiding van Miranda trainen wij rustig door. In het dagelijks leven geef ik les op een vmbo school. Mijn ervaring als docent gecombineerd met mijn ervaring met paarden neem ik mee tijdens de (theorie)lessen van Equikidz, een ponyopleiding die ik samen heb met Miranda en nog een collega.`} 
                  description2={undefined}
                  description3={`Het bestuur vergadert met enige regelmaat. Heb je een onderwerp dat besproken moet worden, neem dan contact op met Nancy Bootsman.`}
                />
            </Grid>
        </Grid>
    </div>
}

export default Management;
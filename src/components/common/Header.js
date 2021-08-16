import {Grid, Typography } from '@material-ui/core'
import {useTitleStyles} from '../../styles/overRides'

const Header = ({title}) => {
const classes = useTitleStyles()
return (
<div className={classes.root}>
    <Grid container>  
       <Grid item >
            <Typography className={classes.title}>{title}</Typography>  
       </Grid>
   </Grid>
</div>
 )
}

export default Header
import HORSE from '../../images/video/horse.mp4';
import { useHomeStyles } from '../../styles/overRides'
const Video = () => {
    const classes = useHomeStyles()
    return <div className={classes.videoHolder}>
        <video className={classes.videoContent} autoPlay muted loop>
            <source src={HORSE} type='video/mp4'></source>
            Your browser is not supported to show this video
        </video>
    </div>
}


export default Video;
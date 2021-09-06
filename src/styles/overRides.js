import { AppBar, Button, Toolbar } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { addBorder } from './generics';
import { COLORS } from './constants'
import MAIN_BACKGROUND from '../images/bg.jpg';


export const useWrapperStyles = makeStyles((theme) => ({
    root: {
    }
}))
export const useHeaderStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 0,
        boxShadow: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px'
    },
    logo: {
        flexGrow: 2,
    },
    img: {
        padding: '0 1rem',
        width: '150px',
        maxWidth: '100%'
    },
    menu: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-around",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
        [theme.breakpoints.down('md')]:{
            display:'none'
        }
    },
    menuButton:{
        marginRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "none",
     }
    },
    anchor: {
        textDecoration: 'none',
        color: COLORS.DARK_BROWN,
        '&:hover': {
            color: COLORS.LIGHT_BROWN
        }
    }
}));
export const useHomeStyles = makeStyles((theme) => ({
    homeWrapper: {
        position: 'relative',
        width: '100%',
        ...addBorder('.5px', 'transparent'),
    },
    videoHolder: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        width: '100%',
        zIndex: -1,
        opacity: .15
    },
    videoContent: {
        height: '100%',
        width: '100%',
        objectFit: 'cover'
    },
    gridWrapper: {
        maxWidth: '67%',
        minHeight: '58vh',
        margin: '6rem auto',
        padding: '3rem',
        display: 'flex',
        transform: 'skew(-12deg)',
        '& > *': {
            transform: 'skew(12deg)',
        },
        [theme.breakpoints.down('sm')]: {
            transform: 'skew(0deg)',
            '& > *': {
                transform: 'skew(0deg)',
            },
        },

    },
    homeGrid: {
        display: 'flex',
        alignItems: 'stretch',
        padding: '5rem',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        transform: 'skew(-12deg)',
        zIndex: 70,
        boxShadow: 'rgba(17, 17, 26, 0.1) 0px 0px 16px',
        '& > *': {
            transform: 'skew(12deg)',
        },
        [theme.breakpoints.down('md')]: {
            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 0px 0px',

        },
        [theme.breakpoints.down('sm')]: {
            transform: 'skew(0deg)',
            '& > *': {
                transform: 'skew(0deg)',
            },
        },
        '&:last-child': {
            backgroundColor: "rgb(124, 179, 191,.6)",
            opacity: .8
        }
    },
    homeHeader: {
        fontWeight: '700',
        opacity: .7
    },
    banner: {
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        [theme.breakpoints.down('sm')]: {
            padding: '.5rem',
            textAlign: 'center'
        }

    },
    avatarHolder: {
        padding: '1rem',
        display: 'flex',
        marginTop: '2rem',
        justifyContent: 'center',
        cursor: 'pointer'
    },
    avatar: {
        width: '72px',
        height: '63px',
        '& > *': {
            width: '88%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '65px',
            height: '52px',
        }
    }
}));
export const useGenericWrapper = makeStyles((theme) => ({
    root: {
        width: '90%',
        margin: '0 auto',
        minHeight: '70vh',
        backgroundImage: `url(${MAIN_BACKGROUND})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        marginTop: '2rem'
    }
}))


export const useTableStyles = makeStyles((theme) => ({
    table: {
        minWidth: 350
    }
}))

export const useAboutStyles = makeStyles((theme) => ({
    paragraph: {
        margin: '1.5rem 0',
        padding: '1rem',
    },
    paper: {
        padding: '4rem',
        [theme.breakpoints.down('sm')]: {
            padding: '1.2rem'
        },

    },
    text: {
        fontSize: '1.3rem',
        lineHeight: '45px',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.1rem',
            lineHeight: '35px',

        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
            lineHeight: '27px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '.9rem',
            lineHeight: '27px',
        }

    },
    lessonHeader: {
        fontWeight: 700,
        marginBottom: '2rem'
    }
}))
export const useContactStyles = makeStyles((theme) => ({
    grid: {
        padding: '2rem',
        margin: '3rem',
        [theme.breakpoints.down('xs')]:{
            margin:0,
            padding:'1rem'
        }
    },
    imageHolder: {
        padding: '1rem',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        [theme.breakpoints.down('md')]:{
        }

    },
    image: {
        maxWidth: '100%'
    },
    contact: {
        padding: "1rem 1rem 0 3rem",
        [theme.breakpoints.down('md')]:{
          padding: "1rem 1rem 0 0rem",
        }
    },
    location:{
        padding: "1rem 1rem 0 0rem",
        [theme.breakpoints.down('md')]:{
            padding: "1rem 1rem 2rem 0rem",
          },
          '& > * ':{
              [theme.breakpoints.down('sm')]:{
                fontSize: ".7rem",
              }

          }

    },
    header: {
        padding: '1rem 0',
        marginBottom: '2rem',
        [theme.breakpoints.down('sm')]:{
            marginBottom: ".7rem",
          }
    },
    member: {
        display: 'flex',
        textAlign: 'left',
        justifyContent: 'space-between',
        marginBottom: '.9rem',
       
    },
    name:{
        [theme.breakpoints.down('sm')]:{
            fontSize: ".7rem",
          }
    }

}))

export const useTitleStyles = makeStyles((theme) => ({
    root: {
        padding: '5rem',
        [theme.breakpoints.down('md')]: {
            padding: '4rem'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '3rem'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '2rem'
        }
    },
    title: {
        fontSize: '4rem',
        fontWeight: '700',
        color: COLORS.LIGHT_BLUE,
        [theme.breakpoints.down('md')]: {
            fontSize: '3rem'
        },
    },
   
}))

export const useFooterStyles = makeStyles({
    footerWrapper :{
        padding:"3rem",
        marginTop:'2rem'
    },
    imgHolder:{
        maxWidth:'10rem',
    },
    img:{
        maxWidth:'100%'
    }
    

})

export const useCardStyle = makeStyles({
    root: {
        maxWidth: 520,
        display: 'flex',
       
    },
    action:{
    },
    media:{
     maxWidth:'100%',
     minHeight:'35rem'
    },
    title: {
        fontWeight: '700'
    },
    description: {
        marginTop: '1rem',
        marginBottom: '1rem',
        fontSize: '1rem'
    },
    grid: {
        display: 'flex',
        justifyContent: 'center',
    }
});





/// --------------  compoent overrides ------------- /// 

export const CustomHeader = withStyles({
    root: {
        backgroundColor: COLORS.WHITE,
        color: COLORS.DARK_BROWN

    }
})(AppBar)
export const CustomToolBar = withStyles({
    root: {
        padding: 0,
        margin: 0
    }
})(Toolbar)


export const CustomButton = withStyles({
    root: {
        padding: '2rem',
        borderRadius: 0,
        fontWeight: '700',
        '&:hover': {
            backgroundColor: COLORS.BEIGE
        },
        '&:hover a': {
            color: COLORS.LIGHT_RED
        }
    }
})(Button);
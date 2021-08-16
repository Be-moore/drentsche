import { AppBar, Button, Toolbar } from '@material-ui/core';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import { addBorder } from './generics';
import {COLORS} from './constants'
import MAIN_BACKGROUND from '../images/bg.jpg';


export const useWrapperStyles = makeStyles((theme)=>({
    root :{
    }
}))
export const useHeaderStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin:0,
      boxShadow: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px'
    },
    logo: {
       flexGrow:2,
      
    },
    img:{
        padding:'0 1rem',
        width:'200px',
        maxWidth:'100%'
    },
    menu: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-around",
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      },
    anchor:{
        textDecoration:'none',
        color:COLORS.DARK_BROWN,
        '&:hover':{
            color:COLORS.LIGHT_BROWN
        }
    }
  }));
  export const useHomeStyles = makeStyles((theme)=> ({
      homeWrapper:{
          position:'relative',
          width:'100%',
        ...addBorder('.5px', 'transparent'),
      },
      videoHolder:{
          position:'absolute',
          top:0,
          left:0,
          right:0,
          height:'100%',
          width:'100%',
          zIndex:-1,
          opacity:.15
      },
      videoContent:{
         height:'100%',
         width:'100%',
         objectFit:'cover'
      },
      gridWrapper:{
        maxWidth:'67%',
        minHeight:'58vh',
        margin:'6rem auto',
        padding:'3rem',
        display:'flex',
        transform:'skew(-12deg)',
        '& > *':{
            transform:'skew(12deg)',
        }
    },
    homeGrid:{
        display:'flex',
        alignItems:'stretch',
        padding:'5rem',
        flexDirection:'column',
        alignContent:'center',
        justifyContent:'center',
        transform:'skew(-12deg)',
        zIndex:70,
        boxShadow: 'rgba(17, 17, 26, 0.1) 0px 0px 16px',
        '& > *':{
            transform:'skew(12deg)',
        },
        '&:last-child':{
            backgroundColor:"rgb(124, 179, 191,.6)",
            opacity:.8
        }
    },
    homeHeader:{
        fontWeight:'700',
        opacity:.7
    },
    banner:{
        padding:'1rem',
        display:'flex',
        flexDirection:'column',
        alignItems:'stretch',
        
    },
    avatarHolder:{
       padding:'1rem',
       display:'flex',
       marginTop:'2rem',
       justifyContent:'center',
       cursor:'pointer'
    },
    avatar:{
        width: '72px',
        height: '63px',
        '& > *': {
            width:'88%'
        }
    }
  }));
  export const useGenericWrapper = makeStyles((theme)=> ({
      root: {
        width:'90%',
        margin:'0 auto',
        minHeight:'70vh',
        backgroundImage:`url(${MAIN_BACKGROUND})`,
        backgroundPosition:'center',
        backgroundRepeat:'repeat',
        backgroundSize:'cover',
        marginTop:'2rem'
      }
  }))
  export const useAboutStyles = makeStyles((theme)=> ({
    paragraph: {
        margin:'1.5rem 0',
        padding:'1rem',
    },
    paper:{
        padding:'4rem',
        
    },
    text:{
        fontSize:'1.3rem',
        lineHeight:'45px'
    }
}))

  export const useTitleStyles = makeStyles((theme)=>({
       root:{
           padding:'5rem',
        },
        title:{
           fontSize:'4rem',
           fontWeight:'700',
           color:COLORS.LIGHT_BLUE
       }
  }))

  export const useCardStyle = makeStyles({
    root: {
      maxWidth: 520,
      display:'flex',
    },
    title:{
        fontWeight:'700'
    },
    description:{
        marginTop:'1rem',
        marginBottom:'1rem',
        fontSize:'1rem'
    },
    grid : {
       display:'flex',
       justifyContent:'center',
       marginBottom:'5rem'
    }
  });





  /// --------------  compoent overrides ------------- /// 

  export const CustomHeader = withStyles({
      root:{
          backgroundColor:COLORS.WHITE,
          color:COLORS.DARK_BROWN
          
      }
  })(AppBar)
  export const CustomToolBar = withStyles({
      root:{
          padding:0,
          margin:0
      }
  })(Toolbar)


  export const CustomButton = withStyles({
     root:{
         padding:'2rem',
         borderRadius:0,
         fontWeight:'700',
         '&:hover':{
             backgroundColor:COLORS.BEIGE
         },
         '&:hover a':{
            color:COLORS.LIGHT_RED
        }
     }
  })(Button);
import * as React from 'react';
import {makeStyles} from '@mui/styles';
import Button from '../button';
import {Theme} from '@mui/system';

const useStyles = makeStyles((theme:Theme) => ({
    pipe:{
        width: "1px",
        height: "28px",
        marginRight: "8px",
        marginLeft: "8px",
        backgroundColor: 'white',
    },
    header:{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height:"72px",
        backgroundColor:"black",
        color: "white",
        justifyContent:"center"

    },
    logoImg:{

          width:"163px"
    },
    logoSection:{
        display:'flex',
        textAlign:"left",
        maxWidth: "300px",
        width: "100%",
        [theme.breakpoints.down('md')]: {
            "& img:nth-child(3)": {
                display:"none",
            },
            "& div:nth-child(2)": {
                display:"none",
            },
        },
    },
    container:{
        padding: "12px 0",
        width: "90%",
        justifyContent: 'space-between',
        display:"flex",
        alignItems:"center"
    },
    buttonsContainer:{
        justifyContent: 'space-between',
        "& button": {
            margin: "5px 8px",
        },
        [theme.breakpoints.down('md')]: {
            "& button:nth-child(2)": {
                display:"none",
            },
        },

    }
}))

const Header = ()=>{
    const styles = useStyles()
    return(<header className={styles.header}>
            <div className={styles.container}>
            <div className={styles.logoSection}>
            <img className={styles.logoImg} src="/static/logo.png" alt="logo"/>
                <div className={styles.pipe}/>

            <img className={styles.logoImg} src="/static/get-trading.png" alt="logo"/>
            </div>
                <div className={styles.buttonsContainer}>
                <Button text={"Login"} variant={"outlined"} onclick={()=>{console.log("button clicked")}}/>

                <Button text={"Create free demo account"} onclick={()=>{console.log("button clicked")}}/>
                </div>
            </div></header>
)
}

export default Header

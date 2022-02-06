import React from "react";
import Select from "@mui/material/Select";
import {makeStyles} from "@mui/styles";
import MenuItem from "@mui/material/MenuItem";
import { InputLabel} from '@mui/material';

const useStyles = makeStyles(() => ({
    formControl:{
        padding: "4px 0 5px",
        position:"relative",
        display:"inline-block",
        width:"100%",
        paddingRight: '10px !important',
    },
    label:{
        fontWeight:'bold !important',
        fontSize:"13px !important",
        marginBottom:'5px',
        color:'black !important',
    },
    select:{
        '& <div':{
            minHeight:"44px !important",
        },
        width:"100%",
        paddingLeft: "10px",
        backgroundColor:'#f0f3f7',
        minHeight:"44px !important",
    }
}))
type Props = {
    value: string;
    name: string;
    label: string;
    items: string[];
    onChange: (arg: any) => void
};


const DropDown: React.FC<Props> = ({name, value, label, items, onChange}) => {
    const styles= useStyles()
    return (

        <div className={styles.formControl} >
            <InputLabel className={styles.label} id="country" >{label}</InputLabel>

            <Select
                className={styles.select}
                name={name}
                value={value}
                variant="standard"
                onChange={onChange}
                displayEmpty={true}
                disableUnderline
            >
                {items.map((item: string) => {
                    return <MenuItem key={item} value={item}>{item}</MenuItem>;
                })}
            </Select>
        </div>

    );
};

export default DropDown;

import TextField from "@mui/material/TextField";
import React from 'react';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(() => ({
    textField: {
        width: "100%",
        margin: "5px 5px 5px 0px !important",
        paddingRight: "10px !important",
        "& div": {
            margin: "0px !important"
        },
        "& input": {
            minHeight: "35px",
            backgroundColor: '#f0f3f7',
            paddingLeft: "10px",
            borderRadius: "5px"
        },
        "& label": {
            position: 'relative',
            fontWeight: 'bold',

        }
    },

}))

interface ITextInput {
    id: string;
    name: string;
    type: string;
    onChange: (value: any) => void;
    label: string;
    placeHolder?: string;
}

const TextInput: React.FC<ITextInput> = ({id, name, type = "text", onChange, label, placeHolder}) => {
    const styles = useStyles()
    return <TextField
        className={styles.textField}
        InputLabelProps={{
            shrink: true,
            style: {color: 'black'},
        }}
        InputProps={{
            disableUnderline: true
        }}
        id={id}
        name={name}
        label={label}
        type={type}
        onChange={onChange}
        variant="standard"
        placeholder={placeHolder}
    />
};

export default TextInput;

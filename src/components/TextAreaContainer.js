import React, { useEffect, useState } from 'react';
import { Grid, FormControl, TextareaAutosize, Input, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2%'
    },
    formCSS: {
        marginBottom: '2%'
    },
    textArea: {
        minWidth: '100%',
        marginTop: '1%',
        fontSize: 15,
        fontFamily: 'Verdana',
    }
}))



const TextAreaContainer = () => {
    const classes = useStyles()
    const [useremail, setUserEmail] = useState('Jacqueline Bruzek')
    const [subject, setSubject] = useState('Taco Tuesday');
    const [messageValue, setMessageValue] = useState('')
    const [autoCompleteWord, setAutoCompleteWord] = useState('');
    const socket = new WebSocket('ws://localhost:8000');

    useEffect(() => {
        socket.addEventListener('open', function (event) {
            console.log('Connected to WS Server')
        });
    }, [])

    const [counter, setCounter] = useState(0)

    const handleInputChange = (e) => {
        setMessageValue(e.target.value)
        socket.send(e.target.value)
        if (counter >= 1) {
            setCounter(counter + 1);
        }
        if (e.target.value.charAt(counter) != autoCompleteWord.charAt(counter)) {
            setAutoCompleteWord('')
            setCounter(0)
        } else if (e.target.value == '') {
            setAutoCompleteWord('')
            setCounter(0)
        }
        socket.addEventListener('message', function (event) {
            setCounter(counter + 1)
            console.log("shashe", counter)
            setAutoCompleteWord(event.data)
            console.log(event)
        })
    }

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value)
    }
    const handleSubjectChange = (e) => {
        setSubject(e.target.value)
    }

    return (
        <Grid item xs={12} className={classes.root}>
            <FormControl fullWidth className={classes.formCSS}>
                <Input
                    id="standard-adornment-amount"
                    value={useremail}
                    onChange={handleEmailChange}
                    endAdornment={<InputAdornment position="start"><span className="material-icons">
                        https
                    </span></InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth className={classes.margin}>
                <Input
                    id="standard-adornment-amount"
                    value={subject}
                    onChange={handleSubjectChange}
                />
            </FormControl>
            <FormControl fullWidth >
                <textarea rows={14} onChange={handleInputChange} value={messageValue} className={classes.textArea}></textarea>
                <div style={{
                    fontFamily: 'Verdana',
                    color: '#666', position: "absolute", top: `${11}px`, left: `${4}px`, fontSize: 15
                }}>{autoCompleteWord}</div>
            </FormControl>
        </Grid>
    )
}

export default TextAreaContainer;
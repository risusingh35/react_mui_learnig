import {useState} from 'react'
import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
const MuiButton = () => {
    const [formate, setFormate] = useState([])
    const handleFormateBtnClick=(e,value)=>{
        setFormate(value)
        console.log({value});
    }
    const [formateOne, setFormateOne] = useState([])
    const handleFormateOneBtnClick=(e,value)=>{
        setFormateOne(value)
        console.log({value});
    }
    return (
        <Stack>
            <Stack>
                <Link to="/">Home</Link>
            </Stack>
            <Stack spacing={2} direction={'row'}>
                <Button variant='text'>text </Button>
                <Button variant='contained'>contained </Button>
                <Button variant='outlined'>outlined </Button>
            </Stack>
            <Stack spacing={4} direction={'row'} mt={2}>
                <Button variant='contained' color='primary'>
                    primary
                </Button>
                <Button variant='contained' color='error'>
                    error
                </Button>
                <Button variant='contained' color='info'>
                    info
                </Button>
                <Button variant='contained' color='secondary'>
                    secondary
                </Button>
                <Button variant='contained' color='success'>
                    success
                </Button>
                <Button variant='contained' color='warning'>
                    warning
                </Button>
            </Stack>
            <Stack spacing={4} direction={'row'} mt={2}>
                <Button variant='outlined' color='primary'>
                    primary
                </Button>
                <Button variant='outlined' color='error'>
                    error
                </Button>
                <Button variant='outlined' color='info'>
                    info
                </Button>
                <Button variant='outlined' color='secondary'>
                    secondary
                </Button>
                <Button variant='outlined' color='success'>
                    success
                </Button>
                <Button variant='outlined' color='warning'>
                    warning
                </Button>
            </Stack>
            <Stack spacing={4} direction={'row'} mt={2}>
                <Button variant='text' color='primary'>
                    primary
                </Button>
                <Button variant='text' color='error'>
                    error
                </Button>
                <Button variant='text' color='info'>
                    info
                </Button>
                <Button variant='text' color='secondary'>
                    secondary
                </Button>
                <Button variant='text' color='success'>
                    success
                </Button>
                <Button variant='text' color='warning'>
                    warning
                </Button>
            </Stack>
            <Stack display={'block'} direction={'row'} spacing={2}>
                <Button variant='contained' size='small'>
                    small
                </Button>
                <Button variant='contained' size='medium'>
                    medium
                </Button>
                <Button variant='contained' size='large'>
                    large
                </Button>
            </Stack>
            <Stack direction={'row'} spacing={2} mt={4}>
                <Button variant='contained' color='primary' startIcon={<SendIcon />}>
                    Send
                </Button>
                <Button variant='contained' color='secondary' endIcon={<SendIcon />}>
                    Send
                </Button>
            </Stack>
            <Stack direction={'row'} spacing={2} mt={4}>
                <IconButton size='large' color='error'>
                    <SendIcon />
                </IconButton>
                <Button variant='contained' size='large' disableRipple>
                    disableRipple
                </Button>
                <Button variant='contained' size='large' >
                    not disableRipple
                </Button>
                <Button variant='contained' size='large' disableElevation>
                    disableElevation
                </Button>
                <Button variant='contained' size='large' >
                    not  disableElevation
                </Button>
            </Stack>
            <Stack spacing={2} my={3} direction={'row'}>
                <ButtonGroup variant='outlined' size='small'>
                    <Button>
                        ButtonGroup
                    </Button>
                    <Button>
                        ButtonGroup
                    </Button>
                    <Button>
                        ButtonGroup
                    </Button>
                    <Button>
                        ButtonGroup
                    </Button>
                </ButtonGroup>
            </Stack>
            <Stack spacing={2} my={3} direction={'row'}>
                <ButtonGroup variant='outlined' size='small' orientation='vertical'>
                    <Button>
                        ButtonGroup
                    </Button>
                    <Button>
                        ButtonGroup
                    </Button>
                    <Button>
                        ButtonGroup
                    </Button>
                    <Button>
                        ButtonGroup
                    </Button>
                </ButtonGroup>
            </Stack>
            <Stack my={3} spacing={2} direction={'row'}>
                <ToggleButtonGroup size='medium' color='info' variant='outlined' value={formate} onChange={(e,value)=>handleFormateBtnClick(e,value)}>
                    <ToggleButton value={'bold'}>
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value={'italic'}>
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value={'underline'}>
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            <Stack my={3} spacing={2} direction={'row'}>
                <ToggleButtonGroup size='medium' color='info' variant='outlined' exclusive orientation='vertical' value={formateOne} onChange={(e,value)=>handleFormateOneBtnClick(e,value)}>
                    <ToggleButton value={'bold'}>
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value={'italic'}>
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value={'underline'}>
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}

export default MuiButton
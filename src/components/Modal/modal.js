import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import {useRef, useState, useEffect} from 'react';
import Box from "@material-ui/core/Box";
import { PostAdd } from "@material-ui/icons";
import { CiCircleFilled } from "@ant-design/icons";


function rand() {
    return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
export default function SimpleModal() {
    var invalidMsg;
    const regex = /[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d/;
    const classes = useStyles();
    const postal_code= ['L1V', 'L1W', 'L1X', 'L1Y','L1M', 'L1N', 'L1P', 
        'L1R','L1G', 'L1H', 'L1J', 'L1K', 'L1L', 'L3P', 'L3R', 'L3S', 'L6B', 'L6C',
         'L6E', 'L6G', 'L6A', 'L3P', 'L3T', 'L4B', 'L4C', 'L4E', 'L4S', 'L4T', 'L6P', 
         'L6R', 'L6S','L6T', 'L6V', 'L6W', 'L6X', 'L6Y', 'L6Z', 'L7A'// L4T, L4V, L4W, L4X, L4Y, 
        // L4Z, L5A, L5B, L5C, L5E, L5G, L5H, L5J, L5K, L5L, L5M, L5N, L5R, L5S,
        // L5T, L5V, L5W, M7R, M3C, M4B, M4C, M4E, M4G, M4H, M4J, M4K, M4L, M4M,
          // M4N, M4P, M4R, M4S, M4T, M4V, M4W, M4X, M4Y, M5A, M5B, M5C, M5E, M5G,
           // M5H, M5J, M5K, M5L, M5M, M5N, M5P, M5R, M5S, M5T, M5V, M5W, M5X, M6A,
             //M6B, M6C, M6E, M6G, M6H, M6J, M6K, M6L, M6M, M6N, M6P, M6R, M6S, M7A,
             // M8Z, M9M, M9N, M3C, M4A, M4B, M4C, M4G, M4H, M4J, M4K, M4P, M4W, M8V, M8W,
              // M8X, M8Y, M8Z, M9A, M9B, M9C, M9P, M9R, M9V, M9W, M1L, M1R, M2H, M2J, M2K, M2L,
                //M2M, M2N, M2P, M2R, M3A, M3B, M3C, M3H, M3J, M3K, M3L, M3M, M3N, M4A, M4G, M4N, M4P,
                // M4R, M5M, M5N, M6A, M6B, M6E, M6L, M6M, M7A, M9L, M9M, M9N, M1B, M1C, M1E, M1G, M1H, M1J,
                 // M1K, M1L, M1M, M1N, M1P, M1R, M1S, M1T, M1V, M1W, M1X, M4A, M4B, M4C, M4E
                ];
    const cities=['Ajax', 'Brampton', 'Concord', 'East York', 'Etobicoke', 'Markham', 'Mississauga', 'North York', 'Oshawa', 'Pickering', 'Richmond Hill', 'Scarborough', 'Toronto', 'Vaghaun'];
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(true);
    const [Postal_code, setPostal_Code] = React.useState('');
    const [Cities, setCities] = React.useState('');
    const [Msg, setMsg]=React.useState('');

    useEffect(() => {
        setMsg('');
    }, [Msg])
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
    
        const v1 = postal_code.includes(Postal_code.slice(0,3).toUpperCase());
       
        console.log(Postal_code.slice(0,3).toUpperCase())
        const v2 = cities.includes(Cities);
        
        const v3 =(Postal_code===''||Cities==='')
        console.log(Cities)
        console.log(v1)
        console.log(v2)
        console.log(v3)
      
        if (v1 || v2) {
           
            return handleClose();
        }else if(v3){
            console.log('this is tested')
            setMsg('Plese insert postal code or Selece city from the list')
           
            
        }
        console.log(Msg)
    }
    return (
        <React.Fragment>
            <Box sx={{width: 500 }}></Box>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2>We Serve Limited Areas in GTA</h2>
                    <p>
                        If your city is listed here, Please select it and click GO or enter the First Three of Postal Code and click Go
                    </p>
                   
                    

                    <form onSubmit={handleSubmit}>
                        
                    <select
                           value={Cities}
                           
                           onChange={e=> setCities(e.target.value)}
                           
                         
                    >   
                   
                        <option value="Select">Select</option>
                        <option value="Ajax">Ajax</option>
                        <option value="Brampton">Brampton</option>
                        <option value="Concord">Concord</option>
                        <option value="East York">East York</option>
                        <option value="Etobicoke">Etobicoke</option>
                        <option value="Markham">Markham</option>
                        <option value="Mississauga">Mississauga</option>
                        <option value="North York">North York</option>
                        <option value="Oshawa">Oshawa</option>
                        <option value="Pickering">Pickering</option>
                        <option value="Richmond Hill">Richmon Hill</option>
                        <option value="Scarborough">Scarborough</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Vaughan">Vaghaun</option>
                     </select>
                    <hr></hr>
                        <input
                            type="text"
                            id="Postal Code"
                            placeholder="First Three of Postal Coder"
                            autoComplete="off"
                            value={Postal_code}
                            onChange={(e) => setPostal_Code(e.target.value)}/>
                            <span></span>

                        <button 
                            style={{ height: 30,width: 100,  background: "red", display: "flex",justifyContent: "space-around", borderRadius: 10, color: "white", color: "white",border: "none",  margin: 20, alignSelf: "center",alignContent: "center",padding: 8,cursor: "pointer" }}>
                            GO
                        </button>
                    </form>
            
                    {setMsg!==''&&<span>Plese insert postal code or Selece city from the list</span>}
                </div>
            </Modal>
            </React.Fragment>
    );
}
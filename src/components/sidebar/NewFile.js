import React, { useState } from 'react'
import '../../styles/NewFile.css'

import AddIcon from '@material-ui/icons/Add';

import firebase from 'firebase'
import { storage, db } from '../../firebase'
import Button from "@material-ui/core/Button"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { CircularProgress,Input } from '@material-ui/core';

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const NewFile = () => {
    const classes = useStyles();

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null)
    const [uploading, setUploading] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    const handleUpload = () => {
        setUploading(true)

        storage.ref(`files/${file.name}`).put(file).then(snapshot => {
            console.log(snapshot)

            storage.ref('files').child(file.name).getDownloadURL().then(url => {
                //post image inside the db

                db.collection('myFiles').add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    caption: file.name,
                    fileUrl: url,
                    size: snapshot._delegate.bytesTransferred,
                })

                setUploading(false)
                setOpen(false)
                setFile(null)
            })

            storage.ref('files').child(file.name).getMetadata().then(meta => {
                console.log(meta.size)
            })

        })
    }

    return (
        <div className='newFile'>
            <div className="newFile__container" onClick={handleOpen}>
                <AddIcon fontSize='large' />
                <p>New</p>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <p>Select files you want to upload!</p>
                    {
                        uploading ? (
                              <CircularProgress
                              style = {{
                                marginLeft:80,
                                justifyContent : "center",
                                alignItems : "center",
                                alignContent : "center"
                            }} />

                           

                        ) : (
                                <>
                                <Button
                                  variant="contained"
                                 component="label"
                                 color="primary"
                                 style = {{
                                    marginLeft:20
                                }}
                                       >
                                      Upload File
                                    <input
                                    type="file"
                                    hidden
                                   onChange={handleChange}
                                />
                                  </Button>
                                    <Button onClick={handleUpload} color = "secondary" variant  = "contained"
                                    style = {{
                                        marginLeft:80
                                    }}>Upload</Button>
                                </>
                            )
                    }
                </div>
            </Modal>
        </div>
    )
}

export default NewFile
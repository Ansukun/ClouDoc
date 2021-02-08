import React from 'react'
import '../../styles/FileCard.css'
import Card from"@material-ui/core/Card" 

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const FileCard = ({ name }) => {
    return (
        <Card className='fileCard'
        style = {{
            margin: 20
        }}>
            <div className="fileCard--top">
                <InsertDriveFileIcon style={{ fontSize: 130 }} />
            </div>

            <div className="fileCard--bottom">
                <p>{name}</p>
            </div>
        </Card>
    )
}

export default FileCard
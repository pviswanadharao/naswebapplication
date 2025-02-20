import { Button, Grid2 as Grid, Typography } from "@mui/material"
import { useRef, useState } from "react"

const FileViewer = () => {
    const inputElementRef = useRef()

    const [selectedFiles, setSelectedFiles] = useState([])

    const onFileChange = (files) => {
        setSelectedFiles([...files])
        console.log(selectedFiles, "selectedfiles")
    }

    const uploadFiles = () => {
        let formData = new FormData()
        
        for(let i=0; i<selectedFiles.length; i++){
            formData.append(selectedFiles[i].name, selectedFiles[i].value)
        }
    }
    return <>
        <Grid container direction={"column"}>
            <Grid item>
                <input type='file' ref={inputElementRef} multiple onChange={(e) => onFileChange(e.target.files)} />
            </Grid>
            <Grid item>
                <Button type="submit">Submit</Button>
            </Grid>
            <Grid item>
                {selectedFiles.map((file, index) => (
                    <Typography key={index}>{file.name}{index}</Typography>
                )
                )}
            </Grid>
        </Grid>
    </>
}

export default FileViewer
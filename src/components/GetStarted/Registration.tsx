
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomButtons from "../CustomButtons/Button";
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { DropzoneArea } from 'material-ui-dropzone';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles((theme) => ({

    CardContent: {
        minHeight: '600px'
    }

}));


type RegisterProps = {
    next: () => void
}

export default function Registration({ next }: RegisterProps) {

    const [fileList, setFileList] = useState();
    const onDropzoneAreaChange = (files: any) => {
        setFileList(files);
        //console.log(fileList);
        //console.log("Files:", files);
    };
    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, [])
    const classes = useStyles();

    return (
        <div>
            <section className="section-top-2">
                <Container className="">
                    <Row className="mb-2">
                        <Col lg="6" className="d-flex flex-column justify-content-center col-md-push-6 mb-1">
                            <div>
                                <img src="assets/images/svg/registration.svg" width="100%" />
                            </div>
                        </Col>
                        <Col lg="6" className="mt-2">
                            <Card className="Main_Card">
                                <LinearProgress />
                                <CardContent className={classes.CardContent}>
                                    <Row>
                                        <Col lg="6" sm="12" className='lableMain'>
                                            <InputLabel shrink>Business Name</InputLabel>
                                            <TextField
                                                fullWidth
                                                name="business_name"
                                                placeholder="Enter Business Name"
                                            />
                                        </Col>
                                        <Col lg="6" sm="12" className='lableMain'>
                                            <InputLabel shrink>Owner Name</InputLabel>
                                            <TextField
                                                fullWidth
                                                name="business_name"
                                                placeholder="Enter Owner Name"
                                            />
                                        </Col>
                                    </Row>
                                    <Row className='mt-3'>
                                        <Col lg="6" sm="12" className='lableMain'>
                                            <InputLabel shrink>Phone Number</InputLabel>
                                            <TextField
                                                fullWidth
                                                name="phone_number"
                                                placeholder="Enter Phone Number"
                                            />
                                        </Col>
                                        <Col lg="6" sm="12" className='lableMain'>
                                            <InputLabel shrink>Mobile Number</InputLabel>
                                            <TextField
                                                fullWidth
                                                name="phone_number"
                                                placeholder="Enter Phone Number"
                                            />
                                        </Col>
                                    </Row>

                                    <Row className='mt-3'>
                                        <Col lg="6" sm="12" className='lableMain'>
                                            <InputLabel shrink>Whatsapp Number</InputLabel>
                                            <TextField
                                                fullWidth
                                                name="whatsapp_number"
                                                placeholder="Enter Whatsapp Number"
                                            />
                                        </Col>
                                        <Col lg="6" sm="12" className='lableMain'>
                                            <InputLabel shrink>Business Number</InputLabel>
                                            <TextField
                                                fullWidth
                                                name="business_number"
                                                placeholder="Enter Business Number"
                                            />
                                        </Col>
                                    </Row>
                                    <Row className='mt-3'>
                                        <Col lg="6" sm="12" className='lableMain'>
                                            <InputLabel shrink>Address Line 1</InputLabel>
                                            <TextField
                                                fullWidth
                                                name="address_line_1"
                                                placeholder="Enter Address Line 1"
                                            />
                                        </Col>
                                        <Col lg="6" sm="12" className='lableMain'>
                                            <InputLabel shrink>Address Line 2</InputLabel>
                                            <TextField
                                                fullWidth
                                                name="address_line_2"
                                                placeholder="Enter Address Line 1"
                                            />
                                        </Col>
                                    </Row>
                                    <Row className='mt-3'>
                                        <Col lg="6" sm="12" className='lableMain'>
                                            <InputLabel shrink>Country</InputLabel>
                                            <TextField
                                                fullWidth
                                                name="country"
                                                placeholder="Enter Country"
                                            />
                                        </Col>
                                        <Col lg="6" sm="12" className='lableMain'>
                                            <InputLabel shrink>Province</InputLabel>
                                            <TextField
                                                fullWidth
                                                select
                                                SelectProps={{
                                                    native: true
                                                }}
                                                name="province">
                                                <option value="0"> --select-- </option>
                                                <option value="Province1">Province1</option>
                                                <option value="Province2">Province2</option>
                                                <option value="Province3">Province3</option>
                                            </TextField>
                                        </Col>
                                    </Row>
                                    <Row className='mt-3'>
                                        <Col lg="6" sm="12" className='lableMain'>
                                            <InputLabel shrink>Email</InputLabel>
                                            <TextField
                                                fullWidth
                                                name="email"
                                                placeholder="Enter Email"
                                            />
                                        </Col>
                                        <Col lg="6" sm="12" className='lableMain'>
                                            <InputLabel shrink>Registry Id</InputLabel>
                                            <TextField
                                                fullWidth
                                                name="registry_id"
                                                placeholder="Enter Registry Id"
                                            />
                                        </Col>
                                    </Row>
                                                
                                    <Row className='mt-3'>
                                        <Col lg="12" sm="12" className='lableMain'>

                                            <InputLabel shrink>Tax Identification Number</InputLabel>
                                            <TextField
                                                fullWidth
                                                name="tax_identification_number"
                                                placeholder="Enter Tax Identification Number"
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="mt-1">
                                        <Col lg="12" sm="12">
                                            <InputLabel className="mt-2" variant="standard" htmlFor="uncontrolled-native">
                                                Upload School Logo
                                            </InputLabel>
                                            <div className="mt-2 ram">
                                                <DropzoneArea
                                                    acceptedFiles={["image/*"]}
                                                    filesLimit={1}
                                                    maxFileSize={1048576}
                                                    dropzoneText={"Drag and drop an image here or click"}
                                                    onChange={onDropzoneAreaChange}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </CardContent>
                                <CardContent>
                                    <div className="text-end">
                                        <CustomButtons.ColorButton onClick={next}>Next</CustomButtons.ColorButton>
                                    </div>
                                </CardContent>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

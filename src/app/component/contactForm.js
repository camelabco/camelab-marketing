'use client'
import * as React from 'react';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const theme = (outerTheme) =>
    createTheme({
        direction: 'rtl',
    });

const rtlCache = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});
const ltrCache = createCache({
    key: 'mui',
  });


export default function ContactForm() {

    const [rtl, setRtl] = React.useState(false);

    const handleChange = () => {
      setRtl(!rtl);
    };
  
    return (
        <>
            <CacheProvider value={rtl ? rtlCache : ltrCache}>
                <ThemeProvider theme={theme}>
                    <div  dir={rtl ? 'rtl' : ''}>
                        <Row>
                            <Col lg={6} sm={12}>
                                <TextField id="outlined-basic"
                                    label="First Name"
                                    variant="outlined"
                                    placeholder="Enter your first name"
                                    className='mb-5'
                                    sx={{
                                        width: '100%',
                                        '& .MuiInputLabel-root': {
                                            color: '#637381 !important',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#637381',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#637381',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#637381 !important',
                                                borderWidth: '0.5px',
                                                borderRadius: '5px',
                                            },
                                        },
                                    }}
                                />
                            </Col>
                            <Col lg={6} sm={12}>
                                <TextField id="outlined-basic"
                                    label="Last Name"
                                    variant="outlined"
                                    placeholder="Enter your last name"
                                    className='mb-5'
                                    sx={{
                                        width: '100%',
                                        '& .MuiInputLabel-root': {
                                            color: '#637381  !important',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#637381',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#637381',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#637381 !important',
                                                borderWidth: '0.5px',
                                                borderRadius: '5px',
                                            },
                                        },
                                    }}
                                />
                            </Col>
                            <Col lg={6} sm={12}>
                                <TextField id="outlined-basic"
                                    label="Phone number"
                                    variant="outlined"
                                    placeholder="Enter phone number"
                                    className='mb-5'
                                    sx={{
                                        width: '100%',
                                        '& .MuiInputLabel-root': {
                                            color: '#637381  !important',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#637381',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#637381',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#637381 !important',
                                                borderWidth: '0.5px',
                                                borderRadius: '5px'
                                            },
                                        },
                                    }}
                                />
                            </Col>
                            <Col lg={6} sm={12}>
                                <TextField id="outlined-basic"
                                    label="Email address"
                                    variant="outlined"
                                    placeholder="Enter email"
                                    className='mb-5'
                                    sx={{
                                        width: '100%',
                                        '& .MuiInputLabel-root': {
                                            color: '#637381  !important',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderRadius: '5px'
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#637381',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#637381 !important',
                                                borderColor: '#637381',
                                                borderWidth: '0.5px'
                                            },
                                        },
                                    }}
                                />
                            </Col>
                            <Col lg={12} sm={12}>
                                <TextField id="outlined-basic"
                                    label="Send Message"
                                    variant="outlined"
                                    placeholder='write something here..'
                                    multiline
                                    rows={3}
                                    className='mb-5'
                                    sx={{
                                        width: '100%',
                                        '& .MuiInputLabel-root': {
                                            color: '#637381  !important',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#637381',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#637381',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#637381 !important',
                                                borderWidth: '0.5px',
                                                borderRadius: '5px',
                                            },
                                        },
                                    }}
                                />
                            </Col>
                        </Row>
                        <Button type="submit" className='primary-button'>
                            Submit Now
                        </Button>
                    </div>
                    {/* </div> */}
                </ThemeProvider>
            </CacheProvider>
        </>
    );
}

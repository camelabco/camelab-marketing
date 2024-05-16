'use client'
import * as React from 'react';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import Row from 'react-bootstrap/Row';
import { LanguageContext } from "../layout";

import Col from 'react-bootstrap/Col';
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

    const { selectedLanguage } = React.useContext(LanguageContext);
    const [rtl, setRtl] = React.useState(selectedLanguage === 'ar');

    React.useEffect(() => {
        setRtl(selectedLanguage === 'ar');
    }, [selectedLanguage]);
    console.log(rtl, "<==== rtl");

    const handleChange = () => {
        setRtl(!rtl);
    };

    return (
        <>
            <CacheProvider value={rtl ? rtlCache : ltrCache}>
                <ThemeProvider theme={theme}>
                    <div dir={rtl ? 'rtl' : ''}>
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
                                                borderRadius: '10px !important'
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'rgba(145, 158, 171, 0.8)',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'rgba(145, 158, 171, 0.8) !important',
                                                borderWidth: '0.5px',
                                                borderRadius: '10px !important',
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
                                            color: '#637381 !important',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#637381',
                                                borderRadius: '10px !important'
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'rgba(145, 158, 171, 0.8)',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'rgba(145, 158, 171, 0.8) !important',
                                                borderWidth: '0.5px',
                                                borderRadius: '10px !important',
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
                                            color: '#637381 !important',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#637381',
                                                borderRadius: '10px !important'
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'rgba(145, 158, 171, 0.8)',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'rgba(145, 158, 171, 0.8) !important',
                                                borderWidth: '0.5px',
                                                borderRadius: '10px !important',
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
                                            color: '#637381 !important',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#637381',
                                                borderRadius: '10px !important'
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'rgba(145, 158, 171, 0.8)',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'rgba(145, 158, 171, 0.8) !important',
                                                borderWidth: '0.5px',
                                                borderRadius: '10px !important',
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
                                            color: '#637381 !important',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#637381',
                                                borderRadius: '10px !important'
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'rgba(145, 158, 171, 0.8)',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'rgba(145, 158, 171, 0.8) !important',
                                                borderWidth: '0.5px',
                                                borderRadius: '10px !important',
                                            },
                                        },
                                    }}
                                />
                            </Col>
                        </Row>
                        <button type="submit" className='primary-button'>
                            Submit Now
                        </button>
                    </div>
                    {/* </div> */}
                </ThemeProvider>
            </CacheProvider>
        </>
    );
}

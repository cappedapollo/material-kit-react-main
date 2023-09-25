import { forwardRef } from 'react';
// @mui
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

const LoadingScreen = forwardRef(() => {
    <Box sx={{ display: 'flex' }}>
        <CircularProgress />
    </Box>
});

LoadingScreen.propTypes = {
};

export default LoadingScreen;

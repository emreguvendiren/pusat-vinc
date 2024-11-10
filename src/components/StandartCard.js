import React from 'react'
import { Card, CardHeader, Box } from '@mui/material';

export default function StandartCard({ title, color = 'primary', sx, subheader, children }) {
    return (
        <Card sx={{
            ...sx
        }}>
            {
                title &&
                <CardHeader title={title} subheader={subheader} />
            }

            <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                {children}
            </Box>
        </Card>
    );
}

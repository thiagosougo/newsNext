import Box from "@src/components/Box";
import theme from "@src/theme/theme";
import styled from 'styled-components';

export default function HomeScreen(){
    return (
        <Box
            tag="main"
            styleSheet={{
                backgroundColor: {
                    xs: 'red',
                    sm: 'yellow',
                    md: 'blue'
                }
            }}
        >
        oi
        </Box>
    )
}
import { Box, Flex } from "rebass";
import React from "react";

/**
 * A react component that displays two components side by side.
 *
 * @param props
 * @returns {React.Component}
 * @constructor
 */

const VerticalSplit = props => (
<Flex flexWrap="wrap" flexDirection="column" mx={2} mt={4} px={["2%","5%","7%","9%","11%"]} style={{marginTop: '30px', justifyContent: 'space-around'}}>
    <Box width={[0.9]} px={["2%",0,0,0,0]} alignSelf="center">
        {props.leftSide}
    </Box>
    <Box width={[1]} mb={3} alignSelf="left">
        {props.rightSide}
    </Box>
</Flex>

);

export default VerticalSplit;

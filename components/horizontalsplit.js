import { Box, Flex } from "rebass";
import React from "react";

/**
 * A react component that displays two components side by side.
 *
 * @param props
 * @returns {React.Component}
 * @constructor
 */
const HorizontalSplit = props => (
<Flex flexWrap="wrap">
    <Box width={[1,1/2]}>
        {props.leftSide}
    </Box>
    <Box width={[1,1/2]} alignSelf="center" pl="2%">     
        {props.rightSide}
    </Box>
</Flex>

);

export default HorizontalSplit;

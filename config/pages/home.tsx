import {Box, Tab} from "@mui/material";
import React from "react";
import {TabContext, TabList, TabPanel} from '@mui/lab';
import Wrapper from "../components/wrapper";
import DisplayList from "../components/display-list";

export default function Home() {
    const [value, setValue] = React.useState("0");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => setValue(newValue);

    return (
        <Wrapper>
        <Box sx={{width: '100%'}}>
            <TabContext value={value}>
                <Box sx={{borderBottom: 1, borderColor: "divider"}}>
                    <TabList onChange={handleChange}>
                        <Tab label="Displays" value="0"/>
                        <Tab label="Profiles" value="1"/>
                    </TabList>
                </Box>
                <TabPanel value="0"><DisplayList/></TabPanel>
                <TabPanel value="1">no component yet</TabPanel>
            </TabContext>
        </Box>
        </Wrapper>
    )
}

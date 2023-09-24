import React from "react";
import { Box } from "@mui/material";
import { DocumentTextIcon, UserIcon, BuildingStorefrontIcon, CurrencyRupeeIcon } from "@heroicons/react/24/outline";
import Stats from "../components/DashBoard/Stats";
import "./B2BDashBoard.css"



export const B2BDashBoard = () => {
    return (
        <>
            <div>
                <h1> B2B DashBoard </h1>
            </div>
            <div className="flex justify-center gap-7">
                <Box
                    gridColumn="span 3"
                    // display="flex"
                    alignItems="center"
                    justifyContent="center"
                    className="threespan mx-2 max-w-xs"
                >
                    <Stats
                        title="xxx"
                        subtitle="Total Invoices Generated "
                        progress="0.75"
                        increase="69"
                        icon={<DocumentTextIcon strokeWidth={2} className="h-6 w-6" />}
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    // display="flex"
                    alignItems="center"
                    justifyContent="center"
                    className="threespan mx-2 max-w-xs"
                >
                    <Stats
                        title="xxx"
                        subtitle="Total Number of Students"
                        progress='0.5'
                        increase="^^^"
                        icon={<UserIcon strokeWidth={2} className="h-6 w-6" />}
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    // display="flex"
                    alignItems="center"
                    justifyContent="center"
                    className="threespan mx-2 max-w-xs"
                >
                    <Stats
                        title="xxx"
                        subtitle="Total Number of Schools"
                        progress="0.75"
                        increase="&nbsp;^^^"
                        icon={
                            <BuildingStorefrontIcon strokeWidth={2} className="h-6 w-6" />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    // display="flex"
                    alignItems="center"
                    justifyContent="center"
                    className="threespan mx-2 max-w-xs"
                >
                    <Stats
                        title="xxx"
                        subtitle="Total Revenue Generated"
                        progress="0.75"
                        increase="^^^"
                        icon={
                            <CurrencyRupeeIcon strokeWidth={2} className="h-6 w-6" />
                        }
                    />
                </Box>
            </div>
        </>
    )
};
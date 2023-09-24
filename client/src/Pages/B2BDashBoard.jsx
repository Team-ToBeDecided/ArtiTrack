import React from "react";
import { Box } from "@mui/material";
import { DocumentTextIcon, UserIcon, BuildingStorefrontIcon, CurrencyRupeeIcon } from "@heroicons/react/24/outline";
import Stats from "../components/DashBoard/Stats";
import "./B2BDashBoard.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import MyResponsivePie from "../components/PieChart";
import Header from "../components/Header/Header";




export const B2BDashBoard = () => {
    const chartData = [
        {
            id: "Shawl",
            label: "Pashmina",
            value: 100,
            color: "hsl(56, 70%, 50%)"
        },
        {
            id: "Saffron",
            label: "Saffron",
            value: 300,
            color: "hsl(44, 70%, 50%)"
        },
        {
            id: "Handicrafts",
            label: "Papier Mache",
            value: 130,
            color: "hsl(44, 70%, 50%)"
        }
    ];
    return (
        <>
            <div className="flex p-16 justify-center">
                <Header text="DashBoard" />
            </div>
            <div className="ml-9 flex justify-center gap-10 mt-5">
                <Box
                    gridColumn="span 3"
                    // display="flex"
                    alignItems="center"
                    justifyContent="center"
                    className="threespan mx-2 max-w-xs"
                >
                    <Stats
                        title="xxx"
                        fontSize="text-xl"
                        style={{ padding: '2px' }}
                        subtitle="Total Invoices Generated "
                        progress="0.75"
                        increase="&nbsp; 349"
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
                        subtitle="Number of Consumers"
                        progress='0.5'
                        increase="&nbsp; 47"
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
                        subtitle="Artisans in Community"
                        progress="0.75"
                        increase="&nbsp; 43"
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
                        increase="&nbsp; 43,000/-"
                        icon={
                            <CurrencyRupeeIcon strokeWidth={2} className="h-6 w-6" />
                        }
                    />
                </Box>
            </div>
            <div className="flex">
                <div className="flex justify-center pt-0 p-16 w-8/12 mt-5">
                    <MembersTable />
                </div>
                <div className=" w-full xl:w-4/12 items-center my-10 p-4">
                    <Card className=" self-center h-96 mr-9 threespan ">
                        <MyResponsivePie data={chartData} />
                    </Card>
                </div>
            </div>
        </>
    )
};


const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Monitored",
        value: "monitored",
    },
    {
        label: "Unmonitored",
        value: "unmonitored",
    },
];

const TABLE_HEAD = ["Artisan", "District", "Craft", "Last Ordered", ""];

const TABLE_ROWS = [
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        name: "Sharanya Chaudhuri",
        email: "sharany@chaudhuri.com",
        job: "Srinagar",
        org: "HandiCrafts",
        online: true,
        date: "23/04/23",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Aarya Tiwari",
        email: "aarya@tiwari.com",
        job: "Jammu",
        org: "HandiLooms",
        online: false,
        date: "23/04/23",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        name: "Dhairya Satra",
        email: "dhairya@satra.com",
        job: "Katra",
        org: "Agriculture",
        online: false,
        date: "19/09/23",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        name: "Neil Carnac",
        email: "Neil@carnac.com",
        job: "POONCH",
        org: "Agriculture",
        online: true,
        date: "24/12/22",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Dhruv Sharma",
        email: "dhruv.sharma@gmail.com",
        job: "Srinagar",
        org: "HandiCrafts",
        online: false,
        date: "04/10/22",
    },
];

export function MembersTable() {
    return (
        <Card className=" pl-16 pr-16 pb-16 h-full w-full rounded-4xl">
            <CardBody className="overflow-scroll px-0">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-y bg-[#FFE5D6] p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(
                            ({ img, name, email, job, org, online, date }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Avatar src={img} alt={name} size="sm" />
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {name}
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70"
                                                    >
                                                        {email}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {job}
                                                </Typography>

                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {org}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {date}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="Edit User">
                                                <IconButton variant="text">
                                                    <InformationCircleIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
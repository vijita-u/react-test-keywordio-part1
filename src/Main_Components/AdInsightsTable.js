import * as React from "react";
import "./AdInsightsTable.scss";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { visuallyHidden } from "@mui/utils";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

{
	/* <HelpOutlineOutlinedIcon className="helpIcon" /> */
}

// Function to create data
function createData(campaigns, clicks, cost, conversions, revenue) {
	return { campaigns, clicks, cost, conversions, revenue };
}

const rows = [
	createData("Cosmetics", 712, 4272.0, 8, 145627.0),
	createData("Serums", 3961, 27331.0, 115, 145627.0),
	createData("Facewash", 9462, 76831.0, 123, 145627.0),
	createData("Shampoos", 439, 2151.0, 5, 145627.0),
	createData("Conditioners", 1680, 3864.0, 49, 145627.0),
	createData("Facewash 2", 4978, 29370.0, 189, 145627.0),
	createData("Total", 26510, 143819.0, 489, 145627.0),
];

const headCells = [
	{
		id: "campaigns",
		numeric: false,
		disablePadding: true,
		label: "Campaigns",
	},
	{
		id: "clicks",
		numeric: true,
		disablePadding: true,
		label: "Clicks",
	},
	{
		id: "cost",
		numeric: true,
		disablePadding: true,
		label: "Cost",
	},
	{
		id: "conversions",
		numeric: true,
		disablePadding: true,
		label: "Conversions",
	},
	{
		id: "revenue",
		numeric: true,
		disablePadding: true,
		label: "Revenue",
	},
];

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === "desc"
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
	const { order, orderBy, onRequestSort } = props;
	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? "right" : "left"}
						padding={headCell.disablePadding ? "none" : "normal"}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : "asc"}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								// sx={visuallyHidden}
								<Box component="span" sx={visuallyHidden}>
									{order === "desc" ? "sorted descending" : "sorted ascending"}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

EnhancedTableHead.propTypes = {
	onRequestSort: PropTypes.func.isRequired,
	order: PropTypes.oneOf(["asc", "desc"]).isRequired,
	orderBy: PropTypes.string.isRequired,
};

function EnhancedTableToolbar(props) {
	return (
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
			}}
		>
			<Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
				Nutrition
			</Typography>

			<Tooltip title="Help">
				<IconButton>
					<HelpOutlineOutlinedIcon className="helpIcon" />
				</IconButton>
			</Tooltip>
		</Toolbar>
	);
}

function AdInsightsTable() {
	const [order, setOrder] = React.useState("asc");
	const [orderBy, setOrderBy] = React.useState("clicks");
	const page = 0;
	const rowsPerPage = 7;

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const sortedRows = React.useMemo(
		() => stableSort(rows, getComparator(order, orderBy)).slice(page, rowsPerPage),
		[order, orderBy, page, rowsPerPage]
	);

	return (
		<Box sx={{ width: "100%" }}>
			<Paper sx={{ width: "100%", mb: 2 }}>
				<EnhancedTableToolbar />
				<TableContainer>
					<Table  aria-labelledby="tableTitle" size="medium">
						<EnhancedTableHead
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
							rowCount={rows.length}
						/>
						<TableBody>
							{sortedRows.map((row, index) => {
								const labelId = `enhanced-table-checkbox-${index}`;

								return (
									<TableRow
										hover
										tabIndex={-1}
										key={row.campaigns}
										sx={{ cursor: "pointer", pl: 2, pr: 2 }}
									>
										<TableCell component="th" id={labelId} scope="row" padding="none">
											{row.campaigns}
										</TableCell>
										<TableCell align="right">{row.clicks}</TableCell>
										<TableCell align="right">{row.cost}</TableCell>
										<TableCell align="right">{row.conversions}</TableCell>
										<TableCell align="right">{row.revenue}</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</Box>
	);
}

export default AdInsightsTable;

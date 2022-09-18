import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";

const CashbackTable = () => {
    const columns = [
        { id: 'intallment-number', label: 'Taksit No', minWidth: 70 },
        { id: 'installment-value', label: 'Taksit Tutarı', minWidth: 70 },
        {
            id: 'MainValue',
            label: 'Ana Para',
            minWidth: 50,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'remaining-main-value',
            label: 'Kalan Ana Para',
            minWidth: 70,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'profit-ratio',
            label: 'Kâr Oranı',
            minWidth: 50,
            align: 'right',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'kkdf',
            label: 'KKDF',
            minWidth: 30,
            align: 'right',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'bsmv',
            label: 'BSMV',
            minWidth: 30,
            align: 'right',
            format: (value) => value.toFixed(2),
        },
    ];
    function createData(name, code, population, size) {
        const density = population / size;
        return { name, code, population, size, density };
    }
    const rows = [
        createData('India', 'IN', 1324171354, 3287263),
        createData('China', 'CN', 1403500365, 9596961),
        createData('Italy', 'IT', 60483973, 301340),

    ];
        const [page, setPage] = React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(12);

        const handleChangePage = (event, newPage) => {
            setPage(newPage)
        };

        const handleChangeRowsPerPage = (event) => {
            setRowsPerPage(+event.target.value)
            setPage(0)
        };

    return (
        <div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={12}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                />
            </Paper>
        </div>
    );
};

export default CashbackTable;
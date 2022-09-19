import React, {useContext} from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";
import {InputContext} from "../contexts/InputContext";
import {CashbackTableContext} from "../contexts/CasbackTableContext";

const CashbackTable = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(12);
    const inputContext=useContext(InputContext);
    const cashbackTableContext=useContext(CashbackTableContext);
    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    };
    const calculatePeriodicPaymentAmount = () => {
        const p =inputContext.creditAmount;
        const i =(inputContext.profitRatio/100)+(inputContext.kkdfRatio/100)+(inputContext.bsmvRatio/100);
        const n =inputContext.installmentValue;
        const sonuc = p*((i*((1+i)**n)) / (( ((1+ i)**n) - 1)));
        return sonuc;
    }
    const calculateMainValue=()=>{
        var mainValue=
            calculatePeriodicPaymentAmount()-calculateProfit()-calculateKkdf()-calculateBsmv()
        return  mainValue;
    }
    const calculateKkdf = () => {
      var kkdf =inputContext.remainingMainValue*inputContext.kkdfRatio;
      return kkdf;
    }
    const calculateBsmv = () => {
        var bsmv=inputContext.remainingMainValue*inputContext.bsmvRatio;
        return bsmv;

    }
    const calculateProfit = () => {
      var profit =inputContext.remainingMainValue*inputContext.profitRatio
        return profit;
    }

    const calculateTableValues =()=>{
        const changeFirstRemainingMainValue = (creditAmount) => {
          inputContext.setRemainingMainValue(creditAmount)
        }
        for (var i=1 ;i<=inputContext.range;i++){
            var installmentNumber=i;
            var installmentValue=calculatePeriodicPaymentAmount();
            var mainValue=calculateMainValue();
            var remainingMainValue=inputContext.remainingMainValue-mainValue;
            var currentProfit =calculateProfit();
            var currentKkdf=calculateKkdf();
            var currentBsmv=calculateBsmv();
            inputContext.setRemainingMainValue(remainingMainValue=>inputContext.remainingMainValue)
        }
        return {installmentNumber,installmentValue,mainValue,remainingMainValue,currentProfit,currentKkdf,currentBsmv}
    }
    console.log(calculateTableValues());


    const columns = [
        { id: 'installment-number', label: 'Taksit No', minWidth: 70 },
        { id: 'installment-value', label: 'Taksit Tutarı', minWidth: 70 },
        {
            id: 'main-value',
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
            id: 'profit-amount',
            label: 'Kâr Tutarı',
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
                    rowsPerPageOptions={0}
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
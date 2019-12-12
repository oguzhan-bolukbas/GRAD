//KOD TAM DEĞİL

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import table2 from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AppbarProblems from "../components/appbarProblems";
import Fab from "@material-ui/core/Fab";
import ExposurePlus1Icon from "@material-ui/core/SvgIcon/SvgIcon";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ClearIcon from '@material-ui/icons/Clear';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
import LoopIcon from '@material-ui/icons/Loop';
import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    root2: {
        width: '70%',
    },
    paper: {
        width: '100%',
        overflowX: 'auto'
    },
    paper2: {
        width: '70%',
        overflowX: 'auto'
    },
    row: {
        display: "flex",
        marginTop: "5px",
        marginLeft: "10px",
        marginRight: "30px",
        alignItems: "center"
    },
    row2: {
        display: "flex",
        marginTop: "5px",
        marginLeft: "300px",
        marginRight: "20px",
        alignItems: "center"
    },
    row3: {
        display: "flex",
        marginTop: "5px",
        marginLeft: "10px",
        marginRight: "20px",
        alignItems: "center"
    },
    table: {
        minWidth: 70,
    },
    table2: {
        minWidth: 20,
    }
});

function createData(name, calories) {
    return { name, calories};
}

const rows = [
    createData(3, ""),
    createData(5, ""),
    createData(6, ""),
    createData(2, ""),
    createData(1, ""),
    createData(1, ""),
    createData(5, ""),
    createData(6, ""),
    createData(7, ""),
    createData(4, "")
];



function createData2(elma, armut, limon, kivi, cilek, muz, ananas, bogurtlen) {
    return { elma, armut, limon, kivi, cilek, muz, ananas, bogurtlen};
}

const rows2 = [
    createData2(1, 2, 3, 4, 5, 6 ,7,8)

];

export default function DenseTable() {
    const classes = useStyles();
    function start() {
        var i;
        for (i = 1; i < 11; i++) {
            var x = document.getElementById("table1").rows[i].cells;
            var txt = "";
            var k;
            for (k = 1; k < 9; k++) {
                var random = Math.random() * 2;
                var intvalue = Math.floor( random );
                txt = txt.concat("", intvalue);
                //x[1].style.backgroundColor = "red";
            }
            x[1].innerHTML = txt;
        }
        for (i = 1; i < 11; i++) {
            var x = document.getElementById("table2").rows[i].cells;
            var txt = "";
            x[1].innerHTML = txt;
        }
        for (i = 1; i < 11; i++) {
            var x = document.getElementById("table3").rows[i].cells;
            var txt = "";
            x[1].innerHTML = txt;
        }
        for (i = 1; i < 11; i++) {
            var x = document.getElementById("table4").rows[i].cells;
            var txt = "";
            x[1].innerHTML = txt;
        }
        for (i = 1; i < 11; i++) {
            var x = document.getElementById("table5").rows[i].cells;
            var txt = "";
            x[1].innerHTML = txt;
        }



    }
    function fitness() {
        var i;
        for (i = 1; i < 11; i++) {
            var j;
            var x = document.getElementById("table1").rows[i].cells;
            for (j = 0; j < 8; j++){

                var sum = 0;
                var k;


                sum = sum + document.getElementById("table6").rows2[1].cells.item(j).innerHTML;
               // x[1].style.backgroundColor = "red";



            }
            x[0].innerHTML = sum;
        }
    }
    function selection(){
        var i;
        var sum = [0,0,0,0,0,0,0,0,0,0];
        var array = ["","","","","","","","","",""];
        var x = document.getElementById("table1").rows[1].cells;
        sum[0] = x[0].innerHTML;
        array[0] = x[1].innerHTML;
        for (i = 1; i < 10; i++) {
            var x = document.getElementById("table1").rows[i+1].cells;
            sum[i] = parseInt(sum[i-1],10) + parseInt(x[0].innerHTML,10);
            array[i] = x[1].innerHTML
        }
        for (i = 1; i < 11; i++) {
            var x = document.getElementById("table1").rows[i].cells;
            var y = document.getElementById("table2").rows[i].cells;
            var random = Math.random() * 40;
            var intvalue = Math.floor( random );
            var txt = x[1].innerHTML;
            sum = sum + x[0].innerHTML;
           // x[1].style.backgroundColor = "red";
            if(intvalue < sum[0]){
                x[1].style.backgroundColor = "red";
                y[1].innerHTML = array[0];
            }
            else if(intvalue < sum[1]){
                x[1].style.backgroundColor = "red";
                y[1].innerHTML = array[1];
            }
            else if(intvalue < sum[2]){
                x[1].style.backgroundColor = "red";
                y[1].innerHTML = array[2];
            }
            else if(intvalue < sum[3]){
                x[1].style.backgroundColor = "red";
                y[1].innerHTML = array[3];
            }
            else if(intvalue < sum[4]){
                x[1].style.backgroundColor = "red";
                y[1].innerHTML = array[4];
            }
            else if(intvalue < sum[5]){
                x[1].style.backgroundColor = "red";
                y[1].innerHTML = array[5];
            }
            else if(intvalue < sum[6]){
                x[1].style.backgroundColor = "red";
                y[1].innerHTML = array[6];;
            }
            else if(intvalue < sum[7]){
                x[1].style.backgroundColor = "red";
                y[1].innerHTML = array[7];
            }
            else if(intvalue < sum[8]){
                x[1].style.backgroundColor = "red";
                y[1].innerHTML = array[8];
            }
            else if(intvalue <= sum[9]){
                x[1].style.backgroundColor = "red";
                y[1].innerHTML = array[9];
            }

           //var x = document.getElementById("table1").rows[i].cells;
          //var y = document.getElementById("table2").rows[i].cells;

          // var txt = sum[i-1];

          // y[1].innerHTML = txt;
        }

    }
    function crossover(){
        var i;
        for (i = 1; i < 11; i++) {
            var x = document.getElementById("table2").rows[i].cells;
            var y = document.getElementById("table3").rows[i].cells;

            var txt = x[1].innerHTML;

            y[1].innerHTML = txt;
        }

    }
    function mutation(){
        var i;
        for (i = 1; i < 11; i++) {
            var x = document.getElementById("table3").rows[i].cells;
            var y = document.getElementById("table4").rows[i].cells;

            var txt = x[1].innerHTML;

            y[1].innerHTML = txt;
        }

    }

    function repair(){
        var i;
        for (i = 1; i < 11; i++) {
            var x = document.getElementById("table4").rows[i].cells;
            var y = document.getElementById("table5").rows[i].cells;

            var txt = x[1].innerHTML;

            y[1].innerHTML = txt;
        }

    }

    return (
        <div className="home">
            <AppbarProblems />

        <div className={classes.root}>
            <div className={classes.row3}>
            <div className={classes.row3}>
            <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => start()} >

                <PlayArrowIcon />
            </Fab>
            </div>
                <div className={classes.row3}>
            <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => selection()} >
                Seç
            </Fab>
                </div>
                    <div className={classes.row3}>
            <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => crossover()} >
                <ClearIcon />
            </Fab>
                    </div>
                        <div className={classes.row3}>
            <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => mutation()} >
                < LoopIcon />
            </Fab>
                        </div>
                            <div className={classes.row3}>
            <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => repair()} >
                < BuildIcon />
            </Fab>
            </div>
            </div>
                <div className={classes.row}>
                <div className={classes.row}>
                    <Paper className={classes.paper} >
                       <div  align="center" >

                        <Typography  color="secondary"  gutterBottom variant="h7" component="h7"  >
                            Başlangıç
                        </Typography>
                       </div>
                <Table id="table1" className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Uyumluluk</TableCell>
                            <TableCell align="right">Kromozom</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row" >
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.calories}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                    </Paper>
                </div >
                <div className={classes.row}>
                    <Paper className={classes.paper} id="paper2">
                        <div  align="center" >

                            <Typography  color="secondary"  gutterBottom variant="h7" component="h7"  >
                                Seçilenler
                            </Typography>
                        </div>
                    <Table id="table2" className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Uyumluluk</TableCell>
                                <TableCell align="right">Kromozom</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row" >
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    </Paper>
                </div >
                <div className={classes.row}>

                    <Paper className={classes.paper}>
                    <Table id="table3" className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Uyumluluk</TableCell>
                                <TableCell align="right">Kromozom</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row" >
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                </div >
                    <div className={classes.row}>

                        <Paper className={classes.paper}>
                            <Table id="table4" className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Uyumluluk</TableCell>
                                        <TableCell align="right">Kromozom</TableCell>


                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map(row => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row" >
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </div >
                    <div className={classes.row}>

                        <Paper className={classes.paper}>
                            <Table id="table5" className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Uyumluluk</TableCell>
                                        <TableCell align="right">Kromozom</TableCell>


                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map(row => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row" >
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </div >
                </div >



        </div>
            <div className={classes.row2}>
                <paper2 className={classes.paper2} id="paper2">
                    <table2 id="table6" className={classes.table2} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Elma</TableCell>
                                <TableCell align="right">Armut</TableCell>
                                <TableCell align="right">Limon</TableCell>
                                <TableCell align="right">Kivi</TableCell>
                                <TableCell align="right">Çilek</TableCell>
                                <TableCell align="right">Muz</TableCell>
                                <TableCell align="right">Ananas</TableCell>
                                <TableCell align="right">Böğürtlen</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows2.map(row => (
                                <TableRow key={row.name} >
                                    <TableCell component="th" scope="row">
                                        {row.elma}
                                    </TableCell>
                                    <TableCell align="right">{row.armut}</TableCell>
                                    <TableCell align="right">{row.limon}</TableCell>
                                    <TableCell align="right">{row.kivi}</TableCell>
                                    <TableCell align="right">{row.cilek}</TableCell>
                                    <TableCell align="right">{row.muz}</TableCell>
                                    <TableCell align="right">{row.ananas}</TableCell>
                                    <TableCell align="right">{row.bogurtlen}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </table2>
                </paper2>
            </div >
        </div>
    );
}
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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Slider from '@material-ui/core/Slider';

import Button from '@material-ui/core/Button';

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
        width: '75%',
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
        marginRight: "2px",
        alignItems: "center"
    },
    table: {
        minWidth: 70,
    },
    table2: {
        minWidth: 20,
    }
});
const useStyles1 = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        marginRight: "2px",
        marginLeft: "10px",
        minWidth: 130,
    },
    formControl2: {
        margin: theme.spacing(1),
        marginRight: "2px",
        marginLeft: "25px",
        minWidth: 250,
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        marginLeft: "30px",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        width: 300,
    },
    margin: {
        height: theme.spacing(3),
    }
}));
const speed = [
    {
        value: 0,
        label: 'Manuel',
    },
    {
        value: 25,
        label: 'x5',
    },
    {
        value: 50,
        label: '20',
    },
    {
        value: 75,
        label: '50',
    },
    {
        value: 100,
        label: 'x100',
    },
];
function createData(name, calories) {
    return { name, calories};
}
function valuetext(value) {
    return `${value}`;
}

function valueLabelFormat(value) {
    return speed.findIndex(speed => speed.value === value) + 1;
}
const rows = [
    createData(0, ""),
    createData(0, ""),
    createData(0, ""),
    createData(0, ""),
    createData(0, ""),
    createData(0, ""),
    createData(0, ""),
    createData(0, ""),
    createData(0, ""),
    createData(0, "")
];



function createData2(name,elma, armut, limon, kivi, cilek, muz, ananas, bogurtlen) {
    return { name,elma, armut, limon, kivi, cilek, muz, ananas, bogurtlen};
}

const rows2 = [
    createData2('Değerler',1, 2, 3, 4, 5, 6 ,7,8),
    createData2('Ağırlıklar',1, 2, 3, 4, 5, 6 ,7,8)

];

export default function DenseTable() {

    const [bestFitness, setBestFitness] = React.useState('');
    const classes = useStyles();
    const classes2 = useStyles1();
    const [mprob, setMprob] = React.useState('');
    const [cprob, setCprob] = React.useState('');
    const [cpoint, setCpoint] = React.useState('');
    const [timervalue, setTimervalue] = React.useState('');

    const handleChange = event => {
        setMprob(event.target.value);
    };
    const handleChangeCross = event => {
        setCprob(event.target.value);
    };
    const handleChangeCrossPoint = event => {
        setCpoint(event.target.value);
    };
    const handleChangeTimer = event => {
        setTimervalue(event.target.value);
    };

    function start() {
        var i;
        window.endValue = 0;
        window.bestvalue = 0;
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
            x[1].style.backgroundColor = "white";
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

        for (i = 1; i < 11; i++) {
            var y = document.getElementById("table5").rows[i].cells;
            var a = document.getElementById("table2").rows[i].cells;
            var b = document.getElementById("table3").rows[i].cells;
            var c = document.getElementById("table4").rows[i].cells;

            y[1].innerHTML = "";
            a[1].innerHTML = "";
            b[1].innerHTML = "";
            c[1].innerHTML = "";

            y[0].innerHTML = 0;
            a[0].innerHTML = 0;
            b[0].innerHTML = 0;
            c[0].innerHTML = 0;

            a[1].style.backgroundColor = "white";
            a[0].style.backgroundColor = "white";
            b[1].style.backgroundColor = "white";
            b[0].style.backgroundColor = "white";


        }
        if(timervalue == 2){
            setTimeout(selection, 20000);

        }
        else if(timervalue == 3){
            setTimeout(selection, 10000);


        }
        else if(timervalue == 4){
            setTimeout(selection, 5000);

        }
        else if(timervalue == 5){
            setTimeout(selection, 2000);

        }
        else if(timervalue == 6){
            selection();

        }
    }
    function fitness0() {
        setBestFitness(0);
        window.bestvalue = 0;
        var best = 0;
        var i;
        for (i = 1; i < 11; i++) {
            var j;
            var sum = 0;
            var x = document.getElementById("table1").rows[i].cells;
            var k = x[1].innerHTML;


            if(k.charAt(0) === "1"){
                sum = sum + 1;
            }
            if(k.charAt(1) === "1"){
                sum = sum + 2;
            }
            if(k.charAt(2) === "1"){
                sum = sum + 3;
            }
            if(k.charAt(3) === "1"){
                sum = sum + 4;
            }
            if(k.charAt(4) === "1"){
                sum = sum + 5;
            }
            if(k.charAt(5) === "1"){
                sum = sum + 6;
            }
            if(k.charAt(6) === "1"){
                sum = sum + 7;
            }
            if(k.charAt(7) === "1"){
                sum = sum + 8;
            }

            x[0].innerHTML = sum;
            if (best < sum){
                best = sum  ;
            }

        }
        window.bestvalue = best;
        setBestFitness(best)  ;

    }
//selection
    function fitness2(newarray) {
        var best = 0;
        var i;
        for (i = 1; i < 11; i++) {
            var j;
            var sum = 0;
            var x = document.getElementById("table2").rows[i].cells;
            var k = newarray[i];


            if(k.charAt(0) === "1"){
                sum = sum + 1;
            }
            if(k.charAt(1) === "1"){
                sum = sum + 2;
            }
            if(k.charAt(2) === "1"){
                sum = sum + 3;
            }
            if(k.charAt(3) === "1"){
                sum = sum + 4;
            }
            if(k.charAt(4) === "1"){
                sum = sum + 5;
            }
            if(k.charAt(5) === "1"){
                sum = sum + 6;
            }
            if(k.charAt(6) === "1"){
                sum = sum + 7;
            }
            if(k.charAt(7) === "1"){
                sum = sum + 8;
            }


            x[0].innerHTML = sum;
            if (best < sum){
                best = sum  ;
            }
        }
        if (bestFitness < best){
            setBestFitness(best)  ;
        }
        if(window.bestvalue < best){
            window.bestvalue = best;
        }
    }
//next generation
    function fitness4(newarray) {
        var best = 0;
        var i;
        for (i = 1; i < 11; i++) {
            var j;
            var sum = 0;
            var x = document.getElementById("table1").rows[i].cells;
            var k = newarray[i];


            if(k.charAt(0) === "1"){
                sum = sum + 1;
            }
            if(k.charAt(1) === "1"){
                sum = sum + 2;
            }
            if(k.charAt(2) === "1"){
                sum = sum + 3;
            }
            if(k.charAt(3) === "1"){
                sum = sum + 4;
            }
            if(k.charAt(4) === "1"){
                sum = sum + 5;
            }
            if(k.charAt(5) === "1"){
                sum = sum + 6;
            }
            if(k.charAt(6) === "1"){
                sum = sum + 7;
            }
            if(k.charAt(7) === "1"){
                sum = sum + 8;
            }


            x[0].innerHTML = sum;
            if (best < sum){
                best = sum  ;
            }
        }
        if (bestFitness < best){
            setBestFitness(best)  ;
        }
        if(window.bestvalue < best){
            window.bestvalue = best;
        }
    }
    //repair
    function fitness5(newarray) {
        var best = bestFitness;
        var i;
        for (i = 1; i < 11; i++) {
            var j;
            var sum = 0;
            var x = document.getElementById("table5").rows[i].cells;
            var k = newarray[i];


            if(k.charAt(0) === "1"){
                sum = sum + 1;
            }
            if(k.charAt(1) === "1"){
                sum = sum + 2;
            }
            if(k.charAt(2) === "1"){
                sum = sum + 3;
            }
            if(k.charAt(3) === "1"){
                sum = sum + 4;
            }
            if(k.charAt(4) === "1"){
                sum = sum + 5;
            }
            if(k.charAt(5) === "1"){
                sum = sum + 6;
            }
            if(k.charAt(6) === "1"){
                sum = sum + 7;
            }
            if(k.charAt(7) === "1"){
                sum = sum + 8;
            }


            x[0].innerHTML = sum;
            if (best < sum){
                best = sum  ;
            }
        }
        if (bestFitness < best){
            setBestFitness(best)  ;
        }
        if(window.bestvalue < best){
            window.bestvalue = best;
        }
    }
    //cross
    function fitness6(newarray) {
        var best = bestFitness;
        var i;
        for (i = 1; i < 11; i++) {
            var j;
            var sum = 0;
            var x = document.getElementById("table3").rows[i].cells;
            var k = newarray[i];


            if(k.charAt(0) === "1"){
                sum = sum + 1;
            }
            if(k.charAt(1) === "1"){
                sum = sum + 2;
            }
            if(k.charAt(2) === "1"){
                sum = sum + 3;
            }
            if(k.charAt(3) === "1"){
                sum = sum + 4;
            }
            if(k.charAt(4) === "1"){
                sum = sum + 5;
            }
            if(k.charAt(5) === "1"){
                sum = sum + 6;
            }
            if(k.charAt(6) === "1"){
                sum = sum + 7;
            }
            if(k.charAt(7) === "1"){
                sum = sum + 8;
            }


            x[0].innerHTML = sum;
            if (best < sum){
                best = sum  ;
            }
        }

    }
    //mutation
    function fitness7(newarray) {
        var best = bestFitness;
        var i;
        for (i = 1; i < 11; i++) {
            var j;
            var sum = 0;
            var x = document.getElementById("table4").rows[i].cells;
            var k = newarray[i];


            if(k.charAt(0) === "1"){
                sum = sum + 1;
            }
            if(k.charAt(1) === "1"){
                sum = sum + 2;
            }
            if(k.charAt(2) === "1"){
                sum = sum + 3;
            }
            if(k.charAt(3) === "1"){
                sum = sum + 4;
            }
            if(k.charAt(4) === "1"){
                sum = sum + 5;
            }
            if(k.charAt(5) === "1"){
                sum = sum + 6;
            }
            if(k.charAt(6) === "1"){
                sum = sum + 7;
            }
            if(k.charAt(7) === "1"){
                sum = sum + 8;
            }


            x[0].innerHTML = sum;
            if (best < sum){
                best = sum  ;
            }
        }
    }
    var nurarray = ["","","","","","","","","","",""];
    function selection(){
        var i,j;
        var sum = [0,0,0,0,0,0,0,0,0,0];
        var array = ["","","","","","","","","",""];
        var array2 = ["","","","","","","","","",""];

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
            var random = Math.random() * sum[9];
            var intvalue = Math.floor( random );
            // x[1].style.backgroundColor = "red";
            if(intvalue < sum[0]){
                y[1].innerHTML = array[0];
                array2[i]= array[0];
            }
            else if(intvalue < sum[1]){
                y[1].innerHTML = array[1];
                array2[i]= array[1];
            }
            else if(intvalue < sum[2]){
                y[1].innerHTML = array[2];
                array2[i]= array[2];
            }
            else if(intvalue < sum[3]){
                y[1].innerHTML = array[3];
                array2[i]= array[3];
            }
            else if(intvalue < sum[4]){
                y[1].innerHTML = array[4];
                array2[i]= array[4];
            }
            else if(intvalue < sum[5]){
                y[1].innerHTML = array[5];
                array2[i]= array[5];
            }
            else if(intvalue < sum[6]){
                y[1].innerHTML = array[6];
                array2[i]= array[6];
            }
            else if(intvalue < sum[7]){
                y[1].innerHTML = array[7];
                array2[i]= array[7];
            }
            else if(intvalue < sum[8]){

                y[1].innerHTML = array[8];
                array2[i]= array[8];
            }
            else if(intvalue <= sum[9]){

                y[1].innerHTML = array[9];
                array2[i]= array[9];
            }

            if(i<3){
                y[1].style.backgroundColor = "#FCF3CF";
            }
            else if(i<5){
                y[1].style.backgroundColor = "#E8DAEF";
            }
            else if(i<7){
                y[1].style.backgroundColor = "#D1F2EB";
            }
            else if (i<9){
                y[1].style.backgroundColor = "#D6DBDF";
            }
            else{
                y[1].style.backgroundColor = "#F2D7D5";
            }

        }

        for (i = 1; i < 11; i++) {
            var x = document.getElementById("table1").rows[i].cells;
            for (j = 1; j < 11; j++) {
                var y = document.getElementById("table2").rows[j].cells;
                if(x[1].innerHTML === y[1].innerHTML){
                    x[1].style.backgroundColor = "#85C1E9";
                }

            }
        }
        fitness2(array2);
        if(timervalue == 2){
            setTimeout(crossover, 20000);
        }
        else if(timervalue == 3){
            setTimeout(crossover, 10000);
        }
        else if(timervalue == 4){
            setTimeout(crossover, 5000);
        }
        else if(timervalue == 5){
            setTimeout(crossover, 2000);
        }
        else if(timervalue == 6){
            crossover();
        }
    }
    function crossover(){
        var i,x,cvalue,substr1,substr2,substr3,substr4;
        var array = ["","","","","","","","","",""];
        var newarray = ["","","","","","","","","",""];
        var newarray2 = ["","","","","","","","","",""];
        window.nurarray3 = ["","","","","","","","","","",""];
        cvalue = Math.abs(8-cpoint);
        for (i = 1; i < 11; i++) {
            var y = document.getElementById("table2").rows[i].cells;
            array[i] = y[1].innerHTML

        }

        for (x = 0; x < 5; x++) {
            var random = Math.random() * 10;
            var intvalue = Math.floor( random );
            if(intvalue < cprob){
                substr1 = array[2*x+1].substr(0, (array[2*x+1].length-cvalue));
                substr2 = array[2*x+1].substr((array[2*x+1].length-cvalue), array[2*x+1].length);
                substr3 = array[2*x+2].substr(0, (array[2*x+2].length-cvalue));
                substr4 = array[2*x+2].substr((array[2*x+2].length-cvalue), array[2*x+2].length);
                newarray[2*x+1] = substr1.concat(substr4);
                newarray[2*x+2] = substr3.concat(substr2);
                window.nurarray3[2*x+1] = substr1.concat(substr4);
                window.nurarray3[2*x+2] = substr3.concat(substr2);
                newarray2[2*x+1] = substr1.concat(substr4.fontcolor("red"));
                newarray2[2*x+2] = substr3.concat(substr2.fontcolor("red"));
            }
            else{
                newarray[2*x+1] = array[2*x+1]
                newarray[2*x+2] = array[2*x+2]
                window.nurarray3[2*x+1] = array[2*x+1]
                window.nurarray3[2*x+2] = array[2*x+2]
                newarray2[2*x+1] = array[2*x+1]
                newarray2[2*x+2] = array[2*x+2]
            }

        }

        for (i = 1; i < 11; i++) {
            var y = document.getElementById("table3").rows[i].cells;
            y[1].innerHTML = newarray2[i];
            if(i<3){
                y[1].style.backgroundColor = "#FCF3CF";
            }
            else if(i<5){
                y[1].style.backgroundColor = "#E8DAEF";
            }
            else if(i<7){
                y[1].style.backgroundColor = "#D1F2EB";
            }
            else if (i<9){
                y[1].style.backgroundColor = "#D6DBDF";
            }
            else{
                y[1].style.backgroundColor = "#F2D7D5";
            }
        }


        fitness6(newarray);
        if(timervalue == 2){
            setTimeout(mutation, 20000);
        }
        else if(timervalue == 3){
            setTimeout(mutation, 10000);
        }
        else if(timervalue == 4){
            setTimeout(mutation, 5000);
        }
        else if(timervalue == 5){
            setTimeout(mutation, 2000);
        }
        else if(timervalue == 6){
            mutation();
        }

    }

    function mutation(){
        var txt="";
        var i,k,cvalue,substr1,substr2,substr3,substr4,str1,str2,str3,str4,str5,str6,str7,str8;
        var newarray = ["","","","","","","","","","",""];
        var newarray2 = ["","","","","","","","","",""];
        var array2 = ["","","","","","","",""];
        window.nurarray2 = ["","","","","","","","","","",""];

        for (i = 1; i < 11; i++) {
            var y = document.getElementById("table4").rows[i].cells;
            var txt2 = "";
            var nur = window.nurarray3[i];
            var res = nur.split("");
            for (k = 1; k < 9; k++) {

                var random = Math.random() * 10;
                var intvalue = Math.floor( random );
                if( res[k-1] == 1){
                    txt = "0";
                }
                else{
                    txt = "1";
                }

                if(intvalue < mprob){
                    txt2 = txt2.concat(txt);

                }
                else{
                    txt2 = txt2.concat(res[k-1]);
                }

            }

            newarray[i] = txt2;
            window.nurarray2[i] = txt2;
            var nur2 = txt2;
            var res2 = nur2.split("");
            for (k = 0; k < 8; k++) {
                if (res2[k] === res[k]){
                    array2[k]= "1";
                }
                else{
                    array2[k]= "0";

                }
            }

            if(array2[0] === "0"){
                str1 =  res2[0].fontcolor("blue");
            }
            else{
                str1 =  res2[0]
            }
            if(array2[1] === "0"){
                str2 =  res2[1].fontcolor("blue");
            }
            else{
                str2 =  res2[1]
            }
            if(array2[2] === "0"){
                str3 =  res2[2].fontcolor("blue");
            }
            else{
                str3 =  res2[2]
            }
            if(array2[3] === "0"){
                str4 =  res2[3].fontcolor("blue");
            }
            else{
                str4 =  res2[3]
            }
            if(array2[4] === "0"){
                str5 = res2[4].fontcolor("blue");
            }
            else{
                str5 =  res2[4]
            }
            if(array2[5] === "0"){
                str6 =  res2[5].fontcolor("blue");
            }
            else{
                str6 =  res2[5]
            }
            if(array2[6] === "0"){
                str7 =  res2[6].fontcolor("blue");
            }
            else{
                str7 =  res2[6]
            }
            if(array2[7] === "0"){
                str8 =  res2[7].fontcolor("blue");
            }
            else{
                str8 =  res2[7]
            }

            newarray2[i] = str1.concat(str2,str3,str4,str5,str6,str7,str8);
            y[1].innerHTML = newarray2[i];

            //y[1].innerHTML = window.nurarray3[i];




        }
        fitness7(window.nurarray2);
        if(timervalue == 2){

            setTimeout(repair, 20000);
        }
        else if(timervalue == 3){
            setTimeout(repair, 10000);
        }
        else if(timervalue == 4){
            setTimeout(repair, 5000);
        }
        else if(timervalue == 5){
            setTimeout(repair, 2000);
        }
        else if(timervalue == 6){
            repair();
        }
    }
    function repair(){
        var i;
        var array2 = ["","","","","","","",""];
        for (i = 1; i < 11; i++) {
            var x = document.getElementById("table4").rows[i].cells;
            var y = document.getElementById("table5").rows[i].cells;

            var txt = x[1].innerHTML;
            array2[i] = window.nurarray2[i];
            y[1].innerHTML = window.nurarray2[i] ;
        }
        fitness5(array2);
        if(timervalue == 2){
            setTimeout(nextgeneration, 20000);
        }
        else if(timervalue == 3){
            setTimeout(nextgeneration, 10000);
        }
        else if(timervalue == 4){
            setTimeout(nextgeneration, 5000);
        }
        else if(timervalue == 5){
            setTimeout(nextgeneration, 2000);
        }
        else if(timervalue == 6){
            nextgeneration();
        }
    }
    function nextgeneration(){
        if(window.endValue != 20) {
            var i;
            var array5= [];
            for (i = 1; i < 11; i++) {
                var x = document.getElementById("table5").rows[i].cells;
                var y = document.getElementById("table1").rows[i].cells;
                var a = document.getElementById("table2").rows[i].cells;
                var b = document.getElementById("table3").rows[i].cells;
                var c = document.getElementById("table4").rows[i].cells;


                var txt = x[1].innerHTML;
                array5[i] = txt;

                y[1].innerHTML = txt;
                x[1].innerHTML = "";
                a[1].innerHTML = "";
                b[1].innerHTML = "";
                c[1].innerHTML = "";

                x[0].innerHTML = 0;
                a[0].innerHTML = 0;
                b[0].innerHTML = 0;
                c[0].innerHTML = 0;

                y[1].style.backgroundColor = "white";
                a[1].style.backgroundColor = "white";
                a[0].style.backgroundColor = "white";
                b[1].style.backgroundColor = "white";
                b[0].style.backgroundColor = "white";
            }

            fitness4(array5);
            if (timervalue == 2) {
                window.endValue = window.endValue + 1;
                setTimeout(selection, 20000);

            } else if (timervalue == 3) {
                window.endValue = window.endValue + 1;
                setTimeout(selection, 10000);
            } else if (timervalue == 4) {
                window.endValue = window.endValue + 1;
                setTimeout(selection, 5000);
            } else if (timervalue == 5) {
                window.endValue = window.endValue + 1;
                setTimeout(selection, 2000);
            } else if (timervalue == 6) {
                window.endValue = window.endValue + 1;
                selection();
            }
        }

    }


    return (
        <div className="home">
            <AppbarProblems />

            <div className={classes.root}>
                <div className={classes.row3}>

                    <div className={classes.row3}>
                        <div id="nur" className={classes.row3} >
                            <Button id="deneme" variant="contained" color="secondary" onClick={() => {start(); fitness0()} }>
                                Başlangıç
                            </Button>
                        </div>
                    </div>
                    {/*//------------------------------*/}
                    <div className={classes.row3}>
                        <FormControl id="mutationprob" className={classes2.formControl} error>
                            <FormHelperText>Mutasyon Olasılığı</FormHelperText>

                            <Select
                                labelId="mutationprob"
                                id="mutationprob"
                                value={mprob}
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>0,1</MenuItem>
                                <MenuItem value={2}>0,2</MenuItem>
                                <MenuItem value={3}>0,3</MenuItem>
                                <MenuItem value={4}>0,4</MenuItem>
                                <MenuItem value={5}>0,5</MenuItem>
                                <MenuItem value={6}>0,6</MenuItem>
                                <MenuItem value={7}>0,7</MenuItem>
                                <MenuItem value={8}>0,8</MenuItem>
                                <MenuItem value={9}>0,9</MenuItem>
                            </Select>

                        </FormControl>


                        <FormControl className={classes2.formControl} error>
                            <FormHelperText>Çaprazlama Olasılığı</FormHelperText>
                            <Select
                                labelId="crossprob"
                                id="crossprob"
                                value={cprob}
                                onChange={handleChangeCross}
                            >

                                <MenuItem value={1}>0,1</MenuItem>
                                <MenuItem value={2}>0,2</MenuItem>
                                <MenuItem value={3}>0,3</MenuItem>
                                <MenuItem value={4}>0,4</MenuItem>
                                <MenuItem value={5}>0,5</MenuItem>
                                <MenuItem value={6}>0,6</MenuItem>
                                <MenuItem value={7}>0,7</MenuItem>
                                <MenuItem value={8}>0,8</MenuItem>
                                <MenuItem value={9}>0,9</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl className={classes2.formControl} error>

                            <FormHelperText>Çaprazlama Noktası</FormHelperText>
                            <Select
                                labelId="crosspoint"
                                id="crosspoint"
                                value={cpoint}
                                onChange={handleChangeCrossPoint}
                            >

                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                            </Select>

                        </FormControl>

                        <FormControl className={classes2.formControl} error>

                            <FormHelperText>Zamanlayıcı</FormHelperText>
                            <Select
                                labelId="timer"
                                id="timer"
                                value={timervalue}
                                onChange={handleChangeTimer}
                            >

                                <MenuItem value={1}>Manuel</MenuItem>
                                <MenuItem value={2}>20 Saniye</MenuItem>
                                <MenuItem value={3}>10 Saniye</MenuItem>
                                <MenuItem value={4}>5 Saniye</MenuItem>
                                <MenuItem value={5}>2 Saniye</MenuItem>
                                <MenuItem value={6}>Otomatik</MenuItem>
                            </Select>

                        </FormControl>
                        <div className={classes.root} >
                            <Typography  color="secondary"  gutterBottom variant="h7" component="h7"  >
                                En Yüksek Değer
                            </Typography>
                            <Avatar className={classes2.orange}>{window.bestvalue}</Avatar>
                        </div>



                    </div>
                </div>
                {/*----------------------------*/}
                <div id="please" className={classes.row3} >

                    <div className={classes.row3}>
                        <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {selection()}} >
                            Seç
                        </Fab>
                    </div>
                    <div className={classes.row3}>
                        <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {crossover()}} >
                            <ClearIcon />
                        </Fab>
                    </div>
                    <div className={classes.row3}>
                        <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {mutation()}} >
                            < LoopIcon />
                        </Fab>
                    </div>
                    <div className={classes.row3}>
                        <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {repair()}} >
                            < BuildIcon />
                        </Fab>
                    </div>
                    <div className={classes.row3}>
                        <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {nextgeneration()}} >

                            <PlayArrowIcon />
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
                                            <TableCell align="left">{row.calories} </TableCell>
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
                            <div  align="center" >

                                <Typography  color="secondary"  gutterBottom variant="h7" component="h7"  >
                                    Çaprazlamadan Sonra
                                </Typography>
                            </div>
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
                            <div  align="center" >

                                <Typography  color="secondary"  gutterBottom variant="h7" component="h7"  >
                                    Mutasyondan Sonra
                                </Typography>
                            </div>
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
                            <div  align="center" >

                                <Typography  color="secondary"  gutterBottom variant="h7" component="h7"  >
                                    Tamirden Sonra
                                </Typography>
                            </div>
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
                                <TableCell></TableCell>
                                <TableCell align="right">Elma</TableCell>
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
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.elma}</TableCell>
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
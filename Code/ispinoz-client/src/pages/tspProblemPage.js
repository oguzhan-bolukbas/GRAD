
import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import table2 from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AppbarProblems from "../components/appbarProblems";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ClearIcon from '@material-ui/icons/Clear';
import LoopIcon from '@material-ui/icons/Loop';
import BuildIcon from '@material-ui/icons/Build';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange} from '@material-ui/core/colors';
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
        width: '80%',
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
const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: "#00bcd5",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);
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
    createData("-", ""),
    createData("-", ""),
    createData("-", ""),
    createData("-", ""),
    createData("-", ""),
    createData("-", ""),
    createData("-", ""),
    createData("-", ""),
    createData("-", ""),
    createData("-", "")
];



function createData2(name, rize, bursa, ankara, tokat, manisa, agri, sivas, hakkari) {
    return { name,rize, bursa, ankara, tokat, manisa, agri, sivas, hakkari};
}

const rows2 = [
    createData2('Rize',0, 7, 5, 6, 5, 4 ,3,5),
    createData2('Bursa',7, 0, 3, 6, 5, 8 ,7,9),
    createData2('Ankara',5, 3, 0, 3, 5, 7 ,4,6),
    createData2('Tokat',6, 6, 3, 0, 4, 5 ,7,1),
    createData2('Manisa',5, 5, 5, 4, 0, 6 ,3,4),
    createData2('Ağrı',4, 8, 7, 5, 6, 0 ,3,2),
    createData2('Sivas',3, 7, 4, 7, 3, 3 ,0,5),
    createData2('Hakkari',5, 9, 6, 1, 4, 2 ,5,0)
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
        window.bestvalue2 = 99;
        window.bestpath2 = "";
        window.endValue = 0;
        window.mesafearray= [[0,7,5,6,5,4,3,5],[7,0,3,6,5,8,7,9],[5,3,0,3,5,7,4,6],[6,6,3,0,4,5,7,1],[5,5,5,4,0,6,3,4],
            [4,8,7,5,6,0,3,2],[3,7,4,7,3,3,0,5],[5,9,6,1,4,2,5,0]]
        var array1 = [];
        for (i = 1; i < 11; i++) {
            var startarray = [];
            var x = document.getElementById("table1").rows[i].cells;
            var txt = "";
            var k;
            for (k = 1; k < 9; k++) {
                var random = Math.random() * 8;
                var intvalue = Math.floor( random );
                intvalue = intvalue+1;

                //x[1].style.backgroundColor = "red";
                while (startarray.includes(intvalue)) {
                    var random = Math.random() * 8;
                    var intvalue = Math.floor( random );
                    intvalue = intvalue+1;
                }
                txt = txt.concat("", intvalue);
                startarray[k] = intvalue;
                }
            array1[i] = txt;
            x[1].innerHTML = txt;
            x[1].style.backgroundColor = "white";
        }
        fitness(array1,1);
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

            y[0].innerHTML = "-";
            a[0].innerHTML = "-";


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
            setTimeout(selection, 500);
        }
        else if(timervalue == 6){
            selection();
        }
    }
    function fitness(tablearray, tablevalue)  {
            setBestFitness(0);
            var best = 100;
            var i,n,path;
            for (i = 1; i < 11; i++) {
                var j;
                var sum = 0;
                if(tablevalue === 1){
                    var x = document.getElementById("table1").rows[i].cells;
                }
                else  if(tablevalue === 2){
                    var x = document.getElementById("table2").rows[i].cells;
                }
                else  if(tablevalue === 3){
                    var x = document.getElementById("table3").rows[i].cells;
                }
                else  if(tablevalue === 4){
                    var x = document.getElementById("table4").rows[i].cells;
                }
                else  if(tablevalue === 5){
                    var x = document.getElementById("table5").rows[i].cells;
                }

                var k = tablearray[i];


                for (n = 0; n < 7; n++) {
                    var nur = k;
                    var res = nur.split("");
                    var index1 = res.indexOf((n+1).toString());
                    var index2 = res.indexOf((n+2).toString());
                    sum = sum + window.mesafearray[index1][index2];
                }
                index1 = res.indexOf("8");
                index2 = res.indexOf("1");
                sum = sum + window.mesafearray[index1][index2];


                x[0].innerHTML = sum;
                if (best > sum){
                    best = sum  ;
                    path = k;
                }
            }

            setBestFitness(best)  ;
        if(window.bestvalue2 > best){
            window.bestvalue2 = best;
            window.bestpath2 = path;
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
        fitness(array2,2);
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
            setTimeout(crossover, 500);
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
            var random = Math.random() * 100;
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


       // fitness(newarray,3);
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
            setTimeout(mutation, 500);
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
            var random = Math.random() * 100;
            var intvalue = Math.floor( random );
           if(intvalue < mprob) {
                var random1 = Math.random() *8 ;
                var intvalue1 = Math.floor( random1 );
                var random2 = Math.random() *8 ;
                var intvalue2 = Math.floor( random2 );
                var a,b;
                if(intvalue1 > intvalue2){
                    var val = intvalue2;
                    intvalue2 = intvalue1;
                    intvalue1 = val;
                    a = res[intvalue1];
                    b = res[intvalue2];
                    txt2 =  nur.substring(0, intvalue1);
                    txt2 = txt2.concat(b);
                    var deneme =  nur.substring(intvalue1+1, intvalue2);
                    txt2 = txt2.concat(deneme);
                    txt2 = txt2.concat(a);
                    deneme =  nur.substring(intvalue2+1, nur.length);
                    txt2 = txt2.concat(deneme);
                }
                else if(intvalue1 < intvalue2){
                    a = res[intvalue1];
                    b = res[intvalue2];
                    txt2 =  nur.substring(0, intvalue1);
                    txt2 = txt2.concat(b);
                    var deneme =  nur.substring(intvalue1+1, intvalue2);
                    txt2 = txt2.concat(deneme);
                    txt2 = txt2.concat(a);
                    deneme =  nur.substring(intvalue2+1, nur.length);
                    txt2 = txt2.concat(deneme);
                }
                else{
                    txt2 = window.nurarray3[i]
                }

            }
               else{
               txt2 = window.nurarray3[i]
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
                str1 =  res2[0].fontcolor("red");
            }
            else{
                str1 =  res2[0]
            }
            if(array2[1] === "0"){
                str2 =  res2[1].fontcolor("red");
            }
            else{
                str2 =  res2[1]
            }
            if(array2[2] === "0"){
                str3 =  res2[2].fontcolor("red");
            }
            else{
                str3 =  res2[2]
            }
            if(array2[3] === "0"){
                str4 =  res2[3].fontcolor("red");
            }
            else{
                str4 =  res2[3]
            }
            if(array2[4] === "0"){
                str5 = res2[4].fontcolor("red");
            }
            else{
                str5 =  res2[4]
            }
            if(array2[5] === "0"){
                str6 =  res2[5].fontcolor("red");
            }
            else{
                str6 =  res2[5]
            }
            if(array2[6] === "0"){
                str7 =  res2[6].fontcolor("red");
            }
            else{
                str7 =  res2[6]
            }
            if(array2[7] === "0"){
                str8 =  res2[7].fontcolor("red");
            }
            else{
                str8 =  res2[7]
            }

            newarray2[i] = str1.concat(str2,str3,str4,str5,str6,str7,str8);
            y[1].innerHTML = newarray2[i];
            //y[1].innerHTML = res2;





        }
        //fitness(window.nurarray2,3);
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
            setTimeout(repair, 500);
        }
        else if(timervalue == 6){
            repair();
        }
    }
    function repair(){
        var i,m,n;
        var i,str1,str2,str3,str4,str5,str6,str7,str8;
        var newarray = ["","","","","","","","","","",""];
        var newarray2 = ["","","","","","","","","",""];
        window.nurarray7 = ["","","","","","","","","","",""];
        for (i = 1; i < 11; i++) {
            var array2 = ["0","0","0","0","0","0","0","0","0"];
            var array3 = ["0","0","0","0","0","0","0","0","0"];
            //var x = document.getElementById("table1").rows[i].cells;

            var y = document.getElementById("table5").rows[i].cells;

            var k = window.nurarray2[i];


                if(k.indexOf("1") !== -1){
                    array2[1] = "1";
                    var num = 1;
                    array3[1] = k.split(num.toString()).length-1
                }
                if(k.indexOf("2") !== -1){
                    array2[2] = "1";
                    var num = 2;
                    array3[2] = k.split(num.toString()).length-1
                }
                if(k.indexOf("3") !== -1){
                    array2[3] = "1";
                    var num = 3;
                    array3[3] = k.split(num.toString()).length-1
                }
                if(k.indexOf("4") !== -1){
                    array2[4] = "1";
                    var num = 4;
                    array3[4] = k.split(num.toString()).length-1
                }
                if(k.indexOf("5") !== -1){
                    array2[5] = "1";
                    var num = 5;
                    array3[5] = k.split(num.toString()).length-1
                }
                if(k.indexOf("6") !== -1){
                    array2[6] = "1";
                    var num = 6;
                    array3[6] = k.split(num.toString()).length-1
                }
                if(k.indexOf("7") !== -1){
                    array2[7] = "1";
                    var num = 7;
                    array3[7] = k.split(num.toString()).length-1
                }
                if(k.indexOf("8") !== -1){
                    array2[8] = "1";
                    var num = 8;
                    array3[8] = k.split(num.toString()).length-1
                }
                var txt2;
                var ple = k;
            for (m = 1; m < 9; m++){
                if(array2[m] === "0"){
                    var random = Math.random() * 8;
                    var intvalue = Math.floor( random );
                    intvalue = intvalue+1;
                   var please =1;
                    while(please){
                        if( parseInt(array3[intvalue] ) > 1){
                            array3[intvalue] = array3[intvalue] -1;
                            please = 0;
                        }
                        else{
                            var random = Math.random() * 8;
                            var intvalue = Math.floor( random );
                            intvalue = intvalue+1;

                        }
                    }


                    var txt2 =  ple.substring(0, ple.indexOf(intvalue) );
                    var cal = m;
                    txt2 = txt2.concat(cal);
                    var txt3 = ple.substring(ple.indexOf(intvalue) +1,ple.length);
                    txt2 = txt2.concat(txt3);



                    ple =txt2;
                    array2[m] = "1";
                    array3[m] = 1;
                }

            }

            window.nurarray7[i] = ple;
            var nur = window.nurarray2[i];
            var res = nur.split("");
            var nur2 = window.nurarray7[i];
            var res2 = nur2.split("");
            for (k = 0; k < 8; k++) {
                if (res2[k] === res[k]){
                    newarray[k]= "1";
                }
                else{
                    newarray[k]= "0";

                }
            }

            if(newarray[0] === "0"){
                str1 =  res2[0].fontcolor("red");
            }
            else{
                str1 =  res2[0]
            }
            if(newarray[1] === "0"){
                str2 =  res2[1].fontcolor("red");
            }
            else{
                str2 =  res2[1]
            }
            if(newarray[2] === "0"){
                str3 =  res2[2].fontcolor("red");
            }
            else{
                str3 =  res2[2]
            }
            if(newarray[3] === "0"){
                str4 =  res2[3].fontcolor("red");
            }
            else{
                str4 =  res2[3]
            }
            if(newarray[4] === "0"){
                str5 = res2[4].fontcolor("red");
            }
            else{
                str5 =  res2[4]
            }
            if(newarray[5] === "0"){
                str6 =  res2[5].fontcolor("red");
            }
            else{
                str6 =  res2[5]
            }
            if(newarray[6] === "0"){
                str7 =  res2[6].fontcolor("red");
            }
            else{
                str7 =  res2[6]
            }
            if(newarray[7] === "0"){
                str8 =  res2[7].fontcolor("red");
            }
            else{
                str8 =  res2[7]
            }

            newarray2[i] = str1.concat(str2,str3,str4,str5,str6,str7,str8);
            y[1].innerHTML = newarray2[i];






        }


        fitness(window.nurarray7,5);
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
            setTimeout(nextgeneration, 500);
        }
        else if(timervalue == 6){
            nextgeneration();
        }
    }
    function nextgeneration() {
        if (window.endValue != 20) {
            var i;
            var array5 = [];
            for (i = 1; i < 11; i++) {
                var x = document.getElementById("table5").rows[i].cells;
                var y = document.getElementById("table1").rows[i].cells;
                var a = document.getElementById("table2").rows[i].cells;
                var b = document.getElementById("table3").rows[i].cells;
                var c = document.getElementById("table4").rows[i].cells;



               array5[i] = window.nurarray7[i];

                y[1].innerHTML = window.nurarray7[i];
                x[1].innerHTML = "";
                a[1].innerHTML = "";
                b[1].innerHTML = "";
                c[1].innerHTML = "";

                x[0].innerHTML = 0;
                a[0].innerHTML = 0;


                y[1].style.backgroundColor = "white";
                a[1].style.backgroundColor = "white";
                a[0].style.backgroundColor = "white";
                b[1].style.backgroundColor = "white";
                b[0].style.backgroundColor = "white";
            }


           fitness(array5, 1)
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
                setTimeout(selection, 500);
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
                            <Button id="deneme" variant="contained" color="secondary" onClick={() => {start()} }>
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
                                <MenuItem value={5}>0,05</MenuItem>
                                <MenuItem value={10}>0,1</MenuItem>
                                <MenuItem value={15}>0,15</MenuItem>
                                <MenuItem value={20}>0,2</MenuItem>
                                <MenuItem value={25}>0,25</MenuItem>
                                <MenuItem value={30}>0,3</MenuItem>
                                <MenuItem value={35}>0,35</MenuItem>
                                <MenuItem value={40}>0,4</MenuItem>
                                <MenuItem value={45}>0,45</MenuItem>
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

                                <MenuItem value={5}>0,05</MenuItem>
                                <MenuItem value={10}>0,1</MenuItem>
                                <MenuItem value={15}>0,15</MenuItem>
                                <MenuItem value={20}>0,2</MenuItem>
                                <MenuItem value={25}>0,25</MenuItem>
                                <MenuItem value={30}>0,3</MenuItem>
                                <MenuItem value={35}>0,35</MenuItem>
                                <MenuItem value={40}>0,4</MenuItem>
                                <MenuItem value={45}>0,45</MenuItem>
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
                                <MenuItem value={1}>Tıkla-Çalıştır</MenuItem>
                                <MenuItem value={2}>20 Saniye</MenuItem>
                                <MenuItem value={3}>10 Saniye</MenuItem>
                                <MenuItem value={4}>5 Saniye</MenuItem>
                                <MenuItem value={5}>2 Saniye</MenuItem>
                                <MenuItem value={6}>Başla-Bitir</MenuItem>
                            </Select>
                        </FormControl>
                        <div className={classes.root} >
                            <Typography  color="secondary"  gutterBottom variant="h7" component="h7"  >
                                En Kısa Yol
                            </Typography>
                            <Avatar className={classes2.orange}>{window.bestvalue2}</Avatar>
                        </div>
                        <div className={classes.row3}>
                            <div id="nur" className={classes.row3} >
                                <Typography  color="secondary"  gutterBottom variant="h4" component="h4"  >
                                    {window.bestpath2}
                                </Typography>
                            </div>
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
                                <StyledTableCell  align="right"></StyledTableCell>
                                <StyledTableCell  align="right">Rize</StyledTableCell>
                                <StyledTableCell  align="right">Bursa</StyledTableCell>
                                <StyledTableCell  align="right">Ankara</StyledTableCell>
                                <StyledTableCell  align="right">Tokat</StyledTableCell>
                                <StyledTableCell  align="right">Manisa</StyledTableCell>
                                <StyledTableCell  align="right">Ağrı</StyledTableCell>
                                <StyledTableCell  align="right">Sivas</StyledTableCell>
                                <StyledTableCell  align="right">Hakkari</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows2.map(row => (
                                <TableRow key={row.name} >
                                    <StyledTableCell  component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell  align="right">{row.rize}</StyledTableCell>
                                    <StyledTableCell  align="right">{row.bursa}</StyledTableCell>
                                    <StyledTableCell  align="right">{row.ankara}</StyledTableCell>
                                    <StyledTableCell  align="right">{row.tokat}</StyledTableCell>
                                    <StyledTableCell  align="right">{row.manisa}</StyledTableCell>
                                    <StyledTableCell  align="right">{row.agri}</StyledTableCell>
                                    <StyledTableCell  align="right">{row.sivas}</StyledTableCell>
                                    <StyledTableCell  align="right">{row.hakkari}</StyledTableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </table2>
                </paper2>
            </div >
        </div>
    );
}
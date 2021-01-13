"use strict"

            document.addEventListener("DOMContentLoaded", function(event) {
                console.log("DOM fully loaded and parsed");

                let button0 = document.getElementById('but0');
                let button1 = document.getElementById('but1');
                let button2 = document.getElementById('but2');
                let button3 = document.getElementById('but3');
                let button4 = document.getElementById('but4');
                let button5 = document.getElementById('but5');
                let button6 = document.getElementById('but6');
                let button7 = document.getElementById('but7');
                let button8 = document.getElementById('but8');
                let button9 = document.getElementById('but9');
                let plus = document.getElementById('plus');
                let minus = document.getElementById('minus');
                let star = document.getElementById('star');
                let slash = document.getElementById('slash');
                let equals = document.getElementById('equals');
                let curvalue = document.getElementById('calc-result-current-value');
                let back = document.getElementById('back');
                let c = document.getElementById('c');
                let comma = document.getElementById('comma');

                button0.addEventListener("click",
                function(event){
                    console.log("clicked 0");
                    if (document.getElementById('calc-result-current-value').innerHTML != 0) {
                        document.getElementById('calc-result-current-value').innerHTML = document.getElementById('calc-result-current-value').innerHTML + "0";
                    }
                });

                button1.addEventListener("click",
                function(event){
                    console.log("clicked 1");
                    if (document.getElementById('calc-result-current-value').innerHTML != 0) {
                        document.getElementById('calc-result-current-value').innerHTML = document.getElementById('calc-result-current-value').innerHTML + "1";
                    }
                    else {
                        document.getElementById('calc-result-current-value').innerHTML = 1;
                    }
                });

                button2.addEventListener("click",
                function(event){
                    console.log("clicked 2");
                    if (document.getElementById('calc-result-current-value').innerHTML != 0) {
                        document.getElementById('calc-result-current-value').innerHTML = document.getElementById('calc-result-current-value').innerHTML + "2";
                    }
                    else {
                        document.getElementById('calc-result-current-value').innerHTML = 2;
                    }
                });


                button3.addEventListener("click",
                function(event){
                    console.log("clicked 3");
                    if (document.getElementById('calc-result-current-value').innerHTML != 0) {
                        document.getElementById('calc-result-current-value').innerHTML = document.getElementById('calc-result-current-value').innerHTML + "3";
                    }
                    else {
                        document.getElementById('calc-result-current-value').innerHTML = 3;
                    }
                });

                button4.addEventListener("click",
                function(event){
                    console.log("clicked 4");
                    if (document.getElementById('calc-result-current-value').innerHTML != 0) {
                        document.getElementById('calc-result-current-value').innerHTML = document.getElementById('calc-result-current-value').innerHTML + "4";
                    }
                    else {
                        document.getElementById('calc-result-current-value').innerHTML = 4;
                    }
                });

                button5.addEventListener("click",
                function(event){
                    console.log("clicked 5");
                    if (document.getElementById('calc-result-current-value').innerHTML != 0) {
                        document.getElementById('calc-result-current-value').innerHTML = document.getElementById('calc-result-current-value').innerHTML + "5";
                    }
                    else {
                        document.getElementById('calc-result-current-value').innerHTML = 5;
                    }
                });

                button6.addEventListener("click",
                function(event){
                    console.log("clicked 6");
                    if (document.getElementById('calc-result-current-value').innerHTML != 0) {
                        document.getElementById('calc-result-current-value').innerHTML = document.getElementById('calc-result-current-value').innerHTML + "6";
                    }
                    else {
                        document.getElementById('calc-result-current-value').innerHTML = 6;
                    }
                });

                button7.addEventListener("click",
                function(event){
                    console.log("clicked 7");
                    if (document.getElementById('calc-result-current-value').innerHTML != 0) {
                        document.getElementById('calc-result-current-value').innerHTML = document.getElementById('calc-result-current-value').innerHTML + "7";
                    }
                    else {
                        document.getElementById('calc-result-current-value').innerHTML = 7;
                    }
                });

                button8.addEventListener("click",
                function(event){
                    console.log("clicked 8");
                    if (document.getElementById('calc-result-current-value').innerHTML != 0) {
                        document.getElementById('calc-result-current-value').innerHTML = document.getElementById('calc-result-current-value').innerHTML + "8";
                    }
                    else {
                        document.getElementById('calc-result-current-value').innerHTML = 8;
                    }
                });

                button9.addEventListener("click",
                function(event){
                    console.log("clicked 9");
                    if (document.getElementById('calc-result-current-value').innerHTML != 0) {
                        document.getElementById('calc-result-current-value').innerHTML = document.getElementById('calc-result-current-value').innerHTML + "9";
                    }
                    else {
                        document.getElementById('calc-result-current-value').innerHTML = 9;
                    }
                });

                slash.addEventListener("click",
                function(event){
                    console.log("clicked slash");
                        document.getElementById('calc-result-current-value').innerHTML = document.getElementById('calc-result-current-value').innerHTML + " / ";
                });

                star.addEventListener("click",
                function(event){
                    console.log("clicked star");
                        document.getElementById('calc-result-current-value').innerHTML = document.getElementById('calc-result-current-value').innerHTML + " * ";
                });

                plus.addEventListener("click",
                function(event){
                    console.log("clicked plus");
                        document.getElementById('calc-result-current-value').innerHTML = document.getElementById('calc-result-current-value').innerHTML + " + ";
                });

                minus.addEventListener("click",
                function(event){
                    console.log("clicked minus");
                        document.getElementById('calc-result-current-value').innerHTML = document.getElementById('calc-result-current-value').innerHTML + " - ";
                });

                comma.addEventListener("click",
                function(event){
                    console.log("clicked comma");
                        document.getElementById('calc-result-current-value').innerHTML = document.getElementById('calc-result-current-value').innerHTML + ".";
                });

                back.addEventListener("click",
                function(event){
                    console.log("clicked back")
                    if (document.getElementById('calc-result-current-value').innerHTML.length == 1) {
                        document.getElementById('calc-result-current-value').innerHTML = 0;
                    }
                    else {
                        document.getElementById('calc-result-current-value').innerHTML = document.getElementById('calc-result-current-value').innerHTML.slice(0, -1);
                    }
                });

                equals.addEventListener("click",
                function(event){
                    console.log("clicked equals");
                        document.getElementById('calc-result-current-value').innerHTML = eval(document.getElementById('calc-result-current-value').innerHTML);
                        document.getElementById('calc-result-previous-value').innerHTML =  document.getElementById('calc-result-current-value').innerHTML;
                });
                c.addEventListener("click",
                function(event){
                    console.log("clicked equals");
                        document.getElementById('calc-result-current-value').innerHTML = 0;
                });
            })

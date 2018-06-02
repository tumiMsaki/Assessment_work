window.onload = function createTable(change) {
    var table = document.createElement("table");
    table.border = "0";
    table.className = "table";
    var tr, td;
    for (var i = 0; i < 6; i++) {
        //循环插入元素
        tr = table.insertRow(table.rows.length);
        for (var j = 0; j < 7; j++) {
            td = tr.insertCell(tr.cells.length);
            td.align = "center";
        }
    }
    document.querySelector("#tb").appendChild(table);




    var time = document.querySelector(".Date");
    var time2 = document.querySelector(".Date2");
    var date = new Date;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    month = (month < 10 ? "0" + month : month);
    var mydate = (year.toString());
    var mydate2 = (month.toString());
    time.innerHTML = mydate;
    time2.innerHTML = mydate2;
    var days = mGetDate(year, month);
    var week = mGetDate2(year, month)
    inner(year, month, day, week, days);




    var pre = document.querySelector(".pre");
    var next = document.querySelector(".next");
    var pre2 = document.querySelector(".pre2");
    var next2 = document.querySelector(".next2");
    var monthvalue2 = document.querySelector(".Date2")
    var monthvalue = document.querySelector(".Date")
    monthvalue.addEventListener('mouseover', function() {
        var scrollFunc = function(e) {
            e = e || window.event;
            if (e.wheelDelta == 120) {
                year--;
                console.log(month);
                var mydate = (year.toString());
                var mydate2 = (month.toString());
                time.innerHTML = mydate;
                time2.innerHTML = mydate2;
                days = mGetDate(year, month);
                week = mGetDate2(year, month);
                inner(year, month, day, week, days);

            } else {
                year++;
                var mydate = (year.toString());
                var mydate2 = (month.toString());
                time.innerHTML = mydate;
                time2.innerHTML = mydate2;
                days = mGetDate(year, month);
                week = mGetDate2(year, month);
                inner(year, month, day, week, days);
            }
        };

        window.onmousewheel = scrollFunc;
    })
    monthvalue2.addEventListener('mouseover', function() {
        var scrollFunc = function(e) {
            e = e || window.event;
            if (e.wheelDelta == 120) {
                month--;
                if (month < 1) {
                    year--;
                    month = 12;
                }
                month = (month < 10 ? "0" + month : month);
                var mydate = (year.toString());
                var mydate2 = (month.toString());
                time.innerHTML = mydate;
                time2.innerHTML = mydate2;
                days = mGetDate(year, month);
                week = mGetDate2(year, month);
                inner(year, month, day, week, days);

            } else {
                month++;
                if (month > 12) {
                    year++;
                    month = 1;
                }
                month = (month < 10 ? "0" + month : month);
                var mydate = (year.toString());
                var mydate2 = (month.toString());
                time.innerHTML = mydate;
                time2.innerHTML = mydate2;
                days = mGetDate(year, month);
                week = mGetDate2(year, month);
                inner(year, month, day, week, days);
            }
        };

        window.onmousewheel = scrollFunc;
    })


    pre.addEventListener('click', function() {
        year--;
        console.log(month);
        var mydate = (year.toString());
        var mydate2 = (month.toString());
        time.innerHTML = mydate;
        time2.innerHTML = mydate2;
        days = mGetDate(year, month);
        week = mGetDate2(year, month);
        inner(year, month, day, week, days);
    })
    next.addEventListener('click', function() {
        year++;
        var mydate = (year.toString());
        var mydate2 = (month.toString());
        time.innerHTML = mydate;
        time2.innerHTML = mydate2;
        days = mGetDate(year, month);
        week = mGetDate2(year, month);
        inner(year, month, day, week, days);
    })
    pre2.addEventListener('click', function() {
        month--;
        if (month < 1) {
            year--;
            month = 12;
        }
        month = (month < 10 ? "0" + month : month);
        var mydate = (year.toString());
        var mydate2 = (month.toString());
        time.innerHTML = mydate;
        time2.innerHTML = mydate2;
        days = mGetDate(year, month);
        week = mGetDate2(year, month);
        inner(year, month, day, week, days);
    })
    next2.addEventListener('click', function() {
        month++;
        if (month > 12) {
            year++;
            month = 1;
        }
        month = (month < 10 ? "0" + month : month);
        var mydate = (year.toString());
        var mydate2 = (month.toString());
        time.innerHTML = mydate;
        time2.innerHTML = mydate2;
        days = mGetDate(year, month);
        week = mGetDate2(year, month);
        inner(year, month, day, week, days);
    })
}



function mGetDate(year, month) {
    var d = new Date(year, month, 0);
    return d.getDate();
}

function mGetDate2(year, month) {
    var d = new Date(year + "-" + month + "-" + 01);
    console.log(d);
    console.log(d.getDay());
    return d.getDay();
}




function inner(year, month, day, week, days) {
    let table = document.querySelector(".table");
    let daysum = document.querySelectorAll(".table td");
    let date = new Date;
    let year1 = date.getFullYear();
    let month1 = date.getMonth() + 1;
    let day1 = date.getDate();
    for (let i = 0; i < 40; i++) {
        daysum.item(i).innerHTML = "";
    }
    for (let i = 0; i < days; i++) {
        daysum.item(i + week).innerHTML = i + 1;
    }

    if (year == year1 && month == month1) {
        daysum.item(day + week - 1).classList.add("color");
    } else {
        if (document.querySelector(".color")) {
            document.querySelector(".color").classList.remove("color");
        }
    }
}
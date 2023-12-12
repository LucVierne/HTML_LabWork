function calculate() {
    const name = document.getElementById("inname").value;
    const surname = document.getElementById("insurname").value;
    const code = document.getElementById("incode").value;
    const m1 = parseInt(document.getElementById("inm1").value);
    const m2 = parseInt(document.getElementById("inm2").value);
    const m3 = parseInt(document.getElementById("inm3").value);
    const m4 = parseInt(document.getElementById("inm4").value);
    const m5 = parseInt(document.getElementById("inm5").value);

    const everage = (m1+m2+m3+m4+m5)/5;

    if (m1<=4) {
        document.getElementById("inm1").style.background = "red";
    } else if (m1<=8) {
        document.getElementById("inm1").style.background = "orange";
    } else {
        document.getElementById("inm1").style.background = "green";
    }

    if (m2<=4) {
        document.getElementById("inm2").style.background = "red";
    } else if (m2<=8) {
        document.getElementById("inm2").style.background = "orange";
    } else {
        document.getElementById("inm2").style.background = "green";
    }

    if (m3<=4) {
        document.getElementById("inm3").style.background = "red";
    } else if (m3<=8) {
        document.getElementById("inm3").style.background = "orange";
    } else {
        document.getElementById("inm3").style.background = "green";
    }

    if (m4<=4) {
        document.getElementById("inm4").style.background = "red";
    } else if (m4<=8) {
        document.getElementById("inm4").style.background = "orange";
    } else {
        document.getElementById("inm4").style.background = "green";
    }

    if (51<=4) {
        document.getElementById("inm5").style.background = "red";
    } else if (m1<=8) {
        document.getElementById("inm5").style.background = "orange";
    } else {
        document.getElementById("inm5").style.background = "green";
    }

    document.getElementById("name").innerHTML = "Name: "+name;
    document.getElementById("surname").innerHTML = "Surname: "+surname;
    document.getElementById("code").innerHTML = "Student code: "+code;
    document.getElementById("marks").innerHTML = "Marks: "+m1+", "+m2+", "+m3+", "+m4+", "+m5;
    document.getElementById("everage").innerHTML = "Everage: "+everage;
  }
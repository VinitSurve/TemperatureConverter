function celcius()
{
    var a = (f1.t1.value)
    // Celcius to Fahrenheit
    b = a*9/5+32;
    f1.t2.value=+b
    //.Celcius to Kelvin
    c =+a+273.15;
    f1.t3.value=+c;
}

function fahrenheit()
{
    var d = f1.t4.value;
    // Fahrenheit to Celcius
    e = [(d-32)*5]/9
    f1.t5.value=+e;
    // Fahrenheit to Kelvin
    f = (d-32)*5/9+273.15;
    f1.t6.value=+f;
}

function kelvin()
{
    var g = f1.t7.value;
    // Kelvin 6o Celcius
     h = g-273.15;
     f1.t8.value=+h;
    // Kelvin to Fahrenheit
     i = 1.8*(g-273.15)+32;
     f1.t9.value=+i;

}
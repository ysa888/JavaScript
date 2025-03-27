<h1 id="num1"></h1>
<h1 id="num2"></h1>
<h1 id="num3"></h1>
<script>
    var x = 5;
    var y = 6;
    var z = x + y;
    console.log(x)
    console.log(y)
    console.log(z)
    document.getElementById("num1").textContent = x
    document.getElementById("num2").textContent = y
    document.getElementById("num3").textContent = `${x} + ${y} = ${z}`  
<!--setinterval-->
<p id="time1" style="color: blueviolet;"></p>
<script>
    function mytime(){
        var a = new Date();
        var b = a.toLocaleTimeString();
        var c = a.toLocaleDateString();
        document.getElementById("time1").innerHTML = c+"&nbsp"+b;
        }
    setInterval(function() {mytime()},1000);
</script>

---------------------

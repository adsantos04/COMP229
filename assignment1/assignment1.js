function createTable()
    {
        var table = document.getElementById("table");
        var rows = document.getElementById("rows").value;
        var cols = document.getElementById("columns").value;

        table.innerHTML = " ";

        for (var a = 1; a <= rows; a++)
        {
            var row = table.insertRow();
            for (var b = 1; b <= cols; b++)
            {
                var cell = row.insertCell();
                cell.innerHTML = a + "," + b;
            }
        }
    }

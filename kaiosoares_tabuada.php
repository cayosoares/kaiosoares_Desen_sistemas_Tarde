<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabuada</title>
    <style type = "text/css">
        table {
            border-collapse: collapse;
        }
        th, td {
            border-style: solid;
            width: 50px;
        }
    </style>
</head>
<body>
    <table>
    <?php
       for ($l=1; $l<=10;$l++)
       {
           echo "<tr>";
           for ($c=1; $c<=10; $c++)
           {
               ($total = $l * $c);
               echo "<td> $l x $c = $total </td>";
           }
           echo "<tr/>";
       }
    ?>
    </table>
    <h1> Kaio Eduardo Soares Fragoso </h1>
</body>
</html>
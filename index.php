<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>test</title>
    <script type="text/javascript">
    var imgUrl = "<?= $_GET['url'] ?>";
    window.parent.callback(imgUrl);
    </script>
</head>
<body>
<?= $_GET['url'] ?>
</body>
</html>

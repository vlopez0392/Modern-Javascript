<h2>Video 5: Running JS in the browser</h2>

---

<p align = "justify">
<strong>Emmet:</strong> We may use Emmet (installed by default on VSCode) to create a boiler-plate for an HTML file. We can also use Emmet to auto-complete any tags we are writing.
</p>

<p align = "justify">
We may write JavaScipt directly on an HTML file using the &lt;script> tag. Typically however, we won't write HTML in the browser since it is bad practice (This is called inline JS). What is good practice? We must write JS in a separate file with .js extension. We can do so by using the &lt;script> tag but with a src attribute with the path of our JS file. This is shown below:
</p>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Running JS</title>
</head>
<body>
    <h1>Hello World!</h1>

    <script src = "script.js"></script>
</body>
</html>
```
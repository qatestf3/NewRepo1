Certainly! Here's a simple example of HTML and JavaScript code to create a basic login page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            width: 300px;
            margin: 100px auto;
        }
        input[type="text"],
        input[type="password"],
        input[type="submit"] {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            display: inline-block;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }
        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>Login</h2>
    <form id="loginForm">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <input type="submit" value="Login">
    </form>
</div>

<script>
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve username and password from form
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Perform validation (e.g., against a database or hardcoded credentials)
        if (username === "user" && password === "password") {
            alert("Login successful!");
            // Redirect to another page or perform other actions after successful login
        } else {
            alert("Invalid username or password. Please try again.");
            // Clear the password field for security
            document.getElementById("password").value = "";
        }
    });
</script>

</body>
</html>
```

This code creates a basic login page with a username and password field, along with a submit button. JavaScript is used to handle the form submission, validate the credentials, and display appropriate messages.
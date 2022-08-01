var html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/style.css" />
    <title>My Team</title>
  </head>

  <body>
    <nav class="navbar navbar-light bg-info">
      <span class="navbar-brand mb-0 h1"><h1 style="margin-left:530px;">My Team</h1></span>
    </nav>
    <section class="container-fluid">
      <div class="row" style= "margin-left:5%;">
      ${htmlTemplate}
      </div>
    </section>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="./assets/js/script.js"></script>
  </body>
</html>`
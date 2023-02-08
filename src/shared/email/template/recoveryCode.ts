const recoveryTemplate = (name: string, code:string) => {
    return `
    <!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Simple Responsive HTML Email With Button</title>
    <link rel="stylesheet" href="https://use.typekit.net/kvc0otd.css">

  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
  <style>
@media only screen and (max-width: 620px) {
  table[class=body] h1 {
    font-size: 28px !important;
    margin-bottom: 10px !important;
  }

  table[class=body] p,
table[class=body] ul,
table[class=body] ol,
table[class=body] td,
table[class=body] span,
table[class=body] a {
    font-size: 16px !important;
  }

  table[class=body] .wrapper,
table[class=body] .article {
    padding: 10px !important;
  }

  table[class=body] .content {
    padding: 0 !important;
  }

  table[class=body] .container {
    padding: 0 !important;
    width: 100% !important;
  }

  table[class=body] .main {
    border-left-width: 0 !important;
    border-radius: 0 !important;
    border-right-width: 0 !important;
  }

  table[class=body] .btn table {
    width: 100% !important;
  }

  table[class=body] .btn a {
    width: 100% !important;
  }

  table[class=body] .img-responsive {
    height: auto !important;
    max-width: 100% !important;
    width: auto !important;
  }
}
@media all {
  .ExternalClass {
    width: 100%;
  }

  .ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
    line-height: 100%;
  }

  .apple-link a {
    color: inherit !important;
    font-family: inherit !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    text-decoration: none !important;
  }
}
</style></head>
  <body class style="background-color: #F9F9F9; font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; background-color: #eaebed; width: 100%;" width="100%" bgcolor="#eaebed">
      <tr>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
        <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 500px; padding: 10px; width: 500px; Margin: 0 auto;" width="500" valign="top">
          <div class="header" style="padding: 20px 0;">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%;">
              <tr>
                <td class="align-center" width="100%" style="font-family: sans-serif; font-size: 14px; vertical-align: top; text-align: center;" valign="top" align="center">
              
                </td>
              </tr>
            </table>
          </div>
          <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">

            <!-- START CENTERED WHITE CONTAINER -->
            <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Recebemos uma solicitação de alteração de senha, aqui está o código para redefinição.</span>
            <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%; box-shadow: 0px 8px 20px rgba(167, 173, 188, 0.2);" width="100%">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 0px;" valign="top">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%;background: #ffffff; border-radius: 16px; " width="100%">
                    <tr class="presentatio-header" style="background: #009FFA;"><td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding: 0 2rem; border-radius: 16px 16px 0 0;" valign="top">
                    <br>
                      <h1 style="font-family: museo-sans, sans-serif; color: #ffffff;">Agendoctor</h1>
                        
                  <br>
                  <br>
                      <h2 style="font-family: sans-serif; font-weight: 400; line-height: 1.4; margin: 0; margin-bottom: 30px; color: #ffffff;">Esqueci minha senha</h2>
                      </td></tr>
                    <tr>
                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                            <br>
                            <br>

                          <h1 style="font-family: sans-serif; line-height: 1.4; margin: 0; margin-bottom: 30px; font-weight: 300; text-transform: capitalize; text-align: left; margin-left: 2rem; color: #009FFA; font-size: 1.8rem;">
                          Olá ${name}.
                          </h1>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px; color: #49575E; padding: 0 2rem;">
                            <br>                            
                            Recebemos uma solicitação para redefinir sua senha do Agendoctor.
                            <br>
                            <br>
                            <br>
                            <br>
                            Utilize o código de redefinição a seguir:
                            <br>
                            <br>
                            <br>
                            <br>
                        </p>
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; box-sizing: border-box; width: 100%;" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;" valign="top">
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: auto; width: auto;">
                                  <tbody>
                                    <tr>
                                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; background-color: #ffffff; border-radius: 5px; text-align: center; display: flex;" valign="top" bgcolor="#ffffff" align="center"> 
                                        ${[...code].map((char) => {
                                            return "<div style=\"margin: 0.3rem;height: 60px;width: 60px;text-align: center; border: 1px solid #E4E4E4; border-radius: 0.5rem; color: #192B34; font-weight: 600;font-size: 2rem;display: flex;flex-direction: column;justify-content: center;\">"
                                              +char+
                                            "</div>"
                                        }).join('')}  
                                         </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>

                            <tr><td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;" valign="top">
                            <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px; color: #49575E; padding: 0 2rem;">
                              <br>

                              Para acessar a plataforma <a href="http://www.agendoctor.com" style="color: #009FFA;">clique aqui</a>
                          </p>
                          </td></tr>
                              <tr><td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;" valign="top">
                                  <p style="font-family: sans-serif; font-weight: normal; margin: 0; margin-bottom: 15px; padding: 0 2rem; color: #9FABAF; font-size: 0.8rem; text-align: left;">
                                      <br>
                                      Caso não tenha sido você, ignore este e-mail. Mas fique tranquilo, a sua conta está segura conosco.</p>    
                              </td></tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            <!-- END MAIN CONTENT AREA -->
            </table>

            <!-- START FOOTER -->
            <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
              <br>
              <br>
            </div>
            <!-- END FOOTER -->

          <!-- END CENTERED WHITE CONTAINER -->
          </div>
        </td>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
      </tr>
    </table>
  </body>
</html>
    `;
}
export default recoveryTemplate;
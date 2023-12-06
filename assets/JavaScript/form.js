$(document).ready(function () {
    $("#myform").validate({
      rules: {
        firstname: "required",
        lastname: "required",
        email: {
          required: true,
          email: true
        },
        phone: {
            required: true
          },
        password: {
          required: true,
          minlength: 10
        },
        confirm_password: {
          required: true,
          minlength: 10,
          equalTo: "#password"
        },
        elfogad: {
          required: true
        }
      },
      messages: {
        firstname: " Írd be a keresztneved!",
        lastname: " Írd be a vezetékneved!",
        password: {
          required: " Add meg a jelszavad!",
          minlength: " A jelszavad legalább 10 karakter hosszú legyen!"
        },
        confirm_password: {
          required: " Add meg a jelszavad!",
          minlength: " A jelszavad legalább 10 karakter hosszú legyen!",
          equalTo: " Kérjük ugyanazt a jelszót adja meg! "
        },
        phone: {
            required: " Add meg a telefonszámod!"
          },
        email: {
            required: " Add meg az email címed!",
            email: " Kérlek valós email címet adj meg!"
          },
        elfogad: " Kérlek fogadd el a feltételeinket!"
      }
    });
  });
$(document).ready(function(){
       $('form').submit(function(){
           var fData = $('input[name="fname"]').val();
           $('.fname').append(fData);

           var lData = $('input[name="lname"]').val();
           $('.lname').append(lData);

           var emailData = $('input[name="email"]').val();
           $('.email').append(emailData);

           var contactData = $('input[name="contact"]').val();
           $('.contact').append(contactData);
           return false;
       });
   })

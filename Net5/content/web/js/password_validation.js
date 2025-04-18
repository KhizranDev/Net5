﻿$(function () {
    var $password = $("#txtpassword");
    var $passwordAlert = $(".password-alert");
    var $requirements = $(".requirements");
    var $leng = $(".leng");
    var $bigLetter = $(".big-letter");
    var $num = $(".num");
    var $specialChar = $(".special-char");
    var specialChars = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`~";
    var numbers = "0123456789";

    //$password.addClass('has-error');

    $requirements.addClass("wrong");
    $password.on("focus", function () { $passwordAlert.show(); });

    $password.on("input blur", function (e) {
        var el = $(this);
        var val = el.val();
        $passwordAlert.show();

        if (val.length < 8) {
            leng = false;
        }
        else if (val.length > 7) {
            leng = true;
        }


        if (val.toLowerCase() == val) {
            bigLetter = false;
        }
        else { bigLetter = true; }

        num = false;
        for (var i = 0; i < val.length; i++) {
            for (var j = 0; j < numbers.length; j++) {
                if (val[i] == numbers[j]) {
                    num = true;
                }
            }
        }

        specialChar = false;
        for (var i = 0; i < val.length; i++) {
            for (var j = 0; j < specialChars.length; j++) {
                if (val[i] == specialChars[j]) {
                    specialChar = true;
                }
            }
        }

        if (!(leng && bigLetter && num && specialChar)) {

            console.log('false');
            //$password.addClass('invalid');

            //$password.addClass('has-error');
            //$password.parent().find('.input-error').show().css('display', 'inline-block');

            return false;

        } else {
            //$password.removeClass('invalid');

            //$password.removeClass('has-error');
            //$password.find('.input-error').hide();
            return true;
            console.log('true');
        }

        //console.log(leng, bigLetter, num, specialChar);

        if (leng == true && bigLetter == true && num == true && specialChar == true) {
            $(this).addClass("valid").removeClass("invalid");
            $requirements.removeClass("wrong").addClass("good");
            $passwordAlert.removeClass("alert-warning").addClass("alert-success");
        }
        else {
            $(this).addClass("invalid").removeClass("valid");
            $passwordAlert.removeClass("alert-success").addClass("alert-warning");

            if (leng == false) { $leng.addClass("wrong").removeClass("good"); }
            else { $leng.addClass("good").removeClass("wrong"); }

            if (bigLetter == false) { $bigLetter.addClass("wrong").removeClass("good"); }
            else { $bigLetter.addClass("good").removeClass("wrong"); }

            if (num == false) { $num.addClass("wrong").removeClass("good"); }
            else { $num.addClass("good").removeClass("wrong"); }

            if (specialChar == false) { $specialChar.addClass("wrong").removeClass("good"); }
            else { $specialChar.addClass("good").removeClass("wrong"); }
        }

        //console.log('password');

        if (e.type == "blur") {
            $passwordAlert.hide();
        }
    });
});
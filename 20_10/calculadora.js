/*!
 * Classe $app
 *
 * @author Ramon Barros [contato@ramon-barros.com]
 * @date   2016-04-11
 * Copyright (c) 2016 Ramon Barros
 */
(function (window) {
  'use strict';

   function action_button() {
        var button = document.getElementsByTagName('button'),
            result = document.getElementsByName('result'),
            signal = undefined,
            num1 = undefined,
            num2 = undefined;
            result[0].value = 0;
        for (var i = 0; i <= button.length; i++) {
            if (button.hasOwnProperty(i)) {
                button[i].onclick = function() {
                    if (Number(this.value) != NaN) {
                        result[0].value = String(result[0].value) + String(this.value);
                    } else if (this.value != '=') {
                        signal = this.value;
                        if (num1 == undefined) {
                            num1 = Number(result[0].value);
                        } else if (num2 == undefined) {
                            num2 = Number(result[0].value);
                        }
                    } else {
                        if (signal == '+') {
                            result[0].value = num1 + num2;
                        } else if (signal == '-') {
                            result[0].value = num1 - num2;
                        } else if (signal == '/') {
                            result[0].value = num1 / num2;
                        } else if (signal == '*') {
                            result[0].value = num1 * num2;
                        }
                    }
                };
            }
        }
   };
   action_button();

}(this));
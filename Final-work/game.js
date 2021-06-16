"use strict";
var disp =$('.disp'),
    msg = $('.msg');

var showMessage = function(ma,mb) {
    msg.find('.msg-a').text(ma);
    msg.find('.msg-b').text(mb);
};

showMessage('Hello','world');
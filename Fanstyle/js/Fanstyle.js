/*!
 * Fanstyle 2018-04-28
 * Fanstyle version1.0.0
 * Copyright fans_m@163.com
 */
  // 遮罩层
function viewTask(id) {
  $("div[id^=light]").hide();
  $("#"+id).show();
  $("#f-fade").show();
}
function cancel(id) {
  $("#"+id).hide();
  $("#f-fade").hide();
}
// alert弹窗
function alertBox(text,time,theme) {
  if (theme=="alertTheme1") {
    $("body").append("<div class='f-alertBox f-alertTheme1'>"
                  +text+"</div>");
  } else if (theme=="alertTheme2") {
    $("body").append("<div class='f-alertBox f-alertTheme2'>"
                  +text+"</div>");
  } else if (theme=="alertTheme3") {
    $("body").append("<div class='f-alertBox f-alertTheme3'>"
                  +text+"</div>");
  } else if (theme=="alertTheme4") {
    $("body").append("<div class='f-alertBox f-alertTheme4'>"
                  +text+"</div>");
  } else {
    $("body").append("<div class='f-alertBox f-alertTheme1'>"
                  +text+"</div>");
  }
  setTimeout(function(){
   $(".f-alertBox").fadeOut(500)
  },time)
}
/* 开启状态 开关按钮1*/
$(".f-switchOne").click(function(){
   $(this).toggleClass("switch_bg");
});

/*控制开关按钮2*/
function projectSwitch(obj1,obj2) {
  $(obj1).toggleClass("switch_primary");
  var clazz = $(obj1).attr("class");  // 判断是否含有class名switch_primary
  if (clazz.indexOf("switch_primary")>-1) {
     $(obj2).show();
     $(obj1).find(".on_left").removeClass("on_style");
     $(obj1).find(".off_right").addClass("off_style");
  } else {
     $(obj2).hide();
     $(obj1).find(".on_left").addClass("on_style");
     $(obj1).find(".off_right").removeClass("off_style");
  }
};

/*********************************************************************************/

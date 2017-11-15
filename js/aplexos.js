function getFileName(filePath){  
    var pos = filePath.lastIndexOf("/");  
    return filePath.substring(pos+1);    
}  

function set_DO_Value(img) {
    var fileName = getFileName(img.src);
    var imgName = img.name;
    
    if (fileName == "led_green.png" || fileName == "led_orange.png" || fileName == "led_blue.png" || fileName == "led_white.png") {
        img.src = "img/led_gray.png"
    } else {
        var moduleColor = imgName.substring(imgName.lastIndexOf("_") + 1);    
        img.src = "img/led_" + moduleColor + ".png";
    }

    console.log(img.src);
}

function randomPowerStatus(img) {
    var fileName = getFileName(img[0].src);
    if (((Math.random() * (10 - 1) + 1) / 5) > 1) {
        if (fileName == "power_gray.png") {
            img[0].src = "img/power_blue.png";
        } else {
            img[0].src = "img/power_gray.png";
        }
    }

    console.log(img[0].src);
}

function timedCount()
{
    for (var i = 0; i < 4; i++)
    {
        randomPowerStatus(document.getElementsByName("module1_power_" + (i + 1)));
    }

    for (var i = 0; i < 4; i++)
    {
        randomPowerStatus(document.getElementsByName("module2_power_" + (i + 1)));
    }

    setTimeout("timedCount()",1000);
}

$(function(){
    function footerPosition(){
        $("footer").removeClass("fixed-bottom");
        var contentHeight = document.body.scrollHeight,//网页正文全文高度
            winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
        if(!(contentHeight > winHeight)){
            //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
            $("footer").addClass("fixed-bottom");
        }
    }

    footerPosition();
    $(window).resize(footerPosition);
    timedCount();
});

let switchStatus = "off", 
        body = document.querySelector('body'),
        text = document.querySelector('.navbar-light .navbar-nav .nav-link'),
        textHover = document.querySelector('.navbar-light .navbar-nav .nav-link:hover');

        function toggleSwitch(){
            if (switchStatus == "off"){
                body.style.backgroundImage = "url(../assets/img/dark.png)";
                body.style.backgroundAttachment = "fixed";
                body.style.backgroundSize = "cover";

                switchStatus = "on";
            } else if(switchStatus == "on"){
                body.style.backgroundImage = "url(../assets/img/Light.png)";
                body.style.backgroundAttachment = "fixed";
                body.style.backgroundSize = "cover";
                
                switchStatus = "off";
            }
        }
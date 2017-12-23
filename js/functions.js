var menuItems = document.querySelectorAll(".navbar-default .navbar-nav>li>a");
var counterForClick = 0;
var clickedElement=null;
for(var i=0;i<menuItems.length;i++){

    menuItems[i].addEventListener("mouseover",function(){
        this.style.color="white";
        // this.style.borderBottom="3px solid orangered";
    });

    menuItems[i].addEventListener("mouseout",function(){
        this.style.color = "#75dbe8";
        // this.style.borderBottom = "none";
    });

    menuItems[i].addEventListener("click",function(){        
        if(counterForClick==0){
        this.className = "active";
        this.style.background = "grey";
        this.style.borderBottom = "1px solid orangered";
        counterForClick++;
        }
        else{
            clickedElement.style.background="#00bcd4";
            clickedElement.style.borderBottom="none";
            this.style.background="grey";
            this.style.borderBottom = "1px solid orangered";
        }
        clickedElement = this;
    });
}
//Model
var clickedCat;
var model = {
    cats: [
        {
            clickCount: 0,
            name: 'Bean',
            img: 'bean.jpg'
        },
        {
            clickCount: 0,
            name: 'Ringlet',
            img: 'ringlet.jpg'
        },
        {
            clickCount: 0,
            name: 'Cumulus',
            img: 'cumulus.jpg'
        },
        {
            clickCount: 0,
            name: 'Nunchuk',
            img: 'nunchuk.jpg'
        },
        {
            clickCount: 0,
            name: 'Trickle',
            img: 'trickle.jpg'
        }
    ]
};


//Controller

var controller = {
    init: function () {
        clickedCat = model.cats[0];
        console.log('first cat');
        console.log(clickedCat)
        this.render();
    },

    render: function () {
        populateList.init();
        viewCatEntry.init();
    },

    getAllCats: function () {//can call directly with model.cats, it's public
        return model.cats;
    },

    //assign directly instead, so the models stay bound
    /*assignClickedCat: function(catCopy) {
        
        clickedCat = catCopy;
    },*/
    
    incrementCounter: function () { 
        console.log("increment counter");
        clickedCat.clickCount++;
        console.log("clicks at: "+clickedCat.clickCount);
        document.getElementById("count").textContent = clickedCat.clickCount;
    },

    loadCat: function(index){
        //model.cats[index].clickCount++;
        clickedCat=model.cats[index];
        console.log(clickedCat.name+" is the clickedCat with count ("+clickedCat.clickCount+")");
        viewCatEntry.init();
    }
};



//View (Creates a list of clickable cat elements)
var populateList = {
    init: function () {
        this.render();
    },

    render: function () {
        var cat = "unloopedCat";
        var i = 0;
        var li = "";
        var ul = document.getElementById("catUL");
        var allCats = controller.getAllCats();

        for (i = 0; i < allCats.length; i++) {
            cat = allCats[i];
            li = document.createElement("li");
            li.textContent = cat.name;
            li.id = cat.name;
            li.setAttribute("onClick","controller.loadCat("+i+")");
            ul.appendChild(li);

            /*Consider using on-click attribute instead, this is really inefficent 
            li.addEventListener('click', (function(catCopy) {
                console.log("Event listener hit");
                console.log(catCopy);
                return function() {
                    controller.assignClickedCat(catCopy);
                    console.log(catCopy);
                    createCatEntry.init();
                };
            })(cat));*/
            
        }
    }
};

var viewCatEntry = {
    init: function () {
        //this.name = document.getElementById("name");
        //this.img = document.getElementById("img");
        //this.count = document.getElementById("count");
        //this.clickTarget = document.getElementById("clickTarget");//replaced with inline onclick functions
        //        this.clickTarget.addEventListener('click', function(){
        //    controller.incrementCounter();
        //});
        //this.render(); //removed so that variables didn't have to be passed as param of set to global code below
        //var clickedCat = controller.assignClickedCat();//This only works if a paramater is provided, and its used for setting not getting
        //clicked cat is a global variable no action neccesary here.

        console.log("Checking that clicked cat exists still");
        console.log(clickedCat);
        document.getElementById("name").textContent = clickedCat.name;
        document.getElementById("img").src = clickedCat.img;
        document.getElementById("count").textContent = clickedCat.clickCount;
    }
};

//Start
controller.init();

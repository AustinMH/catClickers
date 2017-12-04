//Model
var clickedCat = "";

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
        console.log("controller.init();");
        clickedCat = model.cats[0];
        console.log(clickedCat);
        this.render();
    },

    render: function () {
        console.log("controller.render();!");
        populateList.init();
    },

    getAllCats: function () {
        return model.cats;
    },

    //assign directly instead, so the models stay bound
    /*assignClickedCat: function(catCopy) {
        
        clickedCat = catCopy;
    },*/
    
    incrementCounter: function () {
        console.log("increment counter");
        clickedCat.clickCount++;
    },

    loadCat: function(index){
        var tempCat=model.cats[index];
        model.cats[index].clickCount+=1;
        clickedCat=tempCat;
        console.log(clickedCat.name+" is the clickedCat with count ("+clickedCat.clickCount+")");
        createCatEntry.init();
    }
};



//View

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
            var eventHandler = document.createAttribute("onClick");
            eventHandler.value="controller.loadCat("+i+")";
            li.setAttributeNode(eventHandler);
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


var createCatEntry = {
    init: function () {
        this.name = document.getElementById("name");
        this.img = document.getElementById("img");
        this.count = document.getElementById("count");
        this.clickTarget = document.getElementById("clickTarget");

        this.clickTarget.addEventListener('click', function(){
            controller.incrementCounter();
        });
        
        this.render();
    },
    
    render: function() {
        //var clickedCat = controller.assignClickedCat();//This only works if a paramater is provided, and its used for setting not getting
        //clicked cat is a global variable no action neccesary here.
        this.name.textContent = clickedCat.name;
        this.img.src = clickedCat.img;
        this.count.textContent = clickedCat.clickCount;
    }
};

//Start
controller.init();

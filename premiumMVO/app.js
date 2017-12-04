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

    assignClickedCat: function(catCopy) {
        clickedCat = catCopy;
    },
    
    incrementCounter: function () {
        console.log("increment counter");
    }
};



//View

var populateList = {
    init: function () {
        console.log("populateList.init();");
        this.render();
    },

    render: function () {
        var cat = "unloopedCat";
        var i = 0;
        var li = "";
        var ul = document.getElementById("catUL");
        var allCats = controller.getAllCats();
        console.log(allCats);

        for (i = 0; i < allCats.length; i++) {
            cat = allCats[i];
            li = document.createElement("li");
            li.textContent = cat.name;
            li.id = cat.name;
            ul.appendChild(li);
            console.log(li);

            li.addEventListener('click', (function(catCopy) {
                return function() {
                    controller.assignClickedCat(catCopy);
                    console.log(catCopy);
                    createCatEntry.init();
                };
            })(cat));
            
        }
    }
};


var createCatEntry = {
    init: function () {
        this.name = document.getElementById("name");
        this.img = document.getElementById("img");
        this.count = document.getElementById("count");
        this.clickTarget = document.getElementById("clickTarget");
        this.clickTarget = document.getElementById("clickTarget");
        
        this.clickTarget.addEventListener('click', function(){
            controller.incrementCounter();
        });
        
        this.render();
    },
    
    render: function() {
        var clickedCat = controller.assignClickedCat();
        this.name.textContent = clickedCat.name;
        this.img.src = clickedCat.img;
        this.count.textContent = clickedCat.clickCount;
    }
};

//Start
controller.init();

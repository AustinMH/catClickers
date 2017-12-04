//Model

var model = {
    clickedCat: null,
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
        console.log("controller.init();!");
        this.render();
    },

    render: function () {
        console.log("controller.render();!");
        populateList.init();
    },

    getAllCats: function () {
        return model.cats;
    },
    
    incrementCounter: function () {
        
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
            ul.appendChild(li);
            console.log(li);
        }  
    }
};

var createCatEntry = {
    
    //Define Which Cat to c
    
};

//Start
controller.init();

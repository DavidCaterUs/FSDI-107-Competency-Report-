
// Object Constructor

function Item(title,description,price,image,category, stock, priority){
  this.title = title;
  this.description = description;
  this.price = price;
  this.image = image;
  this.category = category;
  this.user = "Kleibert"
  this.stock = stock;
  this.priority = priority;

  console.log("is there",stock);
}





function saveItem(){

  //get data
  var title = $("#txtTitle").val();
  var description = $("#txtDescription").val();
  var price = $("#txtPrice").val();
  var image = $("#txtImage").val();
  var category = $("#selCategory").val();
  var stock = $("#txtStock").val();
  var priority = $("#selPriority").val();

  console.log(title,description,price,image,category);


  //createobject
  var theItem = new Item(title,description,price,image,category, stock, priority);
  console.log(theItem);

  console.log("the title: ", theItem.title);



  //save object to back end with POST method

  var serverUrl = "http://127.0.0.1:8080/api/products";

  $.ajax({
    url: serverUrl,
    type : "POST",
    data : JSON.stringify(theItem),
    contentType: "application/json",
    success : function(res){
      console.log("Req succed", res);

    },
    error: function (error){
      console.error("Error on req", error);
    }

  });




}

function testAjax(){
    var serverUrl = "http://restclass.azurewebsites.net/API/test";

    $.ajax({
      url: serverUrl,
      type : "GET",
      success : function(res){
        console.log("Req succed", res);

      },
      error: function (error){
        console.error("Error on req", error);
      }

    });


}

function clearDB(){
  var serverUrl = "http://127.0.0.1:8080/api/removeMyItems";

  $.ajax({
    url: serverUrl,
    type : "GET",
    success : function(res){
      console.log("Req succed", res);

    },
    error: function (error){
      console.error("Error on req", error);
    }

  });


}


function init(){
  console.log("Init admin");

  //initializations
  //events


  $("#btnSave").click(saveItem);
  $("#btnClear").click(clearDB);
}


window.onload = init;

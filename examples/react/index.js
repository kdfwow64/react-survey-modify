function init() {
  //Add the price property into choices
  Survey.Serializer.addProperty("itemvalue", "price:number");

  var getItemPrice = function(params) {
    //this.row property available in cells of dropdown and dynamic matrices questions
    var question = !!this.row
      ? this.row.getQuestionByColumnName(params[0])
      : null;
    //if we can't find a question inside the cell (by row and column name) then return
    if (!question) return 0;

    //get the selected item/choice
    var selItem = question.selectedItem;
    //return 0 if a user did not select the item yet.
    return !!selItem ? selItem.price : 0;
  };
  //Register the custom function
  Survey.FunctionFactory.Instance.register("getItemPrice", getItemPrice);

  var json = {
    "goNextPageAutomatic": true,
    "pages": [
      {
        "name": "Checkbox with Image and Description",
        "elements": [
          {
            "type": "checkbox",
            "name": "question233",
            "description": "This is subTitle",
            "choices": [
              {
                "value": "3.first",
                "text": "aaa",
                "description": "This is the description",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
              },
              {
                "value": "3.second",
                "text": "bbb",
                "description": "This is the description",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
              },
              {
                "value": "3.third",
                "text": "ccc",
                "description": "This is the description",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
              }
            ]
          }
        ]
      },
      {
        "name": "Checkbox with no image",

        "elements": [
          {
            "type": "checkbox",
            "name": "In an average week, how often do you take powders?",
            "description": "This is subTitle",
            "choices": [
              {
                "value": "item1",
                "text": "Rarely"
              },
              {
                "value": "item2",
                "text": "Couple days "
              },
              {
                "value": "item3",
                "text": "Non-binary"
              }
            ]
          }
        ]
      }
    ],
    "showProgressBar": "top",
    "showQuestionNumbers": "off",
    "goNextPageAutomatic": true
  };

  Survey.StylesManager.applyTheme("bem");
  var model = new Survey.Model(json);
  window.survey = model;

  // survey
  //   .onComplete
  //   .add(function (result) {
  //     document
  //       .querySelector('#surveyElement')
  //       .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
  //   });

  ReactDOM.render(
    <Survey.Survey model={model} />,
    document.getElementById("surveyElement")
  );
}

if (!window["%hammerhead%"]) {
  init();
}

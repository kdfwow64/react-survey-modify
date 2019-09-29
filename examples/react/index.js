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
  //https://cdn.shopify.com/s/files/1/0086/8184/8883/files/PASTEL_COLORS.png?2058
  var json = {
    "appLogo": "<span>C/O </span>",
    "pages": [
      // {
      //   "name": "no description card",
      //   "elements": [
      //     {
      //       "type": "radiogroup",
      //       "name": "999",
      //       "title": "When it comes to vitamins and supplements, you are:",
      //       "description": "sdfasfda",
      //       "choices": [
      //         {
      //           "value": "Comfy",
      //           "text": "Comfy & Soft",
      //           "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/comfy.png"
      //         },
      //         {
      //           "value": "Stretchy & Seamless",
      //           "text": "Stretchy & Seamless Stretchy",
      //           "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/stretch.png"
      //         },
      //         {
      //           "value": "Lacy & Fancy",
      //           "text": "Lacy & Fancy",
      //           "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/lacy.png"
      //         }
      //       ]
      //     }
      //   ]
      // },
      {
        "name": "style",
        "elements": [
          {
            "type": "radiogroup",
            "name": "q1",
            "title": "When it comes to vitamins and supplements, you are:",
            "description": "sdfasfda",
            "choices": [
              {
                "value": "Comfy",
                "text": "Comfy & Soft",
                "description": 'Comfort Sweet Comfort',
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/comfy.png"
              },
              {
                "value": "Stretchy & Seamless",
                "text": "Stretchy & Seamless Stretchy",
                "description": "Rock those tight pants",
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/stretch.png"
              },
              {
                "value": "Lacy & Fancy",
                "text": "Lacy & Fancy",
                "description": "Look your best when you are half-naked",
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/lacy.png"
              }
            ]
          }
        ]
      },
      {
        "name": "cut",
        // "visibleIf": "{q1} = \"Comfy\"",
        "elements": [
          {
            "type": "checkbox",
            "name": "What type of panty cuts do you prefer?",
            "choices": [
              {
                "value": "2.first",
                "text": "Classic Briefs",
                "description": "",
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/cut-1.png"
              },
              {
                "value": "2.second",
                "text": "High Cut Briefs",
                "description": "",
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/cut-1.png"
              },
              {
                "value": "2.third",
                "text": "Control Briefs",
                "description": "",
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/cut-1.png"
              },
              {
                "value": "3.fourth",
                "text": "Hipsters",
                "description": "",
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/cut-1.png"
              },
              {
                "value": "2.fifth",
                "text": "Boyshorts",
                "description": "",
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/cut-1.png"
              },
              {
                "value": "2.sixth",
                "text": "Bikinis",
                "description": "",
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/cut-1.png"
              },
              {
                "value": "2.seventh",
                "text": "Tangas",
                "description": "",
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/cut-1.png"
              },
              {
                "value": "3.eighth",
                "text": "G-Strings",
                "description": "",
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/cut-1.png"
              },
              {
                "value": "2.ninth",
                "text": "Thohgs",
                "description": "",
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/cut-1.png"
              },
            ]
          }
        ]
      },
      {
        "name": "Checkbox with Image and Description",
        "elements": [
          {
            "type": "radiogroup",
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
        "colCount": 1,
        "elements": [
          {
            "type": "checkbox",
            "name": "In an average week, how often do you take powders?",
            "description": "This is subTitle",
            "choices": [
              {
                "value": "item1",
                "text": "Small"
              },
              {
                "value": "item2",
                "text": "Meduim "
              },
              {
                "value": "item3",
                "text": "Large"
              },
              {
                "value": "item3",
                "text": "X Large"
              }
            ]
          }
        ]
      },
      {
        "name": "Checkbox with no image4",
        "elements": [
          {
            "type": "checkbox",
            "name": "1In an average week, how often do you take powders?",
            "description": "This is subTitle",
            "choices": [
              {
                "value": "item1",
                "text": "Small"
              },
              {
                "value": "item2",
                "text": "Meduim "
              },
              {
                "value": "item3",
                "text": "Large"
              },
              {
                "value": "item3",
                "text": "X Large"
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

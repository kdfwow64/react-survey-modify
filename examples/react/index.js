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
    // showTimerPanel: "top",
    "pages": [
      {
        maxTimeToFinish: 2,
        "name": "Just Text",
        "elements": [
         {
          "type": "html",
          "name": "question1",
          "html": '<div class="sv-question__header sv-question__header--top margin-top-150px"><h5 class="sv-title sv-question__title sv-question__title--required" title="Do "><span>Do not worry, it will be less than five minutes</span></h5></div>'
         }
        ]
      },
      {
        "name": "old are you",
        "elements": [
         {
          "type": "text",
          "name": "How old are you",
          "isRequired": true,
          "requiredErrorText": "Please input your age",
          "inputType": "number"
         }
        ]
      },
      {
        maxTimeToFinish: 2,
        "name": "Static Text with Image",
        "elements": [
         {
          "type": "html",
          "name": "question1",
          "html": '<div class="sv-question__header sv-question__header--top margin-top-100px"><h5 class="sv-title sv-question__title sv-question__title--required" title="Do "><span>Hey there!</span></h5> <img class="img-static-page" src="https://cdn.shopify.com/s/files/1/0086/8184/8883/files/PASTEL_COLORS.png?2058"></div>'
         }
        ]
      },
      {
        "name": "no description card",
        "elements": [
          {
            "type": "radiogroup",
            "name": "999",
            "title": "How often do you smoke",
            "description": "sdfasfda",
            "choices": [
              {
                "value": "Rarely",
                "text": "Rarely",
                "isCard": true,   // Is it Card Text without description
                "description": "",
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/comfy.png"
              },
              {
                "value": "Often",
                "text": "Often",
                "isCard": true,
                "description": "",
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/stretch.png"
              },
              {
                "value": "Sometime",
                "text": "Sometime",
                "isCard": true,
                "description": "",
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/lacy.png"
              }
            ]
          }
        ]
      },
      {
        "name": "old are you",
        "elements": [
         {
          "type": "text",
          "name": "How old are you",
          "isRequired": true,
          "requiredErrorText": "Please input your age",
          "inputType": "number"
         }
        ]
      },
      {
        "name": "big circle text",
        "elements": [
          {
            "type": "comment",
            "name": "Free Text Area",
            "isRequired": true,
            "maxLength": 50,
            "requiredErrorText": "Please enter a valid response",
            "title": "Do you often consume 5 or more alcoholic drinks in a single day?",
          }
        ]
      },
      {
        "name": "big circle text",
        "elements": [
          {
            "type": "radiogroup",
            "name": "big circle text",
            "title": "Do you often consume 5 or more alcoholic drinks in a single day?",
            "description": "",
            "choices": [
              {
                "value": "yes",
                "text": "Yes",
                "isCard": true  //Is it Big Circle Text?
              },
              {
                "value": "no",
                "text": "No",
                "isCard": true
              }
            ]
          }
        ]
      },
      {
        "name": "no description card",
        "elements": [
          {
            "type": "radiogroup",
            "name": "999",
            "title": "How often do you smoke",
            "description": "sdfasfda",
            "choices": [
              {
                "value": "Rarely",
                "text": "Rarely",
                "isCard": true,   // Is it Card Text without description
                "description": "",
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/comfy.png"
              },
              {
                "value": "Often",
                "text": "Often",
                "isCard": true,
                "description": "",
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/stretch.png"
              },
              {
                "value": "Sometime",
                "text": "Sometime",
                "isCard": true,
                "description": "",
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/lacy.png"
              }
            ]
          }
        ]
      },
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
                "isCard": false,
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/cut-1.png"
              },
              {
                "value": "2.second",
                "text": "High Cut Briefs",
                "description": "",
                "isCard": false,
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/cut-1.png"
              },
              {
                "value": "2.third",
                "text": "Control Briefs",
                "description": "",
                "isCard": false,
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/cut-1.png"
              },
              {
                "value": "3.fourth",
                "text": "Hipsters",
                "description": "",
                "isCard": false,
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/cut-1.png"
              },
              {
                "value": "2.fifth",
                "text": "Boyshorts",
                "description": "",
                "isCard": false,
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/cut-1.png"
              },
              {
                "value": "2.sixth",
                "text": "Bikinis",
                "description": "",
                "isCard": false,
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/cut-1.png"
              },
              {
                "value": "2.seventh",
                "text": "Tangas",
                "description": "",
                "isCard": false,
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/cut-1.png"
              },
              {
                "value": "3.eighth",
                "text": "G-Strings",
                "description": "",
                "isCard": false,
                "imageLink": "https://heavenpanty-assets.s3-us-west-2.amazonaws.com/cut-1.png"
              },
              {
                "value": "2.ninth",
                "text": "Thohgs",
                "description": "",
                "isCard": false,
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
                "value": "item4",
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
                "value": "item4",
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

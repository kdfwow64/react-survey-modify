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
    "pages": [
      {
        "name": "First Page",
        "elements": [
          {
            "type": "radiogroup",
            "name": "radiogroup Image with Description",
            // "colCount": 1,
            "choices": [
              {
                "value": "1.first",
                "text": "First",
                "description": "This is the description",
                "imageLink": "https://images.ctfassets.net/t9x0u6p47op0/A1CmWWkvqSMK6WSAsIY46/3feb17797c68dc529b2a8876457dfe7e/ic_topic_sleep.svg?w=128&h=128"
              },
              {
                "value": "1.second",
                "text": "Second",
                "description": "This is the description",
                "imageLink": "https://images.ctfassets.net/t9x0u6p47op0/6QKu30B8iWCK8UuOkG6o62/f6f9468d259035c1f5719db5948a2d5f/ic_topic_stress.svg?w=128&h=128"
              },
              {
                "value": "1.third",
                "text": "Third",
                "description": "This is the description",
                "imageLink": "https://images.ctfassets.net/t9x0u6p47op0/5GiLyy5Ggw2iaGI08SEisi/793097f6c2a3ad18a6057c9961233869/ic_topic_fitness.svg?w=128&h=128"
              },
              {
                "value": "1.fourth",
                "text": "Fourth",
                "description": "This is the description",
                "imageLink": "https://images.ctfassets.net/t9x0u6p47op0/371OPjK1x6mMuAkykg0mqO/2ddc0bf8e294da157f92993c10f62661/ic_topic_energy.svg?w=128&h=128"
              },
              {
                "value": "1.fifth",
                "text": "Five",
                "description": "This is the description",
                "imageLink": "https://images.ctfassets.net/t9x0u6p47op0/371OPjK1x6mMuAkykg0mqO/2ddc0bf8e294da157f92993c10f62661/ic_topic_energy.svg?w=128&h=128"
              },
              {
                "value": "1.sixth",
                "text": "Six",
                "description": "This is the description",
                "imageLink": "https://images.ctfassets.net/t9x0u6p47op0/371OPjK1x6mMuAkykg0mqO/2ddc0bf8e294da157f92993c10f62661/ic_topic_energy.svg?w=128&h=128"
              },
              {
                "value": "1.seventh",
                "text": "Seven",
                "description": "This is the description",
                "imageLink": "https://images.ctfassets.net/t9x0u6p47op0/371OPjK1x6mMuAkykg0mqO/2ddc0bf8e294da157f92993c10f62661/ic_topic_energy.svg?w=128&h=128"
              }
            ]
          }
        ]
      },
      {
        "name": "Second Page",
        "elements": [
          {
            "type": "radiogroup",
            "name": "radiogroup with Image",
            "choices": [
              {
                "value": "2.first",
                "text": "First",
                "imageLink": "https://images.ctfassets.net/t9x0u6p47op0/A1CmWWkvqSMK6WSAsIY46/3feb17797c68dc529b2a8876457dfe7e/ic_topic_sleep.svg?w=128&h=128"
              },
              {
                "value": "2.second",
                "text": "Second",
                "imageLink": "https://images.ctfassets.net/t9x0u6p47op0/6QKu30B8iWCK8UuOkG6o62/f6f9468d259035c1f5719db5948a2d5f/ic_topic_stress.svg?w=128&h=128"
              },
              {
                "value": "2.third",
                "text": "Third",
                "imageLink": "https://images.ctfassets.net/t9x0u6p47op0/5GiLyy5Ggw2iaGI08SEisi/793097f6c2a3ad18a6057c9961233869/ic_topic_fitness.svg?w=128&h=128"
              },
              {
                "value": "3.fourth",
                "text": "Fourth",
                "imageLink": "https://images.ctfassets.net/t9x0u6p47op0/371OPjK1x6mMuAkykg0mqO/2ddc0bf8e294da157f92993c10f62661/ic_topic_energy.svg?w=128&h=128"
              },
              {
                "value": "3.fifth",
                "text": "Fifth",
                "imageLink": "https://images.ctfassets.net/t9x0u6p47op0/371OPjK1x6mMuAkykg0mqO/2ddc0bf8e294da157f92993c10f62661/ic_topic_energy.svg?w=128&h=128"
              },
              {
                "value": "3.fifth",
                "text": "Sixth",
                "imageLink": "https://images.ctfassets.net/t9x0u6p47op0/371OPjK1x6mMuAkykg0mqO/2ddc0bf8e294da157f92993c10f62661/ic_topic_energy.svg?w=128&h=128"
              },
              {
                "value": "3.fifth",
                "text": "Seventh",
                "imageLink": "https://images.ctfassets.net/t9x0u6p47op0/371OPjK1x6mMuAkykg0mqO/2ddc0bf8e294da157f92993c10f62661/ic_topic_energy.svg?w=128&h=128"
              }
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
            "name": "aaaadfa",
            "choices": [
              {
                "value": "item1",
                "text": "aaa"
              },
              {
                "value": "item2",
                "text": "aaa"
              },
              {
                "value": "item3",
                "text": "aaa"
              }
            ]
          }
        ]
      }
    ],
    "showProgressBar": "bottom",
    "showQuestionNumbers": "off"
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

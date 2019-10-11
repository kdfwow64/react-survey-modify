import * as React from "react";
import {
  SurveyElementBase,
  ReactSurveyElement,
  SurveyQuestionElementBase
} from "./reactquestionelement";
import { QuestionCommentModel } from "../question_comment";
import { Question } from "../question";
import { ReactQuestionFactory } from "./reactquestionfactory";

export class SurveyQuestionComment extends SurveyQuestionElementBase {
  constructor(props: any) {
    super(props);
    this.state = { value: this.getStateValue() };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }
  protected get question(): QuestionCommentModel {
    return this.questionBase as QuestionCommentModel;
  }
  componentWillReceiveProps(nextProps: any) {
    super.componentWillReceiveProps(nextProps);
    this.setState({ value: this.getStateValue() });
  }
  handleOnChange(event: any) {
    this.setState({ value: event.target.value });
  }
  handleOnBlur(event: any) {
    this.question.value = event.target.value;
    this.setState({ value: this.getStateValue() });
  }
  render(): JSX.Element {
    if (!this.question) return null;
    var cssClasses = this.question.cssClasses;
    var mainCSS = cssClasses.errorComment + " comment-main-div";
    console.log(this.question);
    return (
      <div className={mainCSS}>
        <div className="fixed-character-div">
          {
            this.state.value.length + " / " +this.question.getMaxLength() + " chars"
          }
        </div>
        {
          this.state.value.length === 0 &&
          <div className="fixed-error-div">
            {this.question.getErrorText()}
          </div>
        }
        <textarea
          id={this.question.inputId}
          className={cssClasses.root}
          readOnly={this.isDisplayMode}
          value={this.state.value}
          maxLength={this.question.getMaxLength()}
          placeholder={this.question.placeHolder}
          onBlur={this.handleOnBlur}
          onChange={this.handleOnChange}
          cols={this.question.cols}
          rows={this.question.rows}
          aria-label={this.question.locTitle.renderedHtml}
        />
      </div>
    );
  }
  private getStateValue(): any {
    return !this.question.isEmpty() ? this.question.value : "";
  }
}

export class SurveyQuestionCommentItem extends ReactSurveyElement {
  componentWillReceiveProps(nextProps: any) {
    super.componentWillReceiveProps(nextProps);
    this.setState({ comment: this.props.question.comment || "" });
  }
  componentWillMount() {
    this.setState({ comment: this.props.question.comment || "" });
  }
  render(): JSX.Element {
    let question = this.props.question;
    if (!question) return null;
    if (this.isDisplayMode)
      return <div className={this.cssClasses.comment}>{question.comment}</div>;
    let className = this.props.otherCss || this.cssClasses.comment;
    let handleOnChange = (event: any) => {
      this.setState({ comment: event.target.value });
    };
    let handleOnBlur = (event: any) => {
      question.comment = event.target.value;
    };

    return (
      <textarea
        className={className}
        value={this.state.comment}
        maxLength={question.getOthersMaxLength()}
        placeholder={question.otherPlaceHolder}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        aria-label={question.locTitle.renderedHtml}
      />
    );
  }
}

ReactQuestionFactory.Instance.registerQuestion("comment", props => {
  return React.createElement(SurveyQuestionComment, props);
});

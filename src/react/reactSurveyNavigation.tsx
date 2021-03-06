import * as React from "react";
import { SurveyModel } from "../survey";
import { SurveyNavigationBase } from "./reactSurveyNavigationBase";

export class SurveyNavigation extends SurveyNavigationBase {
  private mouseDownPage: any = null;
  constructor(props: any) {
    super(props);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleNextMouseDown = this.handleNextMouseDown.bind(this);
    this.handleCompleteClick = this.handleCompleteClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
  }
  handlePrevClick(event: any) {
    this.survey.prevPage();
  }
  handleNextClick(event: any) {
    if (!!this.mouseDownPage && this.mouseDownPage !== this.survey.currentPage)
      return;
    this.mouseDownPage = null;
    this.survey.nextPage();
  }
  handleNextMouseDown(event: any) {
    this.mouseDownPage = this.survey.currentPage;
    var el: any = document.activeElement;
    if (!!el && !!el["blur"]) el["blur"]();
  }
  handleCompleteClick(event: any) {
    this.survey.completeLastPage();
  }
  handleStartClick(event: any) {
    this.survey.start();
  }
  render(): JSX.Element {
    if (!this.survey || this.survey.isNavigationButtonsShowing === "none")
      return null;
    var isStartedPage = this.survey.state === "starting";
    // var prevButton =
    //   !isStartedPage && !this.survey.isFirstPage && this.survey.isShowPrevButton
    //     ? this.renderButton(
    //         this.handlePrevClick,
    //         null,
    //         this.survey.pagePrevText,
    //         this.css.navigation.prev
    //       )
    //     : null;

    var prevButton =
      !isStartedPage && !this.survey.isFirstPage && this.survey.isShowPrevButton
        ? <div className="back-page-div" onClick={this.handlePrevClick}>
          <i className="fa fa-chevron-left" /><span>   Back</span>
          </div>
        : null;
    // var nextButton =
    //   !isStartedPage && !this.survey.isLastPage
    //     ? this.renderButton(
    //         this.handleNextClick,
    //         this.handleNextMouseDown,
    //         this.survey.pageNextText,
    //         this.css.navigation.next
    //       )
    //     : null;
    var ss = this.survey.currentPage.rows[0].elements[0];
    var nextButton =
      !isStartedPage && !this.survey.isLastPage && ss.getType() !== "radiogroup"
        ? <div className="continue-btn-div">
            <div className="continue-page-div" onClick={this.handleNextClick}>
            Continue
            </div>
          </div>
        : null;
    // var completeButton =
    //   !isStartedPage && this.survey.isLastPage && this.survey.isEditMode
    //     ? this.renderButton(
    //         this.handleCompleteClick,
    //         null,
    //         this.survey.completeText,
    //         this.css.navigation.complete
    //       )
    //     : null;
    var completeButton =
      !isStartedPage && this.survey.isLastPage && this.survey.isEditMode
        ? <div className="complete-btn-div">
          <div className="complete-page-div" onClick={this.handleCompleteClick}>
              Complete
              </div>
          </div>
        : null;
    var startButton = isStartedPage
      ? this.renderButton(
          this.handleStartClick,
          null,
          this.survey.startSurveyText,
          this.css.navigation.start
        )
      : null;
    return (
      <div className={this.css.footer + " mirror-effect-footer"}>
        {startButton}
        {prevButton}
        {nextButton}
        {completeButton}
      </div>
    );
  }
  protected renderButton(
    click: any,
    mouseDown: any,
    text: string,
    btnClassName: string
  ): JSX.Element {
    var style = { marginRight: "5px" };
    var className =
      this.css.navigationButton + (btnClassName ? " " + btnClassName : "");
    return (
      <input
        className={className}
        style={style}
        type="button"
        onMouseDown={mouseDown}
        onClick={click}
        value={text}
      />
    );
  }
}

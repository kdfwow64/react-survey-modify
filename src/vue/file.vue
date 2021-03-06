<template>
    <div :class="fileRootClass" @dragenter="onDragEnter" @dragover="onDragOver" @dragleave="onDragLeave" @drop="onDrop">
        <input :class="question.cssClasses.fileInput" v-if="!question.isReadOnly" type="file" :id="question.inputId" @change="doChange" v-bind:aria-required="question.isRequired" :aria-label="question.locTitle.renderedHtml" :multiple="question.allowMultiple ? 'multiple' : undefined" v-bind:title="question.inputTitle" v-bind:accept="question.acceptedTypes" />
        <input v-if="question.isReadOnly" type="file" disabled :class="getPlaceholderClass()" :placeholder="question.title" style="color: transparent;"/>
        <div :class="question.cssClasses.fileDecorator">
          <label :class="question.cssClasses.chooseFile + (question.isReadOnly ? ' ' + question.cssClasses.disabled : '')" :for="question.inputId">{{question.chooseButtonCaption}}</label>
          <span :class="question.cssClasses.noFileChosen" v-if="question.isEmpty()">{{question.noFileChosenCaption}}</span>             
        </div>
        <button type="button" v-if="!question.isReadOnly && !question.isEmpty()" :class="question.cssClasses.removeButton" @click="doClean">{{question.cleanButtonCaption}}</button>
        <div v-if="!question.isEmpty()">
            <span v-for="(val, index) in question.previewValue" :key="question.inputId + '_' + index" v-show="val" :class="question.cssClasses.preview">
                <div v-if="val.name">
                  <a :href="val.content" :title="val.name" :download="val.name" :width="question.imageWidth">{{val.name}}</a>
                </div>
                <img v-if="question.canPreviewImage(val)" :src="val.content" :height="question.imageHeight" :width="question.imageWidth" alt="File preview">
                <div v-if="val.name">
                  <span v-if="!question.isReadOnly" @click="doRemoveFile(val)" :class="question.cssClasses.removeFile">{{question.removeFileCaption}}</span>
                </div>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { default as QuestionVue } from "./question";
import { QuestionFileModel } from "../question_file";

@Component
export class File extends QuestionVue<QuestionFileModel> {
  private isHighlighted: boolean = false;
  @Watch("isHightLighted")
  get fileRootClass(): string {
    return (
      this.question.cssClasses.root +
      (this.isHighlighted ? " " + this.question.cssClasses.highlighted : "")
    );
    }
  onDragOver = (event: any) => {
    event.preventDefault();
    this.highlight();
  };
  onDragEnter = (event: any) => {
    event.preventDefault();
    this.highlight();
  };
  onDragLeave = (event: any) => {
    event.preventDefault();
    this.unhighlight();
  };
  onDrop = (event: any) => {
    event.preventDefault();
    this.unhighlight();
    let src = event.dataTransfer;
    this.onChange(src);
  };
  doChange(event: any) {
    var src = event.target || event.srcElement;
    this.onChange(src);
  }
  doClean(event: any) {
    var src = event.target || event.srcElement;
    this.question.clear();
    src.parentElement.querySelectorAll("input")[0].value = "";
  }
  doRemoveFile(data: any) {
    this.question.removeFile(data);
  }
  getPlaceholderClass() {
    return "form-control " + this.question.cssClasses.placeholderInput;
  }
  private onChange(src: any) {
    if (!(<any>window)["FileReader"]) return;
    if (!src || !src.files || src.files.length < 1) return;
    let files = [];
    for (let i = 0; i < src.files.length; i++) {
      files.push(src.files[i]);
    }
    src.value = "";
    this.question.loadFiles(files);
  }
  private highlight() {
    this.isHighlighted = true;
  }
  private unhighlight() {
    this.isHighlighted = false;
  }
}
Vue.component("survey-file", File);
export default File;
</script>

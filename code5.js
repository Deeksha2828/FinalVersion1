gdjs.Scenario_322Code = {};
gdjs.Scenario_322Code.localVariables = [];
gdjs.Scenario_322Code.idToCallbackMap = new Map();
gdjs.Scenario_322Code.GDImage1Objects1= [];
gdjs.Scenario_322Code.GDImage1Objects2= [];
gdjs.Scenario_322Code.GDImage2Objects1= [];
gdjs.Scenario_322Code.GDImage2Objects2= [];
gdjs.Scenario_322Code.GDNewSpriteObjects1= [];
gdjs.Scenario_322Code.GDNewSpriteObjects2= [];
gdjs.Scenario_322Code.GDQuestion1Objects1= [];
gdjs.Scenario_322Code.GDQuestion1Objects2= [];
gdjs.Scenario_322Code.GDNewSprite2Objects1= [];
gdjs.Scenario_322Code.GDNewSprite2Objects2= [];
gdjs.Scenario_322Code.GDYesButtonObjects1= [];
gdjs.Scenario_322Code.GDYesButtonObjects2= [];
gdjs.Scenario_322Code.GDNoButtonObjects1= [];
gdjs.Scenario_322Code.GDNoButtonObjects2= [];
gdjs.Scenario_322Code.GDContinueButtonObjects1= [];
gdjs.Scenario_322Code.GDContinueButtonObjects2= [];
gdjs.Scenario_322Code.GDQuestionAObjects1= [];
gdjs.Scenario_322Code.GDQuestionAObjects2= [];
gdjs.Scenario_322Code.GDCorrectAnswerObjects1= [];
gdjs.Scenario_322Code.GDCorrectAnswerObjects2= [];
gdjs.Scenario_322Code.GDWronganswerObjects1= [];
gdjs.Scenario_322Code.GDWronganswerObjects2= [];
gdjs.Scenario_322Code.GDDarkoverlayObjects1= [];
gdjs.Scenario_322Code.GDDarkoverlayObjects2= [];
gdjs.Scenario_322Code.GDSliderQ1Objects1= [];
gdjs.Scenario_322Code.GDSliderQ1Objects2= [];
gdjs.Scenario_322Code.GDRatingTextQ1Objects1= [];
gdjs.Scenario_322Code.GDRatingTextQ1Objects2= [];
gdjs.Scenario_322Code.GDLeftlabelQ1Objects1= [];
gdjs.Scenario_322Code.GDLeftlabelQ1Objects2= [];
gdjs.Scenario_322Code.GDRightlabelQ1Objects1= [];
gdjs.Scenario_322Code.GDRightlabelQ1Objects2= [];


gdjs.Scenario_322Code.mapOfGDgdjs_9546Scenario_9595322Code_9546GDImage1Objects1Objects = Hashtable.newFrom({"Image1": gdjs.Scenario_322Code.GDImage1Objects1});
gdjs.Scenario_322Code.mapOfGDgdjs_9546Scenario_9595322Code_9546GDImage2Objects1Objects = Hashtable.newFrom({"Image2": gdjs.Scenario_322Code.GDImage2Objects1});
gdjs.Scenario_322Code.mapOfGDgdjs_9546Scenario_9595322Code_9546GDYesButtonObjects1Objects = Hashtable.newFrom({"YesButton": gdjs.Scenario_322Code.GDYesButtonObjects1});
gdjs.Scenario_322Code.mapOfGDgdjs_9546Scenario_9595322Code_9546GDNoButtonObjects1Objects = Hashtable.newFrom({"NoButton": gdjs.Scenario_322Code.GDNoButtonObjects1});
gdjs.Scenario_322Code.mapOfGDgdjs_9546Scenario_9595322Code_9546GDContinueButtonObjects1Objects = Hashtable.newFrom({"ContinueButton": gdjs.Scenario_322Code.GDContinueButtonObjects1});
gdjs.Scenario_322Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.Scenario_322Code.GDContinueButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("CorrectAnswer"), gdjs.Scenario_322Code.GDCorrectAnswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftlabelQ1"), gdjs.Scenario_322Code.GDLeftlabelQ1Objects1);
gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.Scenario_322Code.GDNoButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Question1"), gdjs.Scenario_322Code.GDQuestion1Objects1);
gdjs.copyArray(runtimeScene.getObjects("RatingTextQ1"), gdjs.Scenario_322Code.GDRatingTextQ1Objects1);
gdjs.copyArray(runtimeScene.getObjects("RightlabelQ1"), gdjs.Scenario_322Code.GDRightlabelQ1Objects1);
gdjs.copyArray(runtimeScene.getObjects("SliderQ1"), gdjs.Scenario_322Code.GDSliderQ1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Wronganswer"), gdjs.Scenario_322Code.GDWronganswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.Scenario_322Code.GDYesButtonObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "QuestionTimer");
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDYesButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDYesButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDNoButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDNoButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDQuestion1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDQuestion1Objects1[i].hide();
}
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(0);
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDSliderQ1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDSliderQ1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDRatingTextQ1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDRatingTextQ1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDLeftlabelQ1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDLeftlabelQ1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDRightlabelQ1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDRightlabelQ1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDContinueButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDContinueButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDCorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDCorrectAnswerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDWronganswerObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDWronganswerObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Image1"), gdjs.Scenario_322Code.GDImage1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scenario_322Code.mapOfGDgdjs_9546Scenario_9595322Code_9546GDImage1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CorrectAnswer"), gdjs.Scenario_322Code.GDCorrectAnswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.Scenario_322Code.GDNoButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Question1"), gdjs.Scenario_322Code.GDQuestion1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Wronganswer"), gdjs.Scenario_322Code.GDWronganswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.Scenario_322Code.GDYesButtonObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(14).setString("Image 1");
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDCorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDCorrectAnswerObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDWronganswerObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDWronganswerObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDQuestion1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDQuestion1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDYesButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDYesButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDNoButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDNoButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Revealdelay");
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Image2"), gdjs.Scenario_322Code.GDImage2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scenario_322Code.mapOfGDgdjs_9546Scenario_9595322Code_9546GDImage2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CorrectAnswer"), gdjs.Scenario_322Code.GDCorrectAnswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.Scenario_322Code.GDNoButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Question1"), gdjs.Scenario_322Code.GDQuestion1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Wronganswer"), gdjs.Scenario_322Code.GDWronganswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.Scenario_322Code.GDYesButtonObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(14).setString("Image 2");
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDCorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDCorrectAnswerObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDWronganswerObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDWronganswerObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDQuestion1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDQuestion1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDYesButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDYesButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDNoButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDNoButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Revealdelay");
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.Scenario_322Code.GDYesButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scenario_322Code.mapOfGDgdjs_9546Scenario_9595322Code_9546GDYesButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.Scenario_322Code.GDContinueButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftlabelQ1"), gdjs.Scenario_322Code.GDLeftlabelQ1Objects1);
gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.Scenario_322Code.GDNoButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Question1"), gdjs.Scenario_322Code.GDQuestion1Objects1);
gdjs.copyArray(runtimeScene.getObjects("RatingTextQ1"), gdjs.Scenario_322Code.GDRatingTextQ1Objects1);
gdjs.copyArray(runtimeScene.getObjects("RightlabelQ1"), gdjs.Scenario_322Code.GDRightlabelQ1Objects1);
gdjs.copyArray(runtimeScene.getObjects("SliderQ1"), gdjs.Scenario_322Code.GDSliderQ1Objects1);
/* Reuse gdjs.Scenario_322Code.GDYesButtonObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(15).setString("Yes");
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(2);
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDYesButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDYesButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDNoButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDNoButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDQuestion1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDQuestion1Objects1[i].getBehavior("Text").setText("What impact would faster access to clinically relevant information have on your procedures?");
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDSliderQ1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDSliderQ1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDRatingTextQ1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDRatingTextQ1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDLeftlabelQ1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDLeftlabelQ1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDRightlabelQ1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDRightlabelQ1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDContinueButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDContinueButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.Scenario_322Code.GDNoButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scenario_322Code.mapOfGDgdjs_9546Scenario_9595322Code_9546GDNoButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.Scenario_322Code.GDContinueButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftlabelQ1"), gdjs.Scenario_322Code.GDLeftlabelQ1Objects1);
/* Reuse gdjs.Scenario_322Code.GDNoButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Question1"), gdjs.Scenario_322Code.GDQuestion1Objects1);
gdjs.copyArray(runtimeScene.getObjects("RatingTextQ1"), gdjs.Scenario_322Code.GDRatingTextQ1Objects1);
gdjs.copyArray(runtimeScene.getObjects("RightlabelQ1"), gdjs.Scenario_322Code.GDRightlabelQ1Objects1);
gdjs.copyArray(runtimeScene.getObjects("SliderQ1"), gdjs.Scenario_322Code.GDSliderQ1Objects1);
gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.Scenario_322Code.GDYesButtonObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(15).setString("No");
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(2);
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDYesButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDYesButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDNoButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDNoButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDQuestion1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDQuestion1Objects1[i].getBehavior("Text").setText("What impact would faster access to clinically relevant information have on your procedures?");
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDSliderQ1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDSliderQ1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDRatingTextQ1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDRatingTextQ1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDLeftlabelQ1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDLeftlabelQ1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDRightlabelQ1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDRightlabelQ1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDContinueButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDContinueButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderQ1"), gdjs.Scenario_322Code.GDSliderQ1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scenario_322Code.GDSliderQ1Objects1.length;i<l;++i) {
    if ( gdjs.Scenario_322Code.GDSliderQ1Objects1[i].Value(null) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Scenario_322Code.GDSliderQ1Objects1[k] = gdjs.Scenario_322Code.GDSliderQ1Objects1[i];
        ++k;
    }
}
gdjs.Scenario_322Code.GDSliderQ1Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RatingTextQ1"), gdjs.Scenario_322Code.GDRatingTextQ1Objects1);
{for(var i = 0, len = gdjs.Scenario_322Code.GDRatingTextQ1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDRatingTextQ1Objects1[i].getBehavior("Text").setText("No impact");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderQ1"), gdjs.Scenario_322Code.GDSliderQ1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scenario_322Code.GDSliderQ1Objects1.length;i<l;++i) {
    if ( gdjs.Scenario_322Code.GDSliderQ1Objects1[i].Value(null) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Scenario_322Code.GDSliderQ1Objects1[k] = gdjs.Scenario_322Code.GDSliderQ1Objects1[i];
        ++k;
    }
}
gdjs.Scenario_322Code.GDSliderQ1Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RatingTextQ1"), gdjs.Scenario_322Code.GDRatingTextQ1Objects1);
{for(var i = 0, len = gdjs.Scenario_322Code.GDRatingTextQ1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDRatingTextQ1Objects1[i].getBehavior("Text").setText("Minor impact");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderQ1"), gdjs.Scenario_322Code.GDSliderQ1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scenario_322Code.GDSliderQ1Objects1.length;i<l;++i) {
    if ( gdjs.Scenario_322Code.GDSliderQ1Objects1[i].Value(null) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.Scenario_322Code.GDSliderQ1Objects1[k] = gdjs.Scenario_322Code.GDSliderQ1Objects1[i];
        ++k;
    }
}
gdjs.Scenario_322Code.GDSliderQ1Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RatingTextQ1"), gdjs.Scenario_322Code.GDRatingTextQ1Objects1);
{for(var i = 0, len = gdjs.Scenario_322Code.GDRatingTextQ1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDRatingTextQ1Objects1[i].getBehavior("Text").setText("Moderate impact");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderQ1"), gdjs.Scenario_322Code.GDSliderQ1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scenario_322Code.GDSliderQ1Objects1.length;i<l;++i) {
    if ( gdjs.Scenario_322Code.GDSliderQ1Objects1[i].Value(null) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.Scenario_322Code.GDSliderQ1Objects1[k] = gdjs.Scenario_322Code.GDSliderQ1Objects1[i];
        ++k;
    }
}
gdjs.Scenario_322Code.GDSliderQ1Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RatingTextQ1"), gdjs.Scenario_322Code.GDRatingTextQ1Objects1);
{for(var i = 0, len = gdjs.Scenario_322Code.GDRatingTextQ1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDRatingTextQ1Objects1[i].getBehavior("Text").setText("High impact");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.Scenario_322Code.GDContinueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scenario_322Code.mapOfGDgdjs_9546Scenario_9595322Code_9546GDContinueButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeftlabelQ1"), gdjs.Scenario_322Code.GDLeftlabelQ1Objects1);
gdjs.copyArray(runtimeScene.getObjects("RatingTextQ1"), gdjs.Scenario_322Code.GDRatingTextQ1Objects1);
gdjs.copyArray(runtimeScene.getObjects("RightlabelQ1"), gdjs.Scenario_322Code.GDRightlabelQ1Objects1);
gdjs.copyArray(runtimeScene.getObjects("SliderQ1"), gdjs.Scenario_322Code.GDSliderQ1Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(10).setString((( gdjs.Scenario_322Code.GDRatingTextQ1Objects1.length === 0 ) ? "" :gdjs.Scenario_322Code.GDRatingTextQ1Objects1[0].getString()));
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scenario 3", false);
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDSliderQ1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDSliderQ1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDRatingTextQ1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDRatingTextQ1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDLeftlabelQ1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDLeftlabelQ1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDRightlabelQ1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDRightlabelQ1Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Revealdelay") > 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CorrectAnswer"), gdjs.Scenario_322Code.GDCorrectAnswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Image1"), gdjs.Scenario_322Code.GDImage1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Image2"), gdjs.Scenario_322Code.GDImage2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.Scenario_322Code.GDNoButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Question1"), gdjs.Scenario_322Code.GDQuestion1Objects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionA"), gdjs.Scenario_322Code.GDQuestionAObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wronganswer"), gdjs.Scenario_322Code.GDWronganswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.Scenario_322Code.GDYesButtonObjects1);
{for(var i = 0, len = gdjs.Scenario_322Code.GDCorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDCorrectAnswerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDWronganswerObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDWronganswerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDImage1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDImage1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDImage2Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDImage2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDQuestionAObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDQuestionAObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDQuestion1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDQuestion1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDYesButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDYesButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDNoButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDNoButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_322Code.GDQuestion1Objects1.length ;i < len;++i) {
    gdjs.Scenario_322Code.GDQuestion1Objects1[i].getBehavior("Text").setText("Do you think the image quality provided by OPTIQ AI could help you make clinical decisions faster?");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Revealdelay");
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Scenario_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scenario_322Code.GDImage1Objects1.length = 0;
gdjs.Scenario_322Code.GDImage1Objects2.length = 0;
gdjs.Scenario_322Code.GDImage2Objects1.length = 0;
gdjs.Scenario_322Code.GDImage2Objects2.length = 0;
gdjs.Scenario_322Code.GDNewSpriteObjects1.length = 0;
gdjs.Scenario_322Code.GDNewSpriteObjects2.length = 0;
gdjs.Scenario_322Code.GDQuestion1Objects1.length = 0;
gdjs.Scenario_322Code.GDQuestion1Objects2.length = 0;
gdjs.Scenario_322Code.GDNewSprite2Objects1.length = 0;
gdjs.Scenario_322Code.GDNewSprite2Objects2.length = 0;
gdjs.Scenario_322Code.GDYesButtonObjects1.length = 0;
gdjs.Scenario_322Code.GDYesButtonObjects2.length = 0;
gdjs.Scenario_322Code.GDNoButtonObjects1.length = 0;
gdjs.Scenario_322Code.GDNoButtonObjects2.length = 0;
gdjs.Scenario_322Code.GDContinueButtonObjects1.length = 0;
gdjs.Scenario_322Code.GDContinueButtonObjects2.length = 0;
gdjs.Scenario_322Code.GDQuestionAObjects1.length = 0;
gdjs.Scenario_322Code.GDQuestionAObjects2.length = 0;
gdjs.Scenario_322Code.GDCorrectAnswerObjects1.length = 0;
gdjs.Scenario_322Code.GDCorrectAnswerObjects2.length = 0;
gdjs.Scenario_322Code.GDWronganswerObjects1.length = 0;
gdjs.Scenario_322Code.GDWronganswerObjects2.length = 0;
gdjs.Scenario_322Code.GDDarkoverlayObjects1.length = 0;
gdjs.Scenario_322Code.GDDarkoverlayObjects2.length = 0;
gdjs.Scenario_322Code.GDSliderQ1Objects1.length = 0;
gdjs.Scenario_322Code.GDSliderQ1Objects2.length = 0;
gdjs.Scenario_322Code.GDRatingTextQ1Objects1.length = 0;
gdjs.Scenario_322Code.GDRatingTextQ1Objects2.length = 0;
gdjs.Scenario_322Code.GDLeftlabelQ1Objects1.length = 0;
gdjs.Scenario_322Code.GDLeftlabelQ1Objects2.length = 0;
gdjs.Scenario_322Code.GDRightlabelQ1Objects1.length = 0;
gdjs.Scenario_322Code.GDRightlabelQ1Objects2.length = 0;

gdjs.Scenario_322Code.eventsList0(runtimeScene);
gdjs.Scenario_322Code.GDImage1Objects1.length = 0;
gdjs.Scenario_322Code.GDImage1Objects2.length = 0;
gdjs.Scenario_322Code.GDImage2Objects1.length = 0;
gdjs.Scenario_322Code.GDImage2Objects2.length = 0;
gdjs.Scenario_322Code.GDNewSpriteObjects1.length = 0;
gdjs.Scenario_322Code.GDNewSpriteObjects2.length = 0;
gdjs.Scenario_322Code.GDQuestion1Objects1.length = 0;
gdjs.Scenario_322Code.GDQuestion1Objects2.length = 0;
gdjs.Scenario_322Code.GDNewSprite2Objects1.length = 0;
gdjs.Scenario_322Code.GDNewSprite2Objects2.length = 0;
gdjs.Scenario_322Code.GDYesButtonObjects1.length = 0;
gdjs.Scenario_322Code.GDYesButtonObjects2.length = 0;
gdjs.Scenario_322Code.GDNoButtonObjects1.length = 0;
gdjs.Scenario_322Code.GDNoButtonObjects2.length = 0;
gdjs.Scenario_322Code.GDContinueButtonObjects1.length = 0;
gdjs.Scenario_322Code.GDContinueButtonObjects2.length = 0;
gdjs.Scenario_322Code.GDQuestionAObjects1.length = 0;
gdjs.Scenario_322Code.GDQuestionAObjects2.length = 0;
gdjs.Scenario_322Code.GDCorrectAnswerObjects1.length = 0;
gdjs.Scenario_322Code.GDCorrectAnswerObjects2.length = 0;
gdjs.Scenario_322Code.GDWronganswerObjects1.length = 0;
gdjs.Scenario_322Code.GDWronganswerObjects2.length = 0;
gdjs.Scenario_322Code.GDDarkoverlayObjects1.length = 0;
gdjs.Scenario_322Code.GDDarkoverlayObjects2.length = 0;
gdjs.Scenario_322Code.GDSliderQ1Objects1.length = 0;
gdjs.Scenario_322Code.GDSliderQ1Objects2.length = 0;
gdjs.Scenario_322Code.GDRatingTextQ1Objects1.length = 0;
gdjs.Scenario_322Code.GDRatingTextQ1Objects2.length = 0;
gdjs.Scenario_322Code.GDLeftlabelQ1Objects1.length = 0;
gdjs.Scenario_322Code.GDLeftlabelQ1Objects2.length = 0;
gdjs.Scenario_322Code.GDRightlabelQ1Objects1.length = 0;
gdjs.Scenario_322Code.GDRightlabelQ1Objects2.length = 0;


return;

}

gdjs['Scenario_322Code'] = gdjs.Scenario_322Code;

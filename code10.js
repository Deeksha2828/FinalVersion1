gdjs.SCenario_325bCode = {};
gdjs.SCenario_325bCode.localVariables = [];
gdjs.SCenario_325bCode.idToCallbackMap = new Map();
gdjs.SCenario_325bCode.GDNewSpriteObjects1= [];
gdjs.SCenario_325bCode.GDNewSpriteObjects2= [];
gdjs.SCenario_325bCode.GDQuestion5Objects1= [];
gdjs.SCenario_325bCode.GDQuestion5Objects2= [];
gdjs.SCenario_325bCode.GDRatingtextQ6Objects1= [];
gdjs.SCenario_325bCode.GDRatingtextQ6Objects2= [];
gdjs.SCenario_325bCode.GDSquareWhiteSliderObjects1= [];
gdjs.SCenario_325bCode.GDSquareWhiteSliderObjects2= [];
gdjs.SCenario_325bCode.GDLeftlabelObjects1= [];
gdjs.SCenario_325bCode.GDLeftlabelObjects2= [];
gdjs.SCenario_325bCode.GDRIghtlabelObjects1= [];
gdjs.SCenario_325bCode.GDRIghtlabelObjects2= [];
gdjs.SCenario_325bCode.GDFinalsubmitObjects1= [];
gdjs.SCenario_325bCode.GDFinalsubmitObjects2= [];


gdjs.SCenario_325bCode.mapOfGDgdjs_9546SCenario_9595325bCode_9546GDFinalsubmitObjects1Objects = Hashtable.newFrom({"Finalsubmit": gdjs.SCenario_325bCode.GDFinalsubmitObjects1});
gdjs.SCenario_325bCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Finalsubmit"), gdjs.SCenario_325bCode.GDFinalsubmitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SCenario_325bCode.mapOfGDgdjs_9546SCenario_9595325bCode_9546GDFinalsubmitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RatingtextQ6"), gdjs.SCenario_325bCode.GDRatingtextQ6Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(6).setString((( gdjs.SCenario_325bCode.GDRatingtextQ6Objects1.length === 0 ) ? "" :gdjs.SCenario_325bCode.GDRatingtextQ6Objects1[0].getString()));
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Submit Scenario", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Finalsubmit"), gdjs.SCenario_325bCode.GDFinalsubmitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Leftlabel"), gdjs.SCenario_325bCode.GDLeftlabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("RIghtlabel"), gdjs.SCenario_325bCode.GDRIghtlabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("RatingtextQ6"), gdjs.SCenario_325bCode.GDRatingtextQ6Objects1);
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.SCenario_325bCode.GDSquareWhiteSliderObjects1);
{for(var i = 0, len = gdjs.SCenario_325bCode.GDSquareWhiteSliderObjects1.length ;i < len;++i) {
    gdjs.SCenario_325bCode.GDSquareWhiteSliderObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.SCenario_325bCode.GDRatingtextQ6Objects1.length ;i < len;++i) {
    gdjs.SCenario_325bCode.GDRatingtextQ6Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.SCenario_325bCode.GDLeftlabelObjects1.length ;i < len;++i) {
    gdjs.SCenario_325bCode.GDLeftlabelObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.SCenario_325bCode.GDRIghtlabelObjects1.length ;i < len;++i) {
    gdjs.SCenario_325bCode.GDRIghtlabelObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.SCenario_325bCode.GDFinalsubmitObjects1.length ;i < len;++i) {
    gdjs.SCenario_325bCode.GDFinalsubmitObjects1[i].hide(false);
}
}
}

}


};

gdjs.SCenario_325bCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SCenario_325bCode.GDNewSpriteObjects1.length = 0;
gdjs.SCenario_325bCode.GDNewSpriteObjects2.length = 0;
gdjs.SCenario_325bCode.GDQuestion5Objects1.length = 0;
gdjs.SCenario_325bCode.GDQuestion5Objects2.length = 0;
gdjs.SCenario_325bCode.GDRatingtextQ6Objects1.length = 0;
gdjs.SCenario_325bCode.GDRatingtextQ6Objects2.length = 0;
gdjs.SCenario_325bCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.SCenario_325bCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.SCenario_325bCode.GDLeftlabelObjects1.length = 0;
gdjs.SCenario_325bCode.GDLeftlabelObjects2.length = 0;
gdjs.SCenario_325bCode.GDRIghtlabelObjects1.length = 0;
gdjs.SCenario_325bCode.GDRIghtlabelObjects2.length = 0;
gdjs.SCenario_325bCode.GDFinalsubmitObjects1.length = 0;
gdjs.SCenario_325bCode.GDFinalsubmitObjects2.length = 0;

gdjs.SCenario_325bCode.eventsList0(runtimeScene);
gdjs.SCenario_325bCode.GDNewSpriteObjects1.length = 0;
gdjs.SCenario_325bCode.GDNewSpriteObjects2.length = 0;
gdjs.SCenario_325bCode.GDQuestion5Objects1.length = 0;
gdjs.SCenario_325bCode.GDQuestion5Objects2.length = 0;
gdjs.SCenario_325bCode.GDRatingtextQ6Objects1.length = 0;
gdjs.SCenario_325bCode.GDRatingtextQ6Objects2.length = 0;
gdjs.SCenario_325bCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.SCenario_325bCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.SCenario_325bCode.GDLeftlabelObjects1.length = 0;
gdjs.SCenario_325bCode.GDLeftlabelObjects2.length = 0;
gdjs.SCenario_325bCode.GDRIghtlabelObjects1.length = 0;
gdjs.SCenario_325bCode.GDRIghtlabelObjects2.length = 0;
gdjs.SCenario_325bCode.GDFinalsubmitObjects1.length = 0;
gdjs.SCenario_325bCode.GDFinalsubmitObjects2.length = 0;


return;

}

gdjs['SCenario_325bCode'] = gdjs.SCenario_325bCode;

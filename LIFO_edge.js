/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'stack_0022',
            type:'image',
            rect:['-194px','23px','194px','194px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"stack_002.png",'0px','0px']
         },
         {
            id:'stack2_002',
            type:'image',
            rect:['-194px','6px','194px','194px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"stack2_002.png",'0px','0px']
         },
         {
            id:'stack3_002',
            type:'image',
            rect:['-194px','6px','194px','194px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"stack3_002.png",'0px','0px']
         },
         {
            id:'Text',
            type:'text',
            rect:['178px','48px','194px','34px','auto','auto'],
            text:"What is LIFO ?",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'puu_002',
            display:'none',
            type:'image',
            rect:['220px','316px','79px','67px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"puu_002.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_stack2_002}": [
            ["style", "left", '-194px'],
            ["style", "top", '6px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "${_stack3_002}": [
            ["style", "left", '-194px'],
            ["style", "top", '6px']
         ],
         "${_stack_0022}": [
            ["style", "left", '-194px'],
            ["style", "top", '23px']
         ],
         "${_Text}": [
            ["style", "top", '48px'],
            ["style", "text-align", 'center'],
            ["style", "height", '34px'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif'],
            ["style", "left", '178px'],
            ["style", "width", '194px']
         ],
         "${_puu_002}": [
            ["style", "top", '316px'],
            ["style", "opacity", '1'],
            ["style", "left", '220px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6500,
         autoPlay: true,
         labels: {
            "loop": 0
         },
         timeline: [
            { id: "eid2", tween: [ "style", "${_stack_0022}", "top", '206px', { fromValue: '23px'}], position: 0, duration: 1000 },
            { id: "eid12", tween: [ "style", "${_stack_0022}", "top", '6px', { fromValue: '206px'}], position: 5500, duration: 1000 },
            { id: "eid14", tween: [ "style", "${_puu_002}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuint" },
            { id: "eid15", tween: [ "style", "${_puu_002}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0, easing: "easeInQuint" },
            { id: "eid1", tween: [ "style", "${_stack_0022}", "left", '184px', { fromValue: '-194px'}], position: 0, duration: 1000, easing: "easeOutQuint" },
            { id: "eid11", tween: [ "style", "${_stack_0022}", "left", '550px', { fromValue: '184px'}], position: 5500, duration: 1000, easing: "easeInQuint" },
            { id: "eid5", tween: [ "style", "${_stack3_002}", "left", '184px', { fromValue: '-194px'}], position: 2000, duration: 1000, easing: "easeOutQuint" },
            { id: "eid8", tween: [ "style", "${_stack3_002}", "left", '550px', { fromValue: '184px'}], position: 3500, duration: 1000, easing: "easeInQuint" },
            { id: "eid6", tween: [ "style", "${_stack3_002}", "top", '115px', { fromValue: '6px'}], position: 2000, duration: 1000 },
            { id: "eid7", tween: [ "style", "${_stack3_002}", "top", '6px', { fromValue: '115px'}], position: 3500, duration: 1000 },
            { id: "eid17", tween: [ "style", "${_puu_002}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
            { id: "eid4", tween: [ "style", "${_stack2_002}", "top", '153px', { fromValue: '6px'}], position: 1000, duration: 1000 },
            { id: "eid10", tween: [ "style", "${_stack2_002}", "top", '12px', { fromValue: '153px'}], position: 4500, duration: 1000 },
            { id: "eid3", tween: [ "style", "${_stack2_002}", "left", '184px', { fromValue: '-194px'}], position: 1000, duration: 1000, easing: "easeOutQuint" },
            { id: "eid9", tween: [ "style", "${_stack2_002}", "left", '550px', { fromValue: '184px'}], position: 4500, duration: 1000, easing: "easeInQuint" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-32491897");

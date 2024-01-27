const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }


    Engine.update(engine);

    // write code to display time in correct format here


}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();

    console.log(responseJSON);

    var datetime = responseJSON.datetime;
    //var hour = datetime.slice(11,13);
    hour=9

    console.log(datetime+"  " +hour);

    if(hour>=0 && hour<=2){
        bg = "sunrise1.png";
    }else if(hour>=2 && hour<=4){
        bg = "sunrise2.png";
    }else if(hour>=4 && hour<=6){
        bg = "sunset10.png";
    }else if(hour>=6 && hour<=8){
        bg = "sunset11.png";}
        else if(hour>=8 && hour<=10){
            bg = "sunset7.png";
        }else if(hour>=10 && hour<=12){
            bg = "sunrise2.png";
        }else if(hour>=12 && hour<=14){
            bg = "sunset10.png";
        }else if(hour>=14 && hour<=16){
            bg = "sunset11.png";
        }else if(hour>=16&& hour<=18){
                bg = "sunset7.png";
            }else if(hour>=18 && hour<=20){
                bg = "sunrise2.png";
            }else if(hour>=20 && hour<=22){
                bg = "sunset10.png";
            }else if(hour>=22 && hour<=24){
                bg = "sunset11.png";
    }else{
        bg = "sunset12.png";
    }
backgroundImg = loadImage(bg);

} 
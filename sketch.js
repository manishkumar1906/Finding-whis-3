var GrandPriest
var Whis
var Zeno
var follower1,follower2,follower3

var gameState = 0
var score = 0
var score1 = 0
var counter =0
function preload(){
  //load all images
  bg_image1 = loadImage("images/BG1.jpg")
  bg_image2 = loadImage("images/BG2.jpg")
  bg_image3 = loadImage("images/Palace.png")
  bg_image = loadImage("images/12.jpg")

  scroll_img =loadImage("images/ThreatNote.png")
  hakai_animation = loadAnimation("images/H1.png","images/H2.png","images/H3.png",
  "images/H4.png","images/H5.png","images/H6.png")

  kiblast_img = loadImage("images/kiBlast.png")

  obstacle_img = loadImage("images/astroid1.png")
  zeno_img = loadImage("images/Zeno.png")
  whis_img = loadImage("images/Whis.png")
  follower1_img = loadImage("images/Zarama.png")
  follower2_img = loadImage("images/Champa.png")
  follower3_img = loadImage("images/Beerus.png")
  grandPriest_img1 = loadImage("images/GrandPriest1.png")
  grandPriest_img2 = loadImage("images/GrandPriest2.png")
  grandPriest_img3 = loadImage("images/GrandPriest3.png")
  grandPriest_img4 = loadImage("images/GrandPriest4.jpg")
  
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  //grandPriest
  grandPriest =createSprite(170,400,10,10)
  grandPriest.addImage(grandPriest_img1)
  grandPriest.scale = 0.5
  //grandPriest.visible = false
  
  //Zeno
  zeno = createSprite(340,400,10,10)
  zeno.addImage(zeno_img)
  zeno.scale = 0.5
  //zeno.visible = false
  
  //follower1
  follower1 = createSprite(700,400,10,10)
  follower1.addImage(follower1_img)
  follower1.scale = 0.5
  //follower1.visible = false

  //follower2
  follower2 = createSprite(500,380,10,10)
  follower2.addImage(follower2_img)
  follower2.scale = 0.5
  //follower2.visible = false

  follower3 = createSprite(930,380,10,10)
  follower3.addImage(follower3_img)
  follower3.scale=0.4
  //follower3.visible = false
  
  //whis
  whis = createSprite(1150,400,10,10)
  whis.addImage(whis_img)
  whis.scale = 0.7
  //whis.visible = false

  button = createButton("Next")
  button.position(600,550)
  button.size(100,50)

  kiblastGroup= createGroup()
  hakaiGroup = createGroup()
  laserGroup = createGroup()
  obstacleGroup = createGroup()
}

function draw() {
 
  textSize(40)
  fill("white")
  
  if(gameState === 0){
    background(bg_image1);  
    text ("Finding Whis",600,50)
    button.mouseClicked(()=>{
      gameState =1
    })
  }
   if(gameState === 1){
    //story
    background(bg_image2);  
    grandPriest.visible = false
    zeno.visible = false
    follower1.visible = false
    follower2.visible = false
    follower3.visible = false
    whis.visible = false
    whis.visible = false
    text ("Finding Whis",600,50)
    text ("The Grand Priest is an Angel.He is the father of \nMartinu, Vados, Whis,Marcarita and Kusu.\nGrand Priest is the Most Powerfull in all the multiverse.\nHis favourite son is Whis, who is the weekest angle of all\nWhis has been kidnapped by Zeno. \nZeno is the enemy, has kidnapped Whis because he wants to take \nall the powers of Grand Priest \nto become the most powerful in the multiverse.",100,150)
    button.mouseClicked(()=>{
      gameState =2
    })
  }
  else if(gameState === 2){
    background(bg_image2);  
    grandPriest.visible = false
    zeno.visible = false
    follower1.visible = false
    follower2.visible = false
    follower3.visible = false
    whis.visible = false
    whis.visible = false
    text ("Finding Whis",600,50)
//write about each character

    button.mouseClicked(()=>{
      gameState =3
    })
  }
  else if(gameState === 3){
    //Your TAsks
    background(bg_image2);  
    grandPriest.visible = false
    zeno.visible = false
    follower1.visible = false
    follower2.visible = false
    follower3.visible = false
    whis.visible = false
    whis.visible = false
    text ("Finding Whis",600,50)
    text("Your Tasks: \n 1. find clues to locate Whis in the multiverse\n 2. fight the followers of Zeno\n 3. travel through the multiverse and stay away from \ntraps and obstacles\n 4. rescue Whis by defeating Zeno",200,100)
    button.mouseClicked(()=>{
      gameState =4
    })
  }
  else if(gameState === 4){
    //searching clues
    grandPriest.visible = false
    zeno.visible = false
    follower1.visible = false
    follower2.visible = false
    follower3.visible = false
    whis.visible = false
    background(0)
    image(scroll_img,100,50,1200,600)
    tint(255,190)
    image(follower1_img,900,150,250,400)
    fill("brown")
    strokeWeight(6)
    stroke("black")
    text ("This is King Zeno's follower,Zarama.\n We have captured Whis.\n If you want to save your son then \n come to the palace of Zeno-Sama.\n We will be waiting for you. \n Or find your son's body in the void. ",240,200)
    button.mouseClicked(()=>{
      gameState = 5
    })
  }
  else if(gameState === 5){
    //battel b/w followers and grand priest
    background (bg_image3)
    text ("Grand Priest: Where is Zeno. Where is my son? \n                                  Click next ",250,500)
    button.mouseClicked(()=>{
     gameState = 6
   })
     
   
  }
  else if(gameState === 6){
    background (bg_image3)
    text ("Zarama: You have to fight through us to get to zeno and your son",100,100)
    follower1.visible = true
    follower2.visible = true
    follower3.visible = true
   
    button.mouseClicked(()=>{
      gameState = 7
    }) 
  }

  else if(gameState === 7){
    background (bg_image3)
    follower1.visible = false
    follower2.visible = false
    follower3.visible = false
    whis.visible = false
    zeno.visible = false
    text ("INSTRUCTION FOR BATTEL",550,80)
    text ("Grand Priest Movements and attack:",100,150)
    text ("press UP_ARROW to move UP. \nPress DOWN_ARROW to move DOWN. \nPress SPACE to ATTACK",250,210)
    button.mouseClicked(()=>{
      gameState = 8
      grandPriest.x = 100
      grandPriest.y = 300
      follower1.x =1300
      follower1.y =300
      follower2.x =900
      follower2.y =400
      follower3.x =1100
      follower3.y =500
    }) 
  
  }

//battle sceen b/w grand priest and followers
  else if(gameState === 8){
    background(0)
    button.hide()
    grandPriest.visible = true
    follower1.visible = true
    follower2.visible = true
    follower3.visible = true
    whis.visible = false
    zeno.visible = false
    if(keyDown(UP_ARROW)){
      grandPriest.y -=7
    }
    if(keyDown(DOWN_ARROW)){
      grandPriest.y +=7
    }
    if (keyDown("space")){
      kiBlast()
    }
      
    

    
    if(frameCount %50 ===0){
      follower1.y = random(100,500)
      follower2.y = random(100,500)
      follower3.y = random(100,500)
    }
    
    if (frameCount %70 ===0){
      haKai()
    }
    
    if(kiblastGroup.isTouching(follower1)){
      follower1.destroy()
      counter+=1
    }
    if(kiblastGroup.isTouching(follower2)){
      follower2.destroy()
      counter+=1
    }
    if(kiblastGroup.isTouching(follower3)){
      follower3.destroy()
      counter+=1
    }
    if(counter === 3){
      button.show()
      text ("Grand Priest: I have defeated all of the followers of \n Your next on my list Zeno \n don't worry whis I am coming to save you",100,200)
      kiblastGroup.destroyEach()
      hakaiGroup.destroyEach()
    }
    button.mouseClicked(()=>{
      gameState = 9
      grandPriest.x = width/2
      grandPriest.y = height-200
    })
 
  }

  else if(gameState === 9){
    background (0)
  //  text("gameState 9!!!")
    text ("OMG I got struck in the astroid belt \n Now I need to navigate out of this safely \n ",150,100 )
    text ("Press 'Space' to shoot at the obstacles \n use 'Left and Right arrows' to move",150,300)
    button.mouseClicked(()=>{
      gameState = 10
      grandPriest.x = width/2
      grandPriest.y = height-200
    })
  }

  else if(gameState === 10){
    background(0)
    button.hide()
    console.log (gameState)
    spawnobstacle()
    text("Asteroid destroyed"+score1,100,50)
    if(keyDown(LEFT_ARROW)){
      grandPriest.x -=7
    }
    if(keyDown(RIGHT_ARROW)){
      grandPriest.x +=7
    }
    if (keyDown("space")){
      lasers()
    }
    if(laserGroup.isTouching(obstacleGroup))
    {
      textSize(50)
      score1 = score1 + 1
      for(i=0; i<obstacleGroup.length; i++)
        {
      //     console.log(obstacleGroup.get(i).depth+" obstacle")
           obstacleGroup.get(i).destroy()
        }
      
      for(i=0; i<laserGroup.length; i++)
        {
      //      console.log(laserGroup.get(i).depth+" laser")
           laserGroup.get(i).destroy()
        }
      
     
    }
    if(score1 > 15){
      gameState = 11
      obstacleGroup.destroyEach()
      laserGroup.destroyEach()

    }
  }

  else if(gameState === 11){
    background (grandPriest_img4)
    console.log(gameState)
    grandPriest.visible = false
    text ("I have destroyed you Zeno \n no more thereats for my family from now",50,100)
    button.show()
    button.mouseClicked(()=>{
      gameState = 12
    })
    
 
  
  }

  else if(gameState === 12){
    button.hide()
     background (bg_image)
  }

  else if(gameState === 13){
  }
  
  else if(gameState === 14){
  }

  drawSprites();
}


//attack of grandPriest
function kiBlast(){
  var kiblast = createSprite(grandPriest.x,grandPriest.y,20,20)
  //kiblast.addImage (kiBlast)
  kiblast.y = grandPriest.y
  kiblast.velocityX=6
  kiblast.lifetime =600
  kiblastGroup.add(kiblast)
}

//attack of followers
function haKai(){
  var hakai = createSprite(follower1.x,follower1.y,20,20)
 // hakai.addAnimation("throw",hakai_animation)
  hakai.y = follower2.y
  hakai.velocityX=-6
  hakai.lifetime =600
  hakaiGroup.add(hakai)
}
function spawnobstacle ()
 {
  if(frameCount%50 === 0)
  {
  obstacle = createSprite(375,0,30,30)
  obstacle.x = Math.round(random(10,740))
  obstacle.velocityY = 6;
  obstacle.scale = 0.1
  obstacle.lifetime = 170
  obstacle.addImage(obstacle_img)
  obstacleGroup.add(obstacle)
    obstacle.debug = true
    obstacle.setCollider("circle",0,0,190)
  }
  
  
 }
 function lasers()
{
  laser = createSprite(grandPriest.x,grandPriest.y,10,30)
  laser.velocityY = -3
  laser.shapeColor = "green"
  laser.lifetime = 200
  laserGroup.add(laser)
}
  
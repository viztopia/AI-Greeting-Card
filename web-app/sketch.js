let canvasWidth = 600;
let canvasHeight = 800;
let margin = 40;  // Increased margin
let localFont;

function preload() {
  // Load the local font "Bellefair-Regular.ttf" from the same folder.
  localFont = loadFont('Bellefair-Regular.ttf');
}

function setup() {
  let cnv = createCanvas(canvasWidth, canvasHeight);
  cnv.parent("cardCanvasContainer");
  textWrap(WORD);
  noLoop(); // Only redraw on demand.
}

function draw() {
  // Set background to pure black for the mask effect.
  background(0);
  
  // Draw a thicker white border.
  stroke(255);
  strokeWeight(4);
  noFill();
  rect(margin / 2, margin / 2, canvasWidth - margin, canvasHeight - margin);
  
  if (!window.cardData) return;

  strokeWeight(1);
  
  // Set text style: use the local font, BOLD, and white fill.
  textFont(localFont);
  textStyle(BOLD);
  fill(255);
  
  // --- Draw Title ---
  let titleSize = 70;  // Increased title size
  textSize(titleSize);
  textAlign(CENTER, TOP);
  let titleBoxX = margin;
  let titleBoxY = margin;
  let titleBoxW = canvasWidth - 2 * margin;
  text(window.cardData.title, titleBoxX, titleBoxY, titleBoxW);
  
  // --- Draw Salutation ---
  let gapAfterTitle = 150;  // Ample gap after title
  let salutationSize = 50;   // Increased salutation size
  textSize(salutationSize);
  textAlign(LEFT, TOP);
  let salutationBoxX = margin;
  let salutationBoxY = titleBoxY + titleSize * 1.5 + gapAfterTitle;
  let salutationBoxW = canvasWidth - 2 * margin;
  text(window.cardData.salutation, salutationBoxX, salutationBoxY, salutationBoxW);
  
  // --- Draw Main Message ---
  let gapAfterSalutation = 120; // Increased gap after salutation
  let messageSize = 40;  // Increased main message size
  textSize(messageSize);
  textAlign(LEFT, TOP);
  let messageBoxX = margin;
  let messageBoxY = salutationBoxY + salutationSize * 1.5 + gapAfterSalutation;
  let messageBoxW = canvasWidth - 2 * margin;
  text(window.cardData.message, messageBoxX, messageBoxY, messageBoxW);
}

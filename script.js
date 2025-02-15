const heartButton = document.getElementById('heartButton');
const heartsContainer = document.getElementById('heartsContainer');

let count = 0;
function sendHearts() {

    // เมื่อคลิก ให้ทำการแสดงหัวใจลอยขึ้นมา

    count = count+1;
    console.log(count);
    
    let left = (Math.random()  * 100) - 6; //ลบ 6 เพราะอยากให้ หัวใจและรูปภาพไม่แสดงเกินขอบด้านขวาของการ์ด
    let heart = document.createElement('div');  //สร้าง <div></div>
    heart.classList.add('heart');  // เพิ่ม class heart ลงไปใน div <div class="heart"></div>
    heart.style.left = left + '%'; // 20%  <div class="heart" style="left:20%"></div>
    heart.innerHTML = '💖';   // <div class="heart" style="left:20%">❤</div>

    let img = document.createElement('img'); //<img >
    img.src = 'girl100.png';  //<img src="girl100.png">
    img.style.left = left + '%';  // <img src="girl100.png" style="left:20%">

    if(count === 6) { //จำนวนในการคลิกมีค่าเท่ากับ 6
        heartsContainer.appendChild(img);  //<div class="hearts-container" id="heartsContainer">  <img src="girl100.png" style="left:20%">  </div>
        count = 0; 
    } else {
        heartsContainer.appendChild(heart);  //<div class="hearts-container" id="heartsContainer">  <div class="heart" style="left:20%">❤</div>   </div>
    }

    setTimeout( ()=> {
        heart.remove(); //ลบหัวใจทิ้ง
        img.remove(); //ลบรูปภาพ

    }, 3950 ); // ปรับแก้เป็น 3950 จากเดิม 4000 เพราะ css สั่งไว้ 4 วิ ฉันอยากให้มันลบก่อน อนิเมชั่นจะทำงานเสร็จ เพื่อแก้ไขบั๊ก เปิดใน fire fox แล้วยังกะพริบอยู่

}


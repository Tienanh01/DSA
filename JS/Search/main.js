let arr = [23, 1, 10, 5, 6];
let i = 1;
let j;
let key;
let sorting = true;

function setup() {
  createCanvas(400, 200);
  frameRate(0.5); // Giảm tốc độ để dễ quan sát
}

function draw() {
  background(220);
  drawArray(arr);

  if (sorting) {
    if (i < arr.length) {
      if (j == undefined) {
        key = arr[i];
        j = i - 1;
      }
      
      if (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      } else {
        arr[j + 1] = key;
        i++;
        j = undefined;
      }
    } else {
      sorting = false; // Dừng khi hoàn tất
    }
  }
}

function mousePressed() {
    loop(); // Chạy tiếp khi click chuột
}

function drawArray(arr) {
  let barWidth = width / arr.length;
  for (let k = 0; k < arr.length; k++) {
    fill(k === i ? 'red' : 'blue'); // Highlight phần tử đang xét
    rect(k * barWidth, height - arr[k] * 5, barWidth - 2, arr[k] * 5);
    
    fill(0); // Màu chữ là đen
    text(arr[k], k * barWidth + barWidth / 2, height - arr[k] * 5 - 10); // Hiển thị giá trị trên cột
}
}

/**
 * Ta quy định mảng ban đầu thành 2 mảng nhỏ , mảng bên phải là mảng chưa xắp xếp , mảng bên trái là mảng đã xắp xếp .
 * 
 * Chọn 1 phần tử trong mảng , xắp xắp phần tử đó vào đúng vị trí mảng đã xắp xếp , 
 */ 


// insertion sort 

let arr1 = [23, 1, 10, 5, 6];
console.log(arr1);

for (let i = 1; i < arr1.length; i++) {
    
    const key = arr1[i];
    let j = i -1;
      while(j >= 0 && arr1[j] > key){
        arr1[j+1] = arr1[j];
        j--;
      }
      arr1[j+1] =  key;
}
console.log("array sorted ");
console.log(arr1) 

// bubble sort

let hello = function () {
    let arr = [23, 1, 10, 5, 6];
    console.log("bubble sort "+ arr)
  const n  = arr.length ;
  let sorted = true;
  let temp = 0;
    for (let i = 0; i < n -1 ; i++) {
      
        for (let j = 0; j < n-i -1; j++) {
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] =  arr[j+1];
                arr[j+1] = temp;
                sorted =  false;
            }
          
        }      
        if(sorted){
          break;
        }
    }
    console.log("after bubble sort "+arr)
}()
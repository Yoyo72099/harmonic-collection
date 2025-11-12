// 1. 定义JavaScript对象（选择“房子”主题）
const myHouse = {
    type: "Apartment", // 字符串：房屋类型
    area: 85, // 数字：面积（平方米）
    rooms: 3, // 数字：房间数量
    isFurnished: true, // 布尔值：是否带家具
    amenities: ["WiFi", "Air Conditioner", "Washing Machine", "Balcony"], // 数组：设施
    location: { // 嵌套对象：位置信息
        city: "Shanghai",
        district: "Pudong",
        distanceToSubway: 0.8 // 数字：距离地铁（公里）
    }
};

// 2. 函数：在圆形中显示对象信息
function displayHouseInfo() {
    const circle = document.getElementById("circle");
    let infoHTML = ""; // 用于拼接HTML内容

    // 遍历对象属性，格式化显示
    for (const key in myHouse) {
        const value = myHouse[key];

        if (Array.isArray(value)) {
            // 处理数组（amenities）
            infoHTML += `<p><strong>${key}:</strong><br>${value.join("<br>")}</p>`;
        } else if (typeof value === "object" && value !== null) {
            // 处理嵌套对象（location）
            infoHTML += `<p><strong>${key}:</strong><br>`;
            for (const nestedKey in value) {
                infoHTML += `${nestedKey}: ${value[nestedKey]}<br>`;
            }
            infoHTML += `</p>`;
        } else {
            // 处理基础类型（字符串、数字、布尔值）
            infoHTML += `<p><strong>${key}:</strong> ${value}</p>`;
        }
    }

    // 添加颜色切换按钮
    infoHTML += `<button onclick="makeItGreen()">Turn Green</button>`;

    // 将内容插入圆形
    circle.innerHTML = infoHTML;
}

// 3. 函数：将圆形颜色改为绿色
function makeItGreen() {
    const circle = document.getElementById("circle");
    circle.style.backgroundColor = "green";
    // 同时改变按钮文字颜色，保持对比
    circle.querySelector("button").style.color = "green";
}

// 页面加载完成后自动显示信息
window.onload = displayHouseInfo;

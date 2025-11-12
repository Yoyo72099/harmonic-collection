// 1. 定义JavaScript对象（选择“食谱”主题）
const pastaRecipe = {
    name: "Creamy Garlic Pasta", // 字符串
    prepTime: 10, // 数字（分钟）
    cookTime: 15, // 数字（分钟）
    servings: 4, // 数字（份）
    ingredients: [ // 数组
        "200g spaghetti",
        "4 cloves garlic (minced)",
        "1 cup heavy cream",
        "1/2 cup Parmesan cheese",
        "2 tbsp olive oil",
        "Salt and pepper to taste"
    ],
    nutrition: { // 嵌套对象
        calories: 420,
        protein: 12, // 克
        carbs: 55, // 克
        fat: 18 // 克
    },
    isVegetarian: true // 布尔值
};

// 2. 函数：在圆形中显示对象信息
function displayInfo() {
    const circle = document.getElementById("circle");
    let info = "";

    // 遍历对象属性，拼接信息文本
    for (const key in pastaRecipe) {
        const value = pastaRecipe[key];
        
        if (Array.isArray(value)) {
            // 处理数组（ ingredients ）
            info += `<strong>${key}:</strong><br>${value.join("<br>")}<br><br>`;
        } else if (typeof value === "object" && value !== null) {
            // 处理嵌套对象（ nutrition ）
            info += `<strong>${key}:</strong><br>`;
            for (const nestedKey in value) {
                info += `${nestedKey}: ${value[nestedKey]}<br>`;
            }
            info += "<br>";
        } else {
            // 处理基础类型（字符串、数字、布尔值）
            info += `<strong>${key}:</strong> ${value}<br><br>`;
        }
    }

    // 添加一个按钮，用于触发颜色改变
    info += '<button onclick="makeItGreen()">Turn Green</button>';

    // 将信息插入圆形容器
    circle.innerHTML = info;
}

// 3. 函数：将圆形颜色改为绿色
function makeItGreen() {
    document.getElementById("circle").style.backgroundColor = "green";
}

// 页面加载后自动显示信息
displayInfo();

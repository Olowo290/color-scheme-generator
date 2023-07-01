const Btn = document.getElementById("btn")
const colorpicker = document.getElementById('color-picker')
const selected = document.getElementById("select")
let colorArray = []


Btn.addEventListener("click", async ()=>{
    let selectedArr =[]
    const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${colorpicker.value.replace("#","")}&mode=${selected.value}&count=5`)
    const data = await res.json()

    for(let i = 0;i<5;i++){
        selectedArr = [data.colors[i].hex.value,...selectedArr]
    }
    colorArray = selectedArr
    console.log(colorArray)
    document.getElementById("sec").innerHTML = renderHtml()
    
})

function renderHtml(){
    return colorArray.map(color=>
        `
        <div class="space-con">
        <div class="space" id=${color} data-id="hexColor" style="background-color: ${color};"></div>
        <p class="hexColorPara" data-id="hexColorPara">${color}</p>
    </div>`
    ).join("")
    }
document.addEventListener("click",(e)=>{
    if(e.target.dataset.id === "hexColor"){
       navigator.clipboard.writeText(e.target.id)
       const linkedPara = e.target.nextElementSibling;
        linkedPara.innerText = "Copied";
        setTimeout(() => {
        linkedPara.innerText = colorArray.find(color => color === e.target.id);
        }, 1000);
    }else if(e.target.dataset.id === "hexColorPara"){
        navigator.clipboard.writeText(e.target.textContent)
    }
})
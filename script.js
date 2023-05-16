const Btn = document.getElementById("btn")
const colorpicker = document.getElementById('color-picker')
const selected = document.getElementById("select")
let colorArray = []


Btn.addEventListener("click", async ()=>{
    let selectedArr =[]
    const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${colorpicker.value.replace("#","")}&mode=${selected.value}&count=5`)
    const data = await res.json()
    console.log(data)
    console.log(colorpicker.value)
       
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
        <div class="space" style="background-color: ${color};"></div>
        <p>${color}</p>
    </div>`
    ).join("")
    }